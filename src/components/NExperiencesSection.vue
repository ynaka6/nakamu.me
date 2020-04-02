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
          <div class="container">
            <!-- timeline's icon -->
            <div class="timeline-item">
              <div class="timeline-img" />

              <!-- timeline's contents -->
              <div class="timeline-content">
                <h2>{{ cardTitle }}</h2>
                <!-- date -->
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <!-- contents -->
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content timeline-card">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content timeline-card">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content timeline-card">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content timeline-card">
                <h2>{{ cardTitle }}</h2>
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img" />

              <div class="timeline-content">
                <div class="date bg-gradient-gray">
                  {{ date }}
                </div>
                <h2>{{ cardTitle }}</h2>
                <p>
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents contents contents contents contents
                  contents contents contents
                </p>
              </div>
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
    const cardTitle: string = 'title'
    const date: string = 'Day Month Year'
    return {
      title,
      cardTitle,
      date
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
  left: 50%;
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

.timeline-item:nth-child(even) > .timeline-content {
  @apply float-right;
  padding: 50px 0 0 0;
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
  @apply relative shadow-lg;
  width: 45%;
  padding: 50px 0 0 0;
  border-radius: 4px;
  background: #f5f5f5;
}

.timeline-img {
  @apply absolute rounded-full;
  background-color: #ff5f5f;
  width: 30px;
  height: 30px;
  left: 50%;
  margin-top: 25px;
  margin-left: -15px;
}

h2 {
  @apply font-bold;
  font-size: 1.5rem;
}

.timeline-card {
  padding: 50px 0 0 0 !important;
}

.timeline-img-header {
  @apply relative;
  height: 200px;
  margin-bottom: 20px;
}

.timeline-img-header > h2 {
  bottom: 5px;
  left: 20px;
}

@media screen and (max-width: 768px) {
  .timeline::before {
    left: 50px;
  }

  .timeline-img {
    left: 50px;
  }

  .timeline-content {
    @apply max-w-full w-auto;
    margin-left: 80px;
  }

  .timeline-item:nth-child(even) > .timeline-content {
    @apply float-none;
  }
}
</style>
