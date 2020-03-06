<template>
  <footer>
    <n-breadcrumb
      v-if="breadcrumbs && breadcrumbs.length > 0"
      :breadcrumbs="breadcrumbs"
    />
    <div class="bg-dark text-gray-100 px-2 py-3">
      <div class="container mx-auto">
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
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NBreadcrumb from '@/components/NBreadcrumb.vue'
import { useBreadcrumbs } from '@/store/modules/breadcrumbs'
import socialList from '@/assets/json/socialList.json'

export default defineComponent({
  components: {
    NBreadcrumb
  },
  setup() {
    return {
      drawer: false,
      breadcrumbs: useBreadcrumbs(),
      socialList
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
