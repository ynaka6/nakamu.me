<template>
  <n-thanks-contact-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NThanksContactSection from '~/components/NThanksContactSection.vue'

export default defineComponent({
  components: {
    NThanksContactSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', name: 'HOME', icon: ['fas', 'home'] },
      { to: '/contact', name: 'Contact' },
      { to: null, name: 'Thanks' }
    ])
    return {}
  }
})
</script>
