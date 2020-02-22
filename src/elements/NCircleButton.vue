<template>
  <component
    :is="tagName"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-flex bg-white hover:bg-gray-400 text-gray-800 w-10 h-10 mr-2 rounded-full font-semibold flex items-center justify-center font-hairline no-underline"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
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
