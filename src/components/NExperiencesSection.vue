<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full px-2 lg:px-0 lg:w-4/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-gray-700 mb-4">
          今までの経歴や開発実績・製作物を紹介します
        </p>
        <div class="flex justify-center items-center">
          <nuxt-link
            to="/projects"
            class="w-40 shadow bg-white font-bold text-center text-gray-800 text-xs py-1 px-4 mr-2 lg:w-56 lg:text-base lg:mr-4"
          >
            Projects
          </nuxt-link>
          <nuxt-link
            to="/experiences"
            class="w-40 shadow border border-primary-500 font-bold text-center text-primary-500 text-xs py-1 px-4 lg:w-56 lg:text-base"
          >
            Work Experience
          </nuxt-link>
        </div>
        <!-- timeline start point -->
        <div class="p-2 lg:flex lg:flex-wrap lg:p-6" />
        <section class="timeline py-10">
          <!-- timeline's icon -->
          <div class="timeline-item">
            <div class="timeline-img" />

            <!-- timeline's contents -->
            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2">
                SHIEN株式会社
              </p>
              <div class="date bg-gradient-gray">
                2015.7 ~
              </div>
              <p class="p-2">
                Web制作やシステム開発の受託・業務委託を中心に、各企業のIT部門を支援する会社を起業
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />

            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2">
                Asian Union Holdings Limited
              </p>
              <div class="date bg-gradient-gray">
                2014.7 ~
              </div>
              <p class="p-2">
                日本企業向けの受託案件や自社案件のエンジニアとして開発を担当
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />

            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2">
                株式会社コロプラ
              </p>
              <div class="date bg-gradient-gray">
                2013.4 ~ 2014.6
              </div>
              <p class="p-2">
                Unityを利用したスマートフォンゲームのプログラマーとして活動
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2">
                株式会社ジークレスト
              </p>
              <div class="date bg-gradient-gray">
                2010.5 ~ 2013.3
              </div>
              <p class="p-2">
                アットゲームズをはじめとしたソーシャルゲームの運用開発のエンジニア・プログラマーとして活動。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2">
                ピセ株式会社
              </p>
              <div class="date bg-gradient-gray">
                2007.4 ~ 2010.4
              </div>
              <p class="p-2">
                未経験からSIer企業のプログラマーとしての活動。
                半年の研修後、ケーブルテレビの帳票システムや医療関連の臨床情報入力システムの開発など受託の新規案件を行いました。
              </p>
            </div>
          </div>
        </section>
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
    const title: string = 'Projects and Works'
    return {
      title
    }
  }
})
</script>

<style scoped>
.timeline {
  @apply relative;
}

.timeline::before {
  @apply absolute;
  content: '';
  width: 5px;
  height: 95%;
  left: 50px;
  transform: translateX(-50%);
  background-image: linear-gradient(
    to right,
    theme('colors.gray.800'),
    theme('colors.gray.700')
  );
}

.timeline-item {
  @apply w-full mb-10;
}

.date {
  @apply inline-block absolute top-0 right-0 text-white;
  padding: 10px;
}

.timeline-item:nth-child(even) > .timeline-content > .date {
  @apply right-auto left-0;
}

.timeline-item::after {
  @apply block clear-both;
  content: '';
}

.timeline-content {
  @apply relative shadow-lg max-w-full w-auto bg-white;
  padding: 50px 0 0 0;
  border-radius: 4px;
  margin-left: 80px;
}

.timeline-content::after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  right: -15px;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #fff;
}

.timeline-item:nth-child(even) > .timeline-content {
  @aply float-none;
}

.timeline-item:nth-child(even) > .timeline-content:after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  left: -15px;
  border-width: 10px 15px 10px 0;
  border-color: transparent #fff transparent transparent;
}

.timeline-img {
  @apply absolute rounded-full bg-primary-500;
  width: 30px;
  height: 30px;
  left: 50px;
  margin-top: 25px;
  margin-left: -15px;
}

.timeline-img-header {
  @apply relative;
  height: 200px;
  margin-bottom: 20px;
}

@screen lg {
  .timeline::before {
    left: 50%;
  }
  .timeline-content {
    width: 45%;
    margin-left: 0;
  }
  .timeline-item:nth-child(even) > .timeline-content {
    @apply float-right;
    padding: 50px 0 0 0;
  }
  .timeline-img {
    left: 50%;
  }
}
</style>
