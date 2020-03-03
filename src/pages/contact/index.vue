<template>
  <contact-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Contact',
  components: {
    contactContainer: () => import('@/containers/contactContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Contact - nakamu.life'
    }
  }
})
</script>
