import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'
import {useRouter} from "nuxt3/dist/pages/runtime/composables";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-186191303-1'
        }
    })
})