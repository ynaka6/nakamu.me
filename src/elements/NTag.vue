<template>
  <component
    :is="tagName"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-block border border-primary-500 rounded-full px-2 py-1 font-bold text-primary-500 text-xs"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    tagName: {
      type: String,
      required: false,
      default: 'span'
    },
    text: {
      type: String,
      required: true,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: null
    },
    rel: {
      type: String,
      required: false,
      default: null
    }
  }
})
</script>
