<template>
  <n-skill-section />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NSkillSection from '~/components/NSkillSection.vue'

export default defineComponent({
  components: {
    NSkillSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', name: 'HOME', icon: ['fas', 'home'] },
      { to: null, name: 'Skill' }
    ])
    return {}
  }
})
</script>
