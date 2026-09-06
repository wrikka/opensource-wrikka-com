const categoryIcons: Record<string, string> = {
	Root: "i-mdi:file-tree-outline",
	"CLI Apps": "i-mdi:console",
	"Desktop Apps": "i-mdi:application-outline",
	"TUI Apps": "i-mdi:monitor",
	"WASM Apps": "i-mdi:application-braces-outline",
	"Web Apps": "i-mdi:web",
	Domain: "i-mdi:domain",
	Infra: "i-mdi:server-outline",
	Tools: "i-mdi:tools",
	Foundation: "i-mdi:layers-outline",
	Libraries: "i-mdi:bookshelf",
	"TUI Lib": "i-mdi:console-line",
	"Tauri Plugin": "i-mdi:power-plug-outline",
	"Services Apps": "i-mdi:cloud-outline",
	"Toolkits Apps": "i-mdi:toolbox-outline",
};

export function categoryIcon(category: string): string {
	return categoryIcons[category] ?? "i-mdi:folder-outline";
}

export function typeIcon(type: "rust" | "npm"): string {
	return type === "rust" ? "i-mdi:language-rust" : "i-mdi:nodejs";
}
