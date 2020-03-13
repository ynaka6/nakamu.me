<template>
  <client-only>
    <div class="m-auto flex justify-center">
      <!-- thanks contact description -->
      <div class="bg-light rounded-lg w-full p-4 mb-6 lg:w-2/3">
        <!-- title section -->
        <div class="contact-thanks flex justify-center items-center w-full">
          <p
            class="contact-thanks__title pb-1 w-1/2 border-b inline-block border-primary-500 text-center text-dark text-lg lg:text-2xl mb-4 mr-0"
          >
            Thank you for your inquiry！
          </p>
        </div>
        <!-- sentence section -->
        <div class="max-w-2/3">
          <div class="px-1 mb-2 text-center">
            <div
              class="block mt-6 mb-4 font-semibold text-primary-500 tracking-wider text-2xl"
            >
              お問い合わせありがとうございます。
            </div>
            <p class="w-full text-center border-primary-500 pt-4 text-gray-800">
              この度はお問い合わせ頂きありがとうございます。
            </p>
            <p class="w-2/1 text-center border-primary-500 p-0 text-gray-800">
              ご入力頂きましたメールアドレスに後ほどご連絡をさせて頂きますので、<br />今しばらくお待ちください。
            </p>
          </div>
          <div class="px-1 mb-2 text-center">
            <nuxt-link to="/">
              <button
                type="submit"
                class="sendBtn mx-auto w-full py-5 px-2 rounded-full mt-10 text-white bg-primary-500 font-bold uppercase lg:px-4 md:w-2/5"
              >
                TOPへ戻る
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({})
</script>

<style scoped>
button:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white rounded-full border-primary-500 text-primary-500;
}

button:focus {
  @apply outline-none;
}
</style>
