<template>
  <skill-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'Skills',
  components: {
    skillContainer: () => import('@/containers/skillContainer.vue')
  },
  head(): MetaInfo {
    return {
      title: 'Skill - nakamu.life'
    }
  }
})
</script>
