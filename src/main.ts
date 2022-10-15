import App from "./App.vue";
import { ViteSSG } from "vite-ssg/single-page";
import "@assets/style/index.css";
import Container from "@utils/container";

export const createApp = ViteSSG(App, (context) => {
  const container = new Container();
  const { cradle } = container.getContainerInstance();
  context.app.provide<any>("container", cradle);
});
