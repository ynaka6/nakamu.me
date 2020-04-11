<template>
  <footer>
    <div v-if="state.scrollY > 100" class="flex justify-center my-2">
      <nuxt-link
        v-scroll-to="'body'"
        to
        class="flex justify-center items-center bg-bland-500 w-12 h-12 rounded-full text-center"
      >
        <font-awesome-icon icon="arrow-up" size="lg" class="text-white" />
      </nuxt-link>
    </div>
    <n-breadcrumb
      v-if="breadcrumbs && breadcrumbs.length > 0"
      :breadcrumbs="breadcrumbs"
    />
    <div class="flex justify-between bg-gradient-gray text-gray-100 px-2 py-3">
      <div class="w-4 flex items-center">
        <n-mode-button default="light" @on-change-mode="toggleModel" />
      </div>
      <div>
        <div class="flex justify-center text-xs">
          <a
            v-for="(social, index) in socialList"
            :key="index"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-200 mr-4"
          >
            <font-awesome-icon :icon="social.icon" size="lg" />
          </a>
        </div>
        <div class="mt-1 flex justify-center text-xs">
          @nakamu.life
        </div>
      </div>
      <div class="w-4" />
    </div>
  </footer>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  onUnmounted
} from '@vue/composition-api'
import NModeButton from '@/elements/NModeButton.vue'
import NBreadcrumb from '@/components/NBreadcrumb.vue'
import { useBreadcrumbs } from '@/store/modules/breadcrumbs'
import socialList from '@/assets/json/socialList.json'

export default defineComponent({
  components: {
    NModeButton,
    NBreadcrumb
  },
  setup() {
    const state = reactive({
      scrollY: ref(0)
    })
    const handleScroll = () => {
      state.scrollY = window.scrollY
    }

    const toggleModel = (mode) => {
      if (mode === 'dark') {
        document.body.classList.add('dark')
        document.body.classList.remove('light')
      } else {
        document.body.classList.add('light')
        document.body.classList.remove('dark')
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      state,
      breadcrumbs: useBreadcrumbs(),
      toggleModel,
      socialList,
      handleScroll
    }
  }
})
</script>

<style scoped>
ul.list-menu {
  @apply .inline-flex .flex-wrap .justify-center .list-none .leading-tight;
}
ul.list-menu > li {
  @apply .mb-1;
}
ul.list-menu > li:not(:last-child)::after {
  content: '/';
  @apply .px-2;
}
</style>
