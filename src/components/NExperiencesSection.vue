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
            class="w-40 shadow bg-white font-bold text-center text-gray-800 text-xs py-1 px-4 mr-2 lg:w-56 lg:text-base lg:mr-4"
          >
            Projects
          </nuxt-link>
          <nuxt-link
            to="/experiences"
            class="w-40 shadow border border-primary-500 font-bold text-center text-primary-500 text-xs py-1 px-4 lg:w-56 lg:text-base"
          >
            Work Experience
          </nuxt-link>
        </div>
        <div class="p-2 lg:flex lg:flex-wrap lg:p-6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NTitle from '~/elements/NTitle.vue'

export default defineComponent({
  components: {
    NTitle
  },
  setup() {
    const title: string = 'Projects and Works'
    return {
      title
    }
  }
})
</script>
