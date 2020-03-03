<template>
  <n-about-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NAboutSection from '~/components/NAboutSection.vue'

export default defineComponent({
  components: {
    NAboutSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', name: 'HOME', icon: ['fas', 'home'] },
      { to: null, name: 'About' }
    ])
    return {}
  }
})
</script>
