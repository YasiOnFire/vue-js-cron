import CronCore from '@vue-js-cron/core'
import CronLight from '@vue-js-cron/light'
import '@vue-js-cron/light/dist/light.css'
import CronVuetify from '@vue-js-cron/vuetify'
import '@vue-js-cron/vuetify/dist/vuetify.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import 'vuetify/styles'

import { defineClientConfig } from '@vuepress/client'

import { variables } from './vars'

const vuetify = createVuetify({
  components
})

export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.use(vuetify)
    app.use(CronCore)
    app.use(CronVuetify)
    app.use(CronLight)

    app.mixin({
      computed: {
        $vars() {
          return variables
        }
      }
    })
  },
  setup(){},
  rootComponents: [],
})

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   Vue.use(Vuetify)
//   options.vuetify = new Vuetify({})
//   Vue.use(CronCore)
//   Vue.use(CronVuetify)
//   Vue.use(CronLight)
// }
