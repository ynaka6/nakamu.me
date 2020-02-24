<template>
  <client-only>
    <div id="wrapper" class="m-auto flex justify-center px-2">
      <!-- contact form description -->
      <div
        class="contact-form border-primary-500 border-t-4  bg-light rounded-lg w-full p-4 mb-6 lg:py-8 lg:w-2/3"
      >
        <div
          class="contact-form__title flex justify-center items-center w-full"
        >
          <p
            class="contact-form__title__left hidden sm:w-2/4 sm:border-r sm:inline-block sm:border-primary-500 sm:text-right sm:pr-10 text-dark text-lg lg:text-2xl mb-4 mr-0"
          >
            Let's Play Together.
          </p>

          <!-- MOBILE Responsive -->
          <p
            class="contact-form__title__mobile sm:hidden pb-1 w-1/2 border-b inline-block border-primary-500  text-center text-dark text-lg lg:text-2xl mb-4 mr-0"
          >
            Let's Play Together.
          </p>

          <p
            class="contact-form__title__right hidden sm:inline-block w-2/4 border-l border-primary-500 inline-block text-left pl-10 text-dark text-lg lg:text-2xl mb-4"
          >
            <span class="contact-form__title__right__span text-sm">
              お仕事募集中。一緒にプログラミングしましょう。
            </span>
          </p>
        </div>

        <!-- form section -->
        <form
          autocomplete="off"
          name="contact"
          action="/contact/thanks"
          method="post"
        >
          <!-- data-netlify="true" -->
          <!-- data-netlify-honeypot="bot-field" -->

          <input type="hidden" name="form-name" value="contact" />

          <!-- name section -->
          <div class="flex flex-col lg:flex-row">
            <div class="lg:flex-1 px-1 mb-2">
              <p class="label text-center mt-6">
                お名前<span class="must">*</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <div class="contact-form__content lg:flex-1 px-1 mb-2">
              <input
                type="text"
                name="name"
                class="input rounded-lg p-4 border text-gray-800"
                placeholder="山田 太郎"
              />
            </div>
          </div>

          <!-- mail section -->
          <div class="flex flex-col lg:flex-row">
            <div class="lg:flex-1 px-1 mb-2">
              <p class="label text-center mt-3">
                メールアドレス<span class="must">*</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <div class="contact-form__content lg:flex-1 px-1 mb-2">
              <input
                type="email"
                name="email"
                class="input rounded-lg p-4 border text-gray-800"
                placeholder="your@example.com"
              />
            </div>
          </div>

          <!-- query section -->
          <div class="flex flex-col lg:flex-row">
            <div class="lg:flex-1 px-1 mb-2">
              <p class="label text-center mt-3">
                お問い合わせ内容<span class="must">*</span>
              </p>
            </div>
          </div>

          <div class="contact-form__content px-1 mb-2">
            <textarea
              name="content"
              class="textarea resize-none border-primary-500 bg-gray-100 w-9/12 rounded-full rounded-lg p-4 border text-gray-800"
              col="4"
              row="10"
              placeholder=""
            />
          </div>

          <div
            class="contact-form__content flex justify-center items-center px-1"
          >
            <button
              class="bg-primary-500 w-2/5 py-5 px-2 rounded-full rounded-lg mt-10 text-white font-bold uppercase lg:px-4"
            >
              <i
                class="hidden sm:inline-block fas fa-envelope mr-3"
              />お問い合わせ
            </button>
          </div>
        </form>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// reactive is disable
// watch is disable

export default defineComponent({
  //   setup(props, context) {
  //     const state = reactive<{ needContactForm: boolean }>({
  //       needContactForm: !context.root.$route.path.includes('contact')
  //     })
  //     watch(() => {
  //       state.needContactForm = !context.root.$route.path.includes('contact')
  //     })
  //     /* eslint-disable */
  //     console.log(props)
  //     return {
  //       state
  //     }
  //   }
})
</script>

<style scoped>
#wrapper {
  animation: 1.5s appear;
}

:focus {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white rounded-full border border-primary-500;
}

::placeholder {
  @apply text-center;
}

button:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white border-primary-500 text-primary-500;
}

.must {
  @apply text-primary-500;
}

.contact-form__content {
  @apply flex w-full justify-center;
}

.label {
  @apply block w-full font-bold;
}

input {
  @apply border-primary-500 bg-gray-100 w-9/12 rounded-full;
}

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

*:focus {
  @apply outline-none;
}
:placeholder-shown {
  @apply text-left;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
