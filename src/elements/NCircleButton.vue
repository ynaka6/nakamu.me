<template>
  <component
    :is="tagName"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-flex w-10 h-10 mr-2 rounded-full font-semibold flex items-center justify-center font-hairline no-underline"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    tagName: {
      type: String,
      required: false,
      default: 'a'
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
