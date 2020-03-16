<template>
  <component
    :is="tagName"
    class="w-full font-semibold font-quicksand no-underline"
    :class="[tagName]"
  >
    {{ title }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    tagName: {
      type: String,
      required: false,
      default: 'h1',
      validator(val) {
        return /h[1-6]{1}/.test(val)
      }
    },
    title: {
      type: String,
      required: false,
      default: null
    }
  }
})
</script>

<style lang="postcss" scoped>
/** https://github.com/antyakushev/postcss-for */
/** https://github.com/postcss/postcss-calc */
@for $i from 1 to 6 {
  .h$(i) {
    /* prettier-ignore */
    font-size: calc(1 + ((6 - $(i)) / 5))rem;
  }
}
</style>
