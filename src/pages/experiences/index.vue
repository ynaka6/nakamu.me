<template>
  <experiences-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'WorkExperices',
  components: {
    experiencesContainer: () => import('@/containers/experiencesContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Projects and Works'
    }
  }
})
</script>
