<template>
  <about-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'About',
  components: {
    aboutContainer: () => import('@/containers/aboutContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'About me'
    }
  }
})
</script>
