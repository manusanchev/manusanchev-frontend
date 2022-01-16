import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    const router = nuxtApp.vueApp.$nuxt.$router
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-186191303-1'
        }
    }, router)
})