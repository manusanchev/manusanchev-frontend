import App from './App.vue'
import {viteSSR} from "vite-ssr/vue";
import routes from "../routes/routes";
import {createHead} from "@vueuse/head";
import "@src/assets/style/index.css";

export default viteSSR(App, { routes }, ({app}) => {
    const head = createHead()
    app.use(head)
    return {head};
});