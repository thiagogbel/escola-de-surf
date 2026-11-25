import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "@fontsource-variable/bricolage-grotesque";
import "./style.css";

createRoot(document.getElementById("root")!).render(<HashRouter><App /></HashRouter>);
