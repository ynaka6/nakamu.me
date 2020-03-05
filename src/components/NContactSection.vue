<template>
  <client-only>
    <div id="wrapper" class="m-auto flex justify-center">
      <!-- contact form description -->
      <div class="contact-form bg-light rounded-lg w-full p-4 mb-6 lg:w-2/3">
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
        <validation-observer v-slot="{ invalid }">
          <form
            autocomplete="off"
            name="contact"
            action="/contact/thanks"
            method="post"
            class="max-w-2/3"
          >
            <!-- data-netlify="true" -->
            <!-- data-netlify-honeypot="bot-field" -->

            <input type="hidden" name="form-name" value="contact" />

            <!-- name section -->
            <div class="px-1 mb-2 text-center">
              <label for="name" class="block mt-6 mb-2 font-semibold">
                お名前<span class="ml-2 must">*</span>
              </label>
              <validation-provider v-slot="{ errors }" rules="required|max:50">
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  name="お名前"
                  class="w-full border-primary-500 bg-gray-100 rounded-full p-4 border text-gray-800 md:w-9/12"
                  placeholder="山田 太郎"
                />
                <span class="block mt-2 text-red-700 font-bold">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>

            <div class="px-1 mb-2 text-center">
              <label for="email" class="block mt-6 mb-2 font-semibold">
                メールアドレス<span class="ml-2 must">*</span>
              </label>
              <validation-provider v-slot="{ errors }" rules="required|max:255">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  name="メールアドレス"
                  class="w-full border-primary-500 bg-gray-100 rounded-full p-4 border text-gray-800 md:w-9/12"
                  placeholder="yamada@example.com"
                />
                <span class="block mt-2 text-red-700 font-bold">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>

            <div class="px-1 mb-2 text-center">
              <label for="content" class="block mt-6 mb-2 font-semibold">
                お問い合わせ内容<span class="ml-2 must">*</span>
              </label>
              <validation-provider v-slot="{ errors }" rules="required">
                <textarea
                  id="content"
                  v-model="content"
                  name="お問い合わせ内容"
                  class="w-full border-primary-500 bg-gray-100 rounded-full rounded-lg p-4 border text-gray-800 md:w-9/12"
                  col="4"
                  row="10"
                  placeholder=""
                />
                <span class="block mt-1 text-red-700 font-bold">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>
            <validation-provider>
              <div class="px-1 mb-2 text-center">
                <button
                  type="submit"
                  :class="{ buttonActive: invalid }"
                  class="mx-auto w-full py-5 px-2 rounded-full mt-10 text-white bg-primary-500 font-bold uppercase lg:px-4 md:w-2/5"
                  :disabled="invalid"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                  お問い合わせ
                </button>
              </div>
            </validation-provider>
          </form>
        </validation-observer>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// reactive is disable
// watch is disable

export default defineComponent({
  setup() {
    // const isActive: boolean = true
    const name: string = ''
    const email: string = ''
    const content: string = ''

    return {
      name,
      email,
      content
    }
  }
})

// default scripts

// setup(props,context){
//     needContactForm:!context.root.$route.path.includes('contact')
// })
// watch(()=>{
// state.needContactForm=!context.root.$route.path.includes('contact')
// })
// /*eslint-disable*/
// console.log(props)
// return{
// state
// }
// }
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

.must {
  @apply text-primary-500;
}

*:focus {
  @apply outline-none;
}

.buttonActive {
  @apply mx-auto w-full py-5 px-2 rounded-full mt-10 text-white bg-primary-300 font-bold uppercase;
}

@screen md {
    .buttonActive {
        @apply w-2/5
    }
}

@screen lg {
    .buttonActive {
        @apply px-4
    }
}

.buttonActive:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white rounded-full border-primary-500 text-primary-500;
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
