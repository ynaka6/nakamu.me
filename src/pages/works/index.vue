<template>
  <works-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Works',
  components: {
    worksContainer: () => import('@/containers/worksContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Projects and Works'
    }
  }
})
</script>
