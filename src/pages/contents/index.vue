<template>
  <contents-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Contents',
  components: {
    contentsContainer: () => import('@/containers/contentsContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Contents - nakamu.life'
    }
  }
})
</script>
