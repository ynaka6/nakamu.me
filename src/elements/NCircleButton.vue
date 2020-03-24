<template>
  <component
    :is="tagName"
    :href="href"
    :target="target"
    :rel="rel"
    class="flex text-white rounded-full px-8 py-2 mt-2 font-bold bg-primary-500 items-center justify-center no-underline"
  >
    {{ text }}
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
    },
    text: {
      type: String,
      required: false,
      default: null
    }
  }
})
</script>
