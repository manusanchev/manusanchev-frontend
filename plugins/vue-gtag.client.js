import { defineNuxtPlugin } from '#app'
import VueGtag, {trackRouter} from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-186191303-1'
        }
    })
    trackRouter(nuxtApp.vueApp.$nuxt.$router);
})