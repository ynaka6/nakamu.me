<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="flex items-center">
          <nuxt-link to="/" class="text-white p-3 hover:bg-primary-600">
            <h1 class="text-3xl font-leckerli-one">
              Nakamu
            </h1>
            <p class="text-xs">
              世界を旅して暮らしたい放浪エンジニア
            </p>
          </nuxt-link>
        </div>
        <div />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

interface Data {
  title: string
}

export default createComponent({
  setup(): Data {
    return {
      title: 'mentor'
    }
  }
})
</script>

<style scoped>
.header {
  @apply fixed w-full z-10 top-0 shadow;
}
.nav {
  @apply w-full fixed items-center justify-between flex-wrap shadow-lg px-6 bg-primary-500;
}
.container {
  @apply mx-auto;
}
</style>
