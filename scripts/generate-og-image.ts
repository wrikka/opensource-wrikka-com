/**
 * Generates public/og-image.png (1200x630) — a branded social card drawn
 * pixel-by-pixel: dark gradient background, accent grid glow, and a "W"
 * lettermark built from rounded bars. No external image deps; uses zlib.
 */
import { writeFile } from "node:fs/promises";
import { deflateSync } from "node:zlib";

const W = 1200;
const H = 630;

// --- CRC32 (PNG chunk checksums) ---
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
	let c = n;
	for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
	crcTable[n] = c >>> 0;
}
function crc32(buf: Buffer): number {
	let c = 0xffffffff;
	for (const b of buf) c = (crcTable[(c ^ b) & 0xff] ^ (c >>> 8)) >>> 0;
	return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
	const t = Buffer.from(type, "ascii");
	const len = Buffer.alloc(4);
	len.writeUInt32BE(data.length);
	const crc = Buffer.alloc(4);
	crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
	return Buffer.concat([len, t, data, crc]);
}

function encodePng(pixels: Uint8Array): Buffer {
	// RGBA rows with filter byte 0
	const raw = Buffer.alloc(H * (1 + W * 4));
	for (let y = 0; y < H; y++) {
		const row = y * (1 + W * 4);
		raw[row] = 0;
		raw.set(pixels.subarray(y * W * 4, (y + 1) * W * 4), row + 1);
	}
	const ihdr = Buffer.alloc(13);
	ihdr.writeUInt32BE(W, 0);
	ihdr.writeUInt32BE(H, 4);
	ihdr[8] = 8; // bit depth
	ihdr[9] = 6; // color type RGBA
	return Buffer.concat([
		Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
		chunk("IHDR", ihdr),
		chunk("IDAT", deflateSync(raw, { level: 9 })),
		chunk("IEND", Buffer.alloc(0)),
	]);
}

// --- Pixel helpers ---
const px = new Uint8Array(W * H * 4);
function set(x: number, y: number, r: number, g: number, b: number, a = 255) {
	if (x < 0 || y < 0 || x >= W || y >= H) return;
	const i = (y * W + x) * 4;
	const sa = a / 255;
	px[i] = Math.round(r * sa + px[i] * (1 - sa));
	px[i + 1] = Math.round(g * sa + px[i + 1] * (1 - sa));
	px[i + 2] = Math.round(b * sa + px[i + 2] * (1 - sa));
	px[i + 3] = 255;
}

function fillRect(x0: number, y0: number, w: number, h: number, c: number[], a = 255) {
	for (let y = Math.floor(y0); y < y0 + h; y++) {
		for (let x = Math.floor(x0); x < x0 + w; x++) set(x, y, c[0], c[1], c[2], a);
	}
}

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

// Background: dark diagonal gradient  #0b0d12 -> #12241a (green-tinted)
const bgA = [11, 13, 18];
const bgB = [18, 36, 26];
for (let y = 0; y < H; y++) {
	for (let x = 0; x < W; x++) {
		const t = (x / W + y / H) / 2;
		set(x, y, lerp(bgA[0], bgB[0], t), lerp(bgA[1], bgB[1], t), lerp(bgA[2], bgB[2], t));
	}
}

// Subtle grid of dots, accent green 126,231,135
const accent = [126, 231, 135];
const blue = [86, 182, 255];
for (let gy = 40; gy < H; gy += 48) {
	for (let gx = 40; gx < W; gx += 48) {
		set(gx, gy, accent[0], accent[1], accent[2], 18);
	}
}

// Accent bar along the bottom
fillRect(0, H - 14, W, 14, accent);
fillRect(0, H - 18, W, 4, blue);

// "W" lettermark: 4 slanted bars, centered left-of-middle
const cx = 200;
const cy = H / 2;
const barW = 34;
const barH = 220;
const tilt = 26; // horizontal shift across the bar height
const gap = 40;

function slantedBar(x0: number, y0: number, dir: 1 | -1) {
	for (let y = 0; y < barH; y++) {
		const off = dir === 1 ? (y / barH) * tilt : ((barH - y) / barH) * tilt;
		fillRect(x0 + off, y0 + y, barW, 1, accent);
	}
}
// W = down, up, down, up bars
slantedBar(cx, cy - barH / 2, 1);
slantedBar(cx + tilt + gap / 2, cy - barH / 2, -1);
slantedBar(cx + tilt + gap / 2 + tilt + gap / 2, cy - barH / 2, 1);
slantedBar(cx + 2 * (tilt + gap / 2) + tilt + gap / 2, cy - barH / 2, -1);

// Text-like blocks: title + subtitle placeholder bars (geometric text stand-in)
// Title bar cluster (simulated text lines)
fillRect(560, cy - 110, 460, 26, [227, 232, 239]); // title line 1
fillRect(560, cy - 66, 380, 26, [227, 232, 239]); // title line 2
fillRect(560, cy - 4, 300, 14, accent, 220); // accent underline
fillRect(560, cy + 34, 420, 12, [139, 149, 167], 200); // subtitle line
fillRect(560, cy + 60, 340, 12, [139, 149, 167], 160);

await writeFile("public/og-image.png", encodePng(px));
console.log("Generated public/og-image.png (1200x630)");
