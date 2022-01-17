import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

    meta: {
        htmlAttrs: {
            lang: 'es'
        },
        title: 'Frontend Developer - Manuel Sanchez',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'dPbYI3pAlXBeum68Tb_zxLK_kOmWy5BhkG5HlZvzXGc' },
            {
                hid: 'description',
                name: 'description',
                content: 'Desarrollador web con experiencia en aplicaciones web zero downtime, aplicando clean architecture y buenas practicas con SOLID'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    css: [
        '@/assets/main.css',
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.ts'),
        },
    },
    components: false,
})
