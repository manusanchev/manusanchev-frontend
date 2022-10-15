import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";
import "@src/assets/style/index.css";
import Container from "@src/utils/container";

export const createApp = ViteSSG(App, ({ app }) => {
  // ...
  const container = new Container();
  const { cradle } = container.getContainerInstance();
  app.provide<any>("container", cradle);
});
