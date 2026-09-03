import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureAttribution } from "./lib/attribution";

// Capture ad click IDs / UTMs immediately on first page load, before render.
try {
  captureAttribution();
} catch {
  /* attribution must never block app boot */
}

createRoot(document.getElementById("root")!).render(<App />);
