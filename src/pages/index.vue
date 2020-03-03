<template>
  <homeContainer />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import homeContainer from '@/containers/homeContainer.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    homeContainer
  },
  head(): MetaInfo {
    return {
      title: 'nakamu.life'
    }
  }
})
</script>
