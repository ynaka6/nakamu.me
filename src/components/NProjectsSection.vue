<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full px-2 lg:px-0 lg:w-4/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-gray-700 mb-4">
          今までの経歴や開発実績・製作物を紹介します
        </p>
        <div class="flex justify-center items-center">
          <nuxt-link
            to="/projects"
            class="w-40 shadow border border-primary-500 font-bold text-center text-primary-500 text-xs py-1 px-4 mr-2 lg:w-56 lg:text-base lg:mr-4"
          >
            Projects
          </nuxt-link>
          <nuxt-link
            to="/experiences"
            class="w-40 shadow bg-white font-bold text-center text-gray-800 text-xs py-1 px-4 lg:w-56 lg:text-base"
          >
            Work Experience
          </nuxt-link>
        </div>
        <div class="p-2 lg:flex lg:flex-wrap lg:p-6">
          <div class="mb-6 lg:w-1/2 lg:px-2">
            <n-browser-window>
              <img src="~/assets/images/projects/growhub.com.hk.png" />
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://growhub.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-gray-800 underline"
              >
                growhub.com.hk
              </a>
              <p class="text-xs mt-4">
                GatsbyJSで構築された香港法人のコーポレートサイトです。
              </p>
              <div class="mt-2">
                <n-tag text="GatsbyJs" class="mr-1" />
                <n-tag text="Netlify" class="mr-1" />
                <n-tag text="Tailwind CSS" />
              </div>
            </div>
          </div>
          <div class="mb-6 lg:w-1/2 lg:px-2">
            <n-browser-window>
              <img src="~/assets/images/projects/mentor.growhub.com.hk.png" />
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://mentor.growhub.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-gray-800 underline"
              >
                mentor.growhub.com.hk
              </a>
              <p class="text-xs mt-4">
                Nuxt.jsを利用したメンター契約の為のサイトです。Stripeを利用して決済を行い、メンター契約となります
              </p>
              <div class="mt-2">
                <n-tag text="Nuxt.js" class="mr-1" />
                <n-tag text="Netlify" class="mr-1" />
                <n-tag text="Tailwind CSS" class="mr-1" />
                <n-tag text="Stripe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NTitle from '~/elements/NTitle.vue'
import NTag from '~/elements/NTag.vue'
import NBrowserWindow from '~/components/NBrowserWindow.vue'

export default defineComponent({
  components: {
    NTitle,
    NTag,
    NBrowserWindow
  },
  setup() {
    const title: string = 'Projects and Works'
    return {
      title
    }
  }
})
</script>
