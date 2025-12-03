import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/i18n";
import "./index.css";

import { registerSW } from "virtual:pwa-register";  // ⬅️ add this

// register service worker
registerSW({
  immediate: true,
});

createRoot(document.getElementById("root")!).render(<App />);
