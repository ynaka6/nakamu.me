<template>
  <div class="container">
    <n-contact-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NContactSection from '~/components/NContactSection.vue'

export default Vue.extend({
  name: 'Contact',
  components: {
    NContactSection
  }
})
</script>
