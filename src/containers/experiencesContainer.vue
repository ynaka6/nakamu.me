<template>
  <n-experiences-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NExperiencesSection from '~/components/NExperiencesSection.vue'

export default defineComponent({
  components: {
    NExperiencesSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Work Experience' }
    ])
    return {}
  }
})
</script>
