import { initTheme, mountDocsApp } from "@wrikka/create-docs/solid";
import "@wrikka/create-docs/theme.css";
import "@wrikka/create-docs/markdown-content.css";
import "virtual:uno.css";
import { docsAppConfig } from "./app-config";

initTheme(docsAppConfig.theme?.defaultMode ?? "dark");

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("root element not found");

function showError(error: unknown) {
	const message =
		error instanceof Error ? `${error.message}\n${error.stack ?? ""}` : String(error);
	rootEl!.innerHTML = `
		<div style="padding: 24px; color: #ff6b6b; font-family: monospace; white-space: pre-wrap; overflow: auto;">
			<h1 style="font-size: 18px; margin: 0 0 12px; color: #ff6b6b;">Runtime error</h1>
			${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
		</div>
	`;
}

window.addEventListener("error", (event) => {
	showError(event.error ?? event.message);
});

window.addEventListener("unhandledrejection", (event) => {
	showError(event.reason);
});

try {
	mountDocsApp(docsAppConfig, rootEl);
} catch (error) {
	showError(error);
}
