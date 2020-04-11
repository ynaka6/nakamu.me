<template>
  <div class="flex flex-col">
    <div class="wrap-parent min-h-screen flex flex-col">
      <default-header />
      <div class="flex flex-grow">
        <div class="w-full overflow-hidden py-4">
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
  }
})
</script>
