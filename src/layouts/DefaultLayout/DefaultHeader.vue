<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <nuxt-link
            to="/"
            class="text-primary-500 text-center p-3 pb-1 lg:pb-3 lg:text-left hover:opacity-75"
          >
            <h1 class="text-2xl font-leckerli-one">
              <font-awesome-icon :icon="['fas', 'fire']" />
              Nakamu
            </h1>
            <p class="lg:block text-xs">
              世界を旅して暮らしたい放浪エンジニア
            </p>
          </nuxt-link>
          <div class="block text-primary-500">
            <ul class="flex font-quicksand">
              <li v-for="(menu, index) in menuList" :key="index">
                <nuxt-link
                  v-if="menu.to"
                  :to="menu.to"
                  class="menu-link"
                  :class="{ 'mr-2 lg:mr-4': index < menuList.length }"
                >
                  {{ menu.text }}
                </nuxt-link>
                <a
                  v-else-if="menu.href"
                  :href="menu.href"
                  :target="menu.target || `_self`"
                  class="menu-link mr-4"
                  :class="{ 'mr-2 lg:mr-4': index < menuList.length }"
                >
                  {{ menu.text }}
                  <sup>
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  </sup>
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
  @apply w-full z-10;
}
.nav {
  @apply w-full items-center justify-between flex-wrap;
}
.container {
  @apply mx-auto;
}
.menu-link {
  @apply relative inline-block no-underline font-bold text-gray-700;
}
.menu-link::after {
  @apply absolute left-0 w-full;
  bottom: -6px;
  content: '';
  height: 4px;
  background: theme('colors.red.500');
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.5s;
}
.menu-link:hover::after {
  transform: scale(1, 1);
}
</style>
