<template>
  <thanks-contact-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'ContactThanks',
  components: {
    thanksContactContainer: () =>
      import('@/containers/thanksContactContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Thanks for contacting'
    }
  }
})
</script>
