<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full px-2 lg:px-0 lg:w-4/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          今までの経歴や開発実績・製作物を紹介します
        </p>
        <div class="flex justify-center items-center">
          <nuxt-link
            to="/projects"
            class="w-40 shadow bg-white border border-bland-500 font-bold text-center text-bland-500 text-xs py-1 px-4 mr-2 lg:w-56 lg:text-base lg:mr-4"
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
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-gradient-red-to-orange px-4 py-1 mt-1 mr-1 rounded-full font-semibold text-white text-xs"
                >
                  Business
                </span>
                <img src="~/assets/images/projects/growhub.com.hk.png" />
              </div>
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://growhub.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-primary underline"
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
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-gradient-red-to-orange px-4 py-1 mt-1 mr-1 rounded-full font-semibold text-white text-xs"
                >
                  Business
                </span>
                <img src="~/assets/images/projects/mentor.growhub.com.hk.png" />
              </div>
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://mentor.growhub.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-primary underline"
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
          <div class="mb-6 lg:w-1/2 lg:px-2">
            <n-browser-window>
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-gradient-red-to-orange px-4 py-1 mt-1 mr-1 rounded-full font-semibold text-white text-xs"
                >
                  Personal
                </span>
                <img src="~/assets/images/projects/blog.nakamu.life.png" />
              </div>
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://blog.nakamu.life/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-primary underline"
              >
                blog.nakamu.life
              </a>
              <p class="text-xs mt-4">
                エンジニアとして培ったノウハウをまとめた雑記ブログ
              </p>
              <div class="mt-2">
                <n-tag text="Nuxt.js" class="mr-1" />
                <n-tag text="Netlify" class="mr-1" />
                <n-tag text="Contentful" class="mr-1" />
                <n-tag text="Tailwind CSS" />
              </div>
            </div>
          </div>
          <div class="mb-6 lg:w-1/2 lg:px-2">
            <n-browser-window>
              <div class="relative">
                <span
                  class="absolute top-0 right-0 bg-gradient-red-to-orange px-4 py-1 mt-1 mr-1 rounded-full font-semibold text-white text-xs"
                >
                  Personal
                </span>
                <img src="~/assets/images/projects/enjoyhk.nakamu.life.png" />
              </div>
            </n-browser-window>
            <div class="text-center mt-4">
              <a
                href="https://enjoyhk.nakamu.life/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-primary underline"
              >
                enjoyhk.nakamu.life
              </a>
              <p class="text-xs mt-4">
                香港生活を綴った雑記ブログ
              </p>
              <div class="mt-2">
                <n-tag text="Gatsby" class="mr-1" />
                <n-tag text="Netlify" class="mr-1" />
                <n-tag text="Tailwind CSS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-10">
      <div class="flex justify-center">
        <div class="w-full px-2 lg:px-0 lg:w-3/5">
          <div
            class="bg-gradient-gray rounded-lg shadow-xl text-white px-5 py-5 lg:py-10"
          >
            <p class="text-lg mb-2 lg:text-2xl">
              過去には数多くの案件に携わっております。詳細な開発実績や開発できる内容を知りたい方はこちら！
            </p>
            <p class="text-xs mb-10">
              お気軽にご質問・ご相談ください。内容確認後、ご連絡させて頂きます。
            </p>
            <div>
              <n-round-button
                :tag-name="'nuxt-link'"
                to="/contact"
                class="shadow-primary-500 bg-bland-500 text-sm text-white px-10 hover:bg-white hover:bg-bland-600 hover:shadow-xl"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                お問い合わせ
              </n-round-button>
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
import NRoundButton from '~/elements/NRoundButton.vue'
import NBrowserWindow from '~/components/NBrowserWindow.vue'

export default defineComponent({
  components: {
    NTitle,
    NTag,
    NRoundButton,
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
