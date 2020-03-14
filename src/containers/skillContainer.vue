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
      { to: '/', icon: ['fas', 'fire'], color: 'text-primary-500' },
      { to: null, name: 'Skill' }
    ])
    return {}
  }
})
</script>
