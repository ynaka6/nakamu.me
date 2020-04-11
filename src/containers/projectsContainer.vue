<template>
  <n-projects-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NProjectsSection from '~/components/NProjectsSection.vue'

export default defineComponent({
  components: {
    NProjectsSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Projects' }
    ])
    return {}
  }
})
</script>
