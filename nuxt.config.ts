import type { NuxtPage } from 'nuxt/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        head: {
            title: 'Nuxt Mastering',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My Nuxt App',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: ['~/assets/css/main.css'],

    hooks: {
        'pages:extend'(pages) {
            function setMiddleware(pages: NuxtPage[]) {
                for (const page of pages) {
                    if (page.path === '/about') {
                        page.meta ||= {};
                        page.meta.middleware = ['named'];
                    }
                }
            }

            setMiddleware(pages);
        },
    },

    imports: {
        dirs: ['composables', 'composables/**'],
    },

    plugins: ['~/plugins/foo/my-plugin'],

    modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

    features: { devLogs: false },

    pinia: {
        storesDirs: ['./stores/**'],
        autoImport: ['defineStore'],
    },
});
