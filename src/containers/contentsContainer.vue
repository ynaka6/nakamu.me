<template>
  <n-contents-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NContentsSection from '~/components/NContentsSection.vue'

export default defineComponent({
  components: {
    NContentsSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', name: 'HOME', icon: ['fas', 'home'] },
      { to: null, name: 'Contents' }
    ])
    return {}
  }
})
</script>
