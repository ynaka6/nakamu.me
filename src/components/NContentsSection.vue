<template>
  <div class="m-auto flex justify-center">
    <div class="w-full px-2 lg:px-0 lg:w-3/5">
      <n-title :title="title" class="mb-2" />
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
