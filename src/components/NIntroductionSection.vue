/* eslint-disable vue/no-parsing-error */
<template>
  <div
    class="m-auto h-full items-center
  flex justify-center text-gray-700"
  >
    <div
      class="change px-6 py-10 flex flex-col lg:flex-row w-full justify-center items-center mb-6"
    >
      <transition appear name="delay-appear-logo">
        <img
          src="~assets/images/icon/profile.fc674b16.jpg"
          class="w-40 shadow-xl mb-5 rounded-full text-left mr-0 lg:w-56 lg:mb-0 lg:text-2xl lg:mr-10"
        />
      </transition>

      <div class="sentence flex flex-col">
        <p class="font-semibold text-center text-3xl mb-2 lg:mb-5 lg:text-5xl">
          I'm a<span class="text-primary-500">&nbsp;Web developer!!!</span>
        </p>
        <p class="text-sm lg:text-base">
          香港在住3年目になるWEBエンジニアのなかむです。<br />
          現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアを<br
            class="inline lg:hidden"
          />しています。
        </p>
        <p class="mt-1 mb-5 text-sm lg:text-base">
          顧客は全て日本の企業になります。<br />
          リモート開発にて各企業様の支援を行なっております。
        </p>
        <div class="w-full flex justify-center lg:justify-start lg:w-3/4">
          <n-round-button
            :tag-name="'nuxt-link'"
            to="/about"
            class="more-about bg-primary-500 text-white"
            text="More About"
          />
          <n-round-button
            :tag-name="'nuxt-link'"
            to="/projects"
            class="my-works mx-5 bg-white text-primary-500 border border-primary-500"
            text="My Works"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NRoundButton from '~/elements/NRoundButton.vue'
export default defineComponent({
  components: {
    NRoundButton
  },
  setup() {
    const tagName: string = 'button'
    return {
      transition: 'delay-appear-logo',
      mode: 'out-in',
      tagName
    }
  }
})
</script>

<style scoped>
.more-about:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white rounded-full border-primary-500 text-primary-500;
}

.my-works:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-primary-500 rounded-full border-primary-500 text-white;
}

button:focus {
  @apply outline-none;
}

@screen lg {
  .sentence > p {
    @apply text-left;
  }
}

.delay-appear-logo-enter {
  opacity: 0;
}

.delay-appear-logo-enter-active {
  transition: 4s;
}
</style>
