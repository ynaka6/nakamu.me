<template>
  <footer>
    <no-ssr>
      <div class="all flex justify-center px-2">
        <div
          class="contact-form bg-light rounded-lg w-full p-4 mb-6 lg:py-8 lg:w-2/3"
        >
        <div class="contact text-center">
          <p class="contact-form__title__left text-right pr-10 text-dark text-lg lg:text-2xl mb-4 mr-0">
            Let's Play Together.
          </p>

          <p class="contact-form__title__right text-left pl-10 text-dark text-lg lg:text-2xl mb-4">
            <span class="contact-form__title__right__span">お仕事募集中。一緒にプログラミングしましょう。</span>
          </p>
        </div>

          <form
            autocomplete="off"
            name="contact"
            action="/contact/thanks"
            method="post"
          >

            <!-- data-netlify="true" -->
            <!-- data-netlify-honeypot="bot-field" -->
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-col lg:flex-row">
              <div class="lg:flex-1 px-1 mb-2">
                 <p class="name-label text-center mt-6">お名前<span class="kome">*</span></p>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row">
              <div class="contact-form__name lg:flex-1 px-1 mb-2">
                <input
                  type="text"
                  name="name"
                  class="name-input rounded-lg p-4 border text-gray-800"
                  placeholder="山田 太郎"
                />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row">
              <div class="lg:flex-1 px-1 mb-2">
                 <p class="name-label text-center mt-3">メールアドレス<span class="kome">*</span></p>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row">
              <div class="contact-form__name lg:flex-1 px-1 mb-2">
                <input
                  type="email"
                  name="email"
                  class="name-input rounded-lg p-4 border text-gray-800"
                  placeholder="your@example.com"
                />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row">
              <div class="lg:flex-1 px-1 mb-2">
                 <p class="name-label text-center mt-3">お問い合わせ内容<span class="kome">*</span></p>
              </div>
            </div>
            <div class="contact-form__name px-1 mb-2">
              <textarea
                name="content"
                class="textarea-input rounded-lg p-4 border text-gray-800"
                col="4"
                row="10"
                placeholder=""
              />
            </div>
            <div class="contact-form__name flex justify-center items-center px-1">
              <button
                class="py-5 px-2 rounded-lg mt-6 text-white font-bold uppercase lg:px-4"
              >
                <i class="fas fa-envelope mr-3"></i>お問い合わせ
              </button>
            </div>

          </form>
        </div>
      </div>
    </no-ssr>
  </footer>
</template>

<script lang="ts">
import { createComponent, reactive, watch } from '@vue/composition-api'

export default createComponent({
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
@media screen (max-width: 1040px;) {
        .contact-form__title__right {
            font-size: 10px;
        }
    }

.contact {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
 }
.contact-form {
  border-top: 5px solid #D80C18; 
}

.contact-form > p {
    font-weight: bold;
}

.contact-form__title__left {
    width: 50%;
    border-right: 1.5px solid #D80C18;
    display: inline-block;
}

.contact-form__title__right {
    width: 50%;
    border-left: 1.5px solid #D80C18;
    display: inline-block;

}

.contact-form__title__right__span {
     vertical-align: center;
     font-size: 15px;
}

.contact-form__name {
    width: 100%;
    display: flex;
    justify-content: center;
}

.name-label {
    width: 100%;
    display: block;
    font-weight: bold;
}

.name-input {
    background-color: #F0F0F0;
    width: 75%;
    border-radius: 30px;
    text-align: center;
}

.textarea-input {
    background-color: #F0F0F0;
    width: 75%;
    border-radius: 30px;
    
}

input:focus {
    background-color: white;
    border-radius: 30px;
    border: 1px solid #D80C18;
    box-shadow: 0px 0px 5px 0px #D80C18;
}

textarea:focus {
    background-color: white;
    border: 1px solid #D80C18;
    box-shadow: 0px 0px 5px 0px #D80C18;
}

textarea {
    resize: none;
}

::placeholder {
  text-align: center;
}
input:placeholder-shown {
  text-align: left;
}

textarea:placeholder-shown {
  text-align: left;
}


.kome {
    color: red;
}

button {
    background-color: #D80C18;
    width: 40%;
}

button:hover {
    opacity: 0.75;
    background-color: white;
    border: 1px solid #D80C18;
    box-shadow: 0px 0px 5px 0px #D80C18;
    color: #D80C18;
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
outline: none;
}

.all {
  animation: 1.5s appear;
  margin: auto;
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