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
            href="https://twitter.com/nakanakamu0828"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-200 mr-4"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </a>
          <a
            href="https://www.instagram.com/____nakamu____/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="text-white hover:text-gray-200 mr-4"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
          </a>
          <a
            href="https://github.com/nakanakamu0828"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="text-white hover:text-gray-200 mr-4"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            href="mailto:yuuki.nakamura.0828@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="text-white hover:text-gray-200"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
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

export default defineComponent({
  components: {
    NBreadcrumb
  },
  setup() {
    return {
      drawer: false,
      breadcrumbs: useBreadcrumbs()
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
