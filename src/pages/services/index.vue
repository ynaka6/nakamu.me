<template>
  <services-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Services',
  components: {
    servicesContainer: () => import('@/containers/servicesContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Services'
    }
  }
})
</script>
