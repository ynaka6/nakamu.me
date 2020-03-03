<template>
  <div class="flex flex-col">
    <div class="min-h-screen flex flex-col">
      <default-header />
      <div class="flex flex-grow" style="margin-top: 4.5rem;">
        <div class="w-full overflow-hidden py-8 lg:py-12">
          <nuxt />
        </div>
      </div>
      <default-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DefaultHeader from './DefaultLayout/DefaultHeader.vue'
import DefaultFooter from './DefaultLayout/DefaultFooter.vue'
import provideBreadcrumbs from '@/store/modules/breadcrumbs'

export default defineComponent({
  components: {
    DefaultHeader,
    DefaultFooter
  },
  setup() {
    provideBreadcrumbs()
    return {
      title: 'title'
    }
  }
})
</script>
