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
      { to: '/', name: 'HOME', icon: ['fas', 'home'] },
      { to: null, name: 'Works' }
    ])
    return {}
  }
})
</script>
