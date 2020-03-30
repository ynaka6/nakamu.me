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
        <section class="timeline">
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

<style lang="scss" scoped>
$primary: #ff5f5f;
$dark-primary: #303f9f;
$light-primary: #c5cae9;
$text: #ffffff;
$primary-text: #212121;
$secondary-text: #757575;
$accent: #ff4081;

section {
  padding: 50px 0 50px 0;
}

html,
body {
  overflow-x: hidden;
}

body {
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 400;
  background-color: #eee;
}

header {
  background: $primary;
  color: $text;
  padding: 150px 0;

  p {
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 0;
    font-size: 60px;
    margin-top: -30px;
  }
}

.timeline {
  position: relative;

  &::before {
    content: '';
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: $primary-text;
    opacity: 0.5;
  }
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;

  &:nth-child(even) {
    .timeline-content {
      float: right;
      padding: 50px 0 0 0;

      .date {
        right: auto;
        left: 0;
      }

      &::after {
        content: '';
        position: absolute;
        // border-style: solid;
        // width: 0;
        // height: 0;
        // top: 30px;
        // left: -15px;
        // border-width: 10px 15px 10px 0;
        // border-color: transparent #f5f5f5 transparent transparent;
      }
    }
  }

  &::after {
    content: '';
    display: block;
    clear: both;
  }
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 50px 0 0 0;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    right: -15px;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #f5f5f5;
  }
}

.timeline-img {
  background-color: $primary;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 25px;
  margin-left: -15px;
}

h2 {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
}

.timeline-card {
  padding: 50px 0 0 0 !important;
}

.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;

  h2 {
    color: $text;
    bottom: 5px;
    left: 20px;
  }
}

.date {
  display: inline-block;
  color: white;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (max-width: 1024px) {
  .timeline {
    &::before {
      left: 50px;
    }

    .timeline-img {
      left: 50px;
    }

    .timeline-content {
      max-width: 100%;
      width: auto;
      margin-left: 15%;
    }

    .timeline-item {
      &:nth-child(even) {
        .timeline-content {
          float: none;
        }
      }

      &:nth-child(odd) {
        .timeline-content {
          &::after {
            content: '';
            // position: absolute;
            // border-style: solid;
            // width: 0;
            // height: 0;
            // top: 30px;
            // left: -15px;
            // border-width: 10px 15px 10px 0;
            // border-color: transparent #f5f5f5 transparent transparent;
          }
        }
      }
    }
  }
}
</style>
