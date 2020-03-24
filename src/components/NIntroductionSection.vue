/* eslint-disable vue/no-parsing-error */
<template>
  <div
    class="m-auto h-full items-center
  flex justify-center text-gray-700"
  >
    <div
      class="change bg-white shadow-xl px-6 py-10 flex flex-col lg:flex-row w-4/5 justify-center items-center mb-6"
    >
      <!-- logo section -->
      <transition appear name="delay-appear-logo">
        <img
          src="~assets/images/icon/profile.fc674b16.jpg"
          class="lg:mr-8 box-border mb-5 logo-img flex justify-center img-fluid rounded-full text-left text-lg lg:mb-0 lg:text-2xl mr-0"
        />
      </transition>

      <!-- sentence section -->
      <div class="sentence flex flex-col">
        <!-- greet section -->
        <p
          class="greeting text-center mb-1 hidden mt-2 lg:mb-2 lg:mt-0 lg:block"
        >
          <span class="text-primary-500">H</span>ello world!!
        </p>
        <!-- sentence title section -->
        <p class="title text-center mb-2 lg:mb-5 text-3xl font-semibold">
          I'm a<span class="text-primary-500">&nbsp;Web developer!!!</span>
        </p>
        <!-- setence desc section -->
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
        <div class="flex flex-row justify-center w-full lg:w-2/3">
          <nuxt-link to="/about">
            <n-circle-button
              class="more-about bg-primary-500 text-white"
              text="More About"
              :tag-name="tagName"
            />
          </nuxt-link>

          <nuxt-link to="/works">
            <n-circle-button
              class="my-works mx-5 bg-white text-primary-500 border border-primary-500"
              text="My Works"
              :tag-name="tagName"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NCircleButton from '~/elements/NCircleButton.vue'
export default defineComponent({
  components: {
    NCircleButton
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

.logo-img {
  max-width: 250px;
  max-height: 250px;
}

button:focus {
  @apply outline-none;
}

@screen lg {
  .sentence > p {
    @apply text-left;
  }
  .logo-img {
    max-width: 300px;
    max-height: 300px;
  }
}

.delay-appear-logo-enter {
  opacity: 0;
}

.delay-appear-logo-enter-active {
  transition: 4s;
}
</style>
