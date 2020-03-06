<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="text-primary-500 p-3 hover:opacity-75">
            <h1 class="text-2xl font-leckerli-one">
              <font-awesome-icon :icon="['fas', 'fire']" />
              Nakamu
            </h1>
            <p class="text-xs">
              世界を旅して暮らしたい放浪エンジニア
            </p>
          </nuxt-link>
          <div class="hidden lg:block text-primary-500">
            <ul class="flex font-quicksand">
              <li v-for="(menu, index) in menuList" :key="index">
                <nuxt-link :to="menu.to" class="mr-4 hover:opacity-75">
                  {{ menu.text }}
                </nuxt-link>
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
  @apply w-full z-10;
}
.nav {
  @apply w-full items-center justify-between flex-wrap px-6 bg-white;
}
.container {
  @apply mx-auto;
}
</style>
