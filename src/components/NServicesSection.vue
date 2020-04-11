<template>
  <div>
    <div class="container mx-auto">
      <div class="w-full px-2">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          個人として提供しているサービスを紹介します。
        </p>
      </div>
    </div>
    <div class="bg-white py-4">
      <n-title
        title="Web Development, Programming Mentor and Writing"
        tag-name="h3"
        class="text-center mb-4"
      />
      <div class="max-w-md mx-auto mb-10">
        <p class="text-gray-700 text-sm leading-loose">
          中小企業でWebサービスを展開していきたいお客様に向けて受託開発や業務委託開発を行なっています。
          また、プログラマーとしてデビューしたてのエンジニアやプログラマーを目指す方々の学習をサポートするメンター活動もしています。
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/3 lg:px-2">
            <img
              src="~/assets/images/services/svg/web_developer.svg"
              alt="Web Development"
              class="h-32 mx-auto mb-6"
            />
            <p class="font-semibold text-gray-800 text-center mb-2">
              Web Development
            </p>
            <p class="text-gray-700 text-xs leading-loose mb-4">
              Laravel, Vue.jsを利用したWeb開発に従事し、得意としています。
              過去にはUnityのゲームエンジニアをはじめ、大手ソーシャルゲームのバックエンドエンジニアなど様々な業種、環境で開発を担当しておりました。
              その経験を活かして開発業務をサポートしていきます。
            </p>
          </div>
          <div class="w-full lg:w-1/3 lg:px-2">
            <img
              src="~/assets/images/services/svg/code_review.svg"
              alt="Programming"
              class="h-32 mx-auto mb-6"
            />
            <p class="font-semibold text-gray-800 text-center mb-2">
              Programming Mentor
            </p>
            <p class="text-gray-700 text-xs leading-loose mb-4">
              新卒教育担当やプログラミングスクールの講師を経験したこともあり、プログラミングを伝えていくことが好きになりました。
              現在はプログラミングのメンターとしても活動しています。
              自走できるエンジニアを育てるべく、各メンバーの目標に沿ってメンタリングを行っています。
            </p>
          </div>
          <div class="w-full lg:w-1/3 lg:px-2">
            <img
              src="~/assets/images/services/svg/noted.svg"
              alt="Mentoring"
              class="h-32 mx-auto mb-6"
            />
            <p class="font-semibold text-gray-800 text-center mb-2">
              Writing
            </p>
            <p class="text-gray-700 text-xs leading-loose mb-4">
              現在の開発で得たノウハウや過去の経験を雑記ブログとして投稿しています。
              これからエンジニア・プログラマーを目指す皆さんのきっかけになること。
              プログラミングって楽しい、面白い、びっくりするっと言ってもらえるような体験の１つとして記事を提供することを心掛けています。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-10">
      <div class="flex justify-center">
        <div class="w-full px-2 lg:px-0 lg:w-3/5">
          <div
            class="bg-gradient-gray rounded-lg shadow-xl text-white px-5 py-5 lg:py-10"
          >
            <p class="text-lg mb-2 lg:text-2xl">
              Webサービス開発、メンターを通して一緒にプログラミングを始めましょう！
            </p>
            <p class="text-xs mb-10">
              お気軽にご質問・ご相談ください。内容確認後、ご連絡させて頂きます。
            </p>
            <div>
              <n-round-button
                :tag-name="'nuxt-link'"
                to="/contact"
                class="shadow-primary-500 bg-bland-500 text-sm text-white px-10 hover:bg-white hover:bg-bland-600 hover:shadow-xl"
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
