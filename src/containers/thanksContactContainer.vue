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
      { to: '/', icon: ['fas', 'fire'], color: 'text-primary-500' },
      { to: '/contact', name: 'Contact' },
      { to: null, name: 'Thanks' }
    ])
    return {}
  }
})
</script>
