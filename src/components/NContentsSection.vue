<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full px-2 lg:px-0 lg:w-3/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-gray-700 mb-4">
          個人事業として提供しているコンテンツの紹介
        </p>
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
    const title: string = 'Contents'
    return {
      title
    }
  }
})
</script>
