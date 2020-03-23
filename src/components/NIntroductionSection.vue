/* eslint-disable vue/no-parsing-error */
<template>
  <div
    class="m-auto h-full items-center
  flex justify-center text-gray-700"
  >
    <div
      class="change bg-light flex flex-col lg:flex-row w-full justify-center items-center py-4 mb-6 lg:w-full"
    >
      <!-- logo section -->
      <transition appear name="delay-appear-logo">
        <img
          src="~assets/images/icon/profile.fc674b16.jpg"
          class="lg:mr-8 box-border logo-img flex justify-center img-fluid rounded-full text-left text-lg lg:text-2xl mr-0"
        />
      </transition>

      <!-- sentence section -->
      <div class="sentence flex flex-col">
        <!-- greet section -->
        <p class="greeting text-center mb-1">
          <span class="text-primary-500">H</span>ello world!!
        </p>
        <!-- sentence title section -->
        <p class="title text-center mb-5 text-3xl font-semibold">
          I'm a<span class="text-primary-500">&nbsp;Web developer!!!</span>
        </p>
        <!-- setence desc section -->
        <p class="text-sm lg:text-base">
          香港在住3年目になるWEBエンジニアのなかむです。<br />
          現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアを<br
            class="inline lg:hidden"
          />しています。
        </p>
        <p class="mt-1 text-sm lg:text-base">
          顧客は全て日本の企業になります。<br />
          リモート開発にて各企業様の支援を行なっております。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    return {
      transition: 'delay-appear-logo',
      mode: 'out-in'
    }
  }
})
</script>

<style scoped>
button:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white rounded-full border-primary-500 text-primary-500;
}

.logo-img {
  max-width: 300px;
  max-height: 300px;
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
