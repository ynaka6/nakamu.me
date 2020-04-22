const buildModules = []
if (process.env.NODE_ENV !== 'production') {
  buildModules.push(
    ...[
      // Doc: https://github.com/nuxt-community/eslint-module
      '@nuxtjs/eslint-module',
      // Doc: https://github.com/nuxt-community/stylelint-module
      '@nuxtjs/stylelint-module'
    ]
  )
}

export default {
  mode: 'universal',

  srcDir: 'src',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Nakamu.life',
    htmlAttrs: {
      lang: 'ja'
    },
    bodyAttrs: {
      class: ['light']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '香港在住のWebデベロッパー「なかむ」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '香港でWebデベロッパーやってる「なかむ」です。'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '香港在住のWebデベロッパー「なかむ」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vue-scrollto.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxt/typescript-build',

    ...buildModules
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // Require by vee-validate
    transpile: ['vee-validate/dist/rules'],

    postcss: {
      plugins: {
        'postcss-for': {},
        'postcss-calc': {},
        'postcss-nesting': {},
        'postcss-preset-env': { stage: 3 }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  purgeCSS: {
    whitelistPatterns: [/(^|\.)fa-/, /-fa($|\.)/, /(^|\.)page-/]
  },
  generate: {
    routes: [
      '/about',
      '/projects',
      '/experiences',
      '/services',
      '/contact',
      '/contact/thanks'
    ]
  }
}
