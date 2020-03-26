<template>
  <div>
    <div class="container mx-auto">
      <div class="w-full px-2">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-gray-700 mb-4">
          個人事業として提供しているサービスを紹介します。
        </p>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full px-2 lg:px-0 lg:w-3/5">
          <div
            class="bg-gradient-gray rounded-lg shadow-xl text-white px-5 py-5 lg:py-10"
          >
            <p class="text-lg mb-2 lg:text-2xl">
              業務、メンターを通して一緒にコーディングを始めましょう
            </p>
            <p class="text-xs mb-10">
              お気軽にご質問・ご相談ください。内容確認後、ご連絡させて頂きます。
            </p>
            <div>
              <n-round-button
                :tag-name="'nuxt-link'"
                to="/contact"
                class="shadow-primary-500 bg-primary-500 text-sm text-white px-10 hover:bg-white hover:bg-primary-600 hover:shadow-xl"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                お問い合わせ
              </n-round-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NTitle from '~/elements/NTitle.vue'
import NRoundButton from '~/elements/NRoundButton.vue'

export default defineComponent({
  components: {
    NTitle,
    NRoundButton
  },
  setup() {
    const title: string = 'Services'
    return {
      title
    }
  }
})
</script>
