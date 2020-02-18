<template>
  <footer>
    <ContactSection />
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
          @nakamu.life
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ContactSection from '~/components/ContactSection.vue'

export default {
    components: {
        ContactSection
    }
}
</script>

<style scoped>
ul.list-menu {
  @apply inline-flex flex-wrap justify-center list-none leading-tight;
}
ul.list-menu > li {
  @apply mb-1;
}
ul.list-menu > li:not(:last-child)::after {
  content: '/';
  @apply px-2;
}
</style>
