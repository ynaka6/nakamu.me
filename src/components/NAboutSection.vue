<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full lg:w-3/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-gray-700 mb-4">
          プログラマーとして色々な業界を転々とする私について
        </p>
        <div class="bg-white shadow-xl leading-normal p-4 lg:p-6">
          <p>
            初めまして、Webエンジニアのなかむです。<br />
            <br />
            プログラミングがどんなものかわからないまま中小規模のSIerに就職し、プログラミングが楽しくなって１０年以上エンジニア・プログラマーをしています。<br />
            <br />
            現在は香港の日系企業に所属し開発を行う傍ら、個人事業として受託・業務委託で複数の日本企業の開発に従事しています。<br />
            直近は、
            <a
              href="https://www.php.net/"
              target="_blank"
              class="font-semibold text-blue-500 hover:underline"
            >
              PHP
            </a>
            ,
            <a
              href="https://laravel.com/"
              target="_blank"
              class="font-semibold text-blue-500 hover:underline"
            >
              Laravel
            </a>
            ,
            <a
              href="https://jp.vuejs.org/"
              target="_blank"
              class="font-semibold text-blue-500 hover:underline"
            >
              Vue.js
            </a>
            を使った開発を中心としています。<br />
            <br />
            また、今までの開発経験を活かし若手エンジニアのメンターを行なっています。
          </p>
          <n-title title="Knowledge Base" tag-name="h3" class="mt-6 mb-2" />
          <div class="lg:flex">
            <div class="flex-1">
              <n-title title="Frontend" tag-name="h5" class="mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Bootstrap 2/3/4</li>
                <li>Bulma</li>
                <li>Tailwind CSS</li>
                <li>Sass</li>
                <li>PostCSS</li>
              </ul>
              <n-title title="Javascript" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Gatsby.js</li>
                <li>Node.js</li>
                <li>Nuxt.js</li>
                <li>Vue.js</li>
              </ul>
              <n-title title="Tools" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>PhpStorm</li>
                <li>Postman</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
            <div class="flex-1 mt-6 lg:mt-0">
              <n-title title="Backend" tag-name="h5" class="mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>PHP - Laravel/Symfony/Zend Framework etc...</li>
                <li>Ruby - Ruby on Rails</li>
                <li>Java - Struts/Seaser2/Spring</li>
                <li>RDB - MySQL/MariaDB</li>
                <li>Redis/Memcache</li>
              </ul>
              <n-title title="Infrastructure" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>AWS</li>
                <li>Netlify</li>
                <li>Sakura/XServer/お名前.com</li>
                <li>Vultr</li>
              </ul>
              <n-title
                title="Currentry learning"
                tag-name="h5"
                class="mt-6 mb-2"
              />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Golang</li>
                <li>Typescript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <n-title title="Place" tag-name="h3" class="mt-6 mb-2" />
          <div class="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9974.978817521534!2d114.25061418895562!3d22.30274317169678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340403ef722d58c5%3A0x1ce2bbdb749d890c!2sTiu%20Keng%20Leng%20Station!5e0!3m2!1sja!2shk!4v1584431827753!5m2!1sja!2shk"
              height="450"
              width="100%"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NTitle from '~/elements/NTitle.vue'

export default defineComponent({
  components: {
    NTitle
  },
  setup() {
    const title: string = 'About Me'
    return {
      title
    }
  }
})
</script>
