<template>
  <n-introduction-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NIntroductionSection from '~/components/NIntroductionSection.vue'

export default defineComponent({
  components: {
    NIntroductionSection
  },
  setup() {
    setBreadcrumbs([])
    return {}
  }
})
</script>
