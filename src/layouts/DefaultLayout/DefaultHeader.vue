<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="text-white p-3 hover:bg-primary-600">
            <h1 class="text-3xl font-leckerli-one">
              Nakamu
            </h1>
            <p class="text-xs">
              世界を旅して暮らしたい放浪エンジニア
            </p>
          </nuxt-link>
          <div class="hidden lg:block text-white">
            <ul class="flex font-quicksand">
              <li v-for="(menu, index) in menuList" :key="index">
                <a :v-else="menu.to" class="mr-4 hover:opacity-75">
                  {{ menu.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import menuList from '@/assets/json/menuList.json'

interface Data {
  menuList: Array<any>
}

export default defineComponent({
  setup(): Data {
    return {
      menuList
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
