import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components:[
    {
      path:'~/components',
      pathPrefix:false
    },
  ],

  hooks:{
    'pages:extend'(pages){
      function setMiddleware(pages:NuxtPage[]){
        for(const page of pages){
          if(page.path==='/about'){
            page.meta||={}
            page.meta.middleware=['named']
          }
        }
      }

      setMiddleware(pages)
    }
  },

  imports:{
    dirs:[
      'composables',
      'composables/**',

    ]
  },

  plugins:[
    '~/plugins/foo/my-plugin'
  ]
})
