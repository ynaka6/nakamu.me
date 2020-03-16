<template>
  <n-works-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NWorksSection from '~/components/NWorksSection.vue'

export default defineComponent({
  components: {
    NWorksSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-primary-500' },
      { to: null, name: 'Works' }
    ])
    return {}
  }
})
</script>
