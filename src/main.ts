import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";
import "@src/assets/style/index.css";

export const createApp = ViteSSG(App);
