<template>
  <footer>
    <div class="bg-dark text-gray-100 px-2 pt-0 pb-2 mt-0">
      <div class="container mx-auto py-8">
        <div class="flex justify-center text-xs">
          <ul class="list-menu">
            <li>
              <nuxt-link to="/" class="my-2 text-white hover:text-gray-300">
                HOME
              </nuxt-link>
            </li>
            <li>
              <a
                href="https://blog.nakamu.life/"
                class="my-2 text-white hover:text-gray-300"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://blog.nakamu.life/policy/privacy"
                class="my-2 text-white hover:text-gray-300"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <nuxt-link to="/law" class="my-2 text-white hover:text-gray-300">
                特定商取引法に基づく表記
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="mt-4 flex justify-center text-xs">
          <n-circle-button
            href="https://twitter.com/nakanakamu0828"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-2"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </n-circle-button>
          <n-circle-button
            href="https://github.com/nakanakamu0828"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="mr-2"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </n-circle-button>
          <n-circle-button
            href="mailto:yuuki.nakamura.0828@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
          </n-circle-button>
        </div>
        <div class="mt-4 flex justify-center text-xs">
          @nakamu.life
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import NCircleButton from '@/elements/NCircleButton'
export default createComponent({
  components: {
    NCircleButton
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
