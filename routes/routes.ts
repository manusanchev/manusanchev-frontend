import { RouteRecordRaw } from "vue-router";
import Index from "@pages/Index.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
];

export default routes;