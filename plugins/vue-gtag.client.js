import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'
import {useRouter} from "nuxt3/dist/pages/runtime/composables";

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-186191303-1'
        }
    }, router.getRoutes())
})