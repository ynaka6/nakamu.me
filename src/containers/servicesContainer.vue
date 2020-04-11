<template>
  <div>
    <n-services-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NServicesSection from '~/components/NServicesSection.vue'

export default defineComponent({
  components: {
    NServicesSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Services' }
    ])
    return {}
  }
})
</script>
