<template>
  <n-contact-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NContactSection from '~/components/NContactSection.vue'

export default defineComponent({
  components: {
    NContactSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-primary-500' },
      { to: null, name: 'Contact' }
    ])
    return {}
  }
})
</script>
