<template>
  <projects-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Projects',
  components: {
    projectsContainer: () => import('@/containers/projectsContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Projects and Works'
    }
  }
})
</script>
