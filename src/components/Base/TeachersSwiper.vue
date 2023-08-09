<template>
  <div class="teachers-swiper">
    <div class="container">
      <swiper
          grab-cursor
          :slides-per-view="1"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.teachers-swiper__navigation-right',
            prevEl: '.teachers-swiper__navigation-left'
          }"
          @slideNextTransitionStart="nextSlide"
          @slidePrevTransitionStart="prevSlide"
      >
        <div class="teachers-swiper__navigation">
          <div class="teachers-swiper__navigation-left" />

          0{{ currentSlide }} <span>/ 03</span>

          <div class="teachers-swiper__navigation-right" />
        </div>

        <swiper-slide>
          <div class="teachers-swiper__slide">
            <div class="teachers-swiper__slide-wrapper">
              <h1 class="teachers-swiper__title">Лучшие преподаватели <span>иностранных языков</span> у тебя дома</h1>

              <p class="teachers-swiper__text">Вы приобретете полезные навыки, расширите свой кругозор и познакомитесь с потрясающими людьми со всего мира</p>

              <Button
                  :padding="20"
                  :width="262"
                  :line-height="20"
                  uppercase-text
              >
                Начните сейчас
              </Button>
            </div>

            <div class="teachers-swiper__image-wrapper">
              <img alt="" src="../../assets/img/main/teacher-swiper-1.png">
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="teachers-swiper__slide">
            <div class="teachers-swiper__slide-wrapper">
              <h1 class="teachers-swiper__title">Лучшие курсы <span>иностранных языков</span> у тебя дома</h1>

              <p class="teachers-swiper__text">Вы приобретете полезные навыки, расширите свой кругозор и познакомитесь с потрясающими людьми со всего мира</p>

              <Button
                  :padding="20"
                  :width="262"
                  :line-height="20"
                  uppercase-text
              >
                Начните сейчас
              </Button>
            </div>

            <div class="teachers-swiper__image-wrapper">
              <img alt="" src="../../assets/img/main/teacher-swiper-1.png">
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="teachers-swiper__slide">
            <div class="teachers-swiper__slide-wrapper">
              <h1 class="teachers-swiper__title">Лучшие преподаватели <span>иностранных языков</span> у тебя дома</h1>

              <p class="teachers-swiper__text">Вы приобретете полезные навыки, расширите свой кругозор и познакомитесь с потрясающими людьми со всего мира</p>

              <Button
                  :padding="20"
                  :width="262"
                  :line-height="20"
                  uppercase-text
              >
                Начните сейчас
              </Button>
            </div>

            <div class="teachers-swiper__image-wrapper">
              <img alt="" src="../../assets/img/main/teacher-swiper-1.png">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/UI/Buttons/Button.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'

const currentSlide = ref(1)

const nextSlide = () => {
  if (currentSlide.value < 3) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 1) {
    currentSlide.value--
  }
}
</script>

<style scoped lang="scss">
.teachers-swiper {

  &__navigation {
    display: flex;
    align-items: center;
    position: absolute;
    transform: rotate(-90deg);
    top: 202px;
    left: -26px;
    color: #F14A74;
    font-size: 35px;
    font-weight: 600;
    line-height: 30px;
    z-index: 10;

    span {
      display: block;
      color: #C7D3E4;
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
      margin-left: 8px;
      margin-top: 2px;
    }

    &-left, &-right {
      width: 8px;
      height: 51px;
      position: absolute;
      top: -12px;
    }

    &-left {
      left: -53px;
      transform: rotate(-90deg);
      background: url("../../assets/img/main/teacher-swiper-arrow.svg");
    }

    &-right {
      right: -56px;
      transform: rotate(90deg);
      background: url("../../assets/img/main/teacher-swiper-arrow.svg");
    }
  }

  &__slide {
    display: flex;
    align-items: flex-start;
  }

  &__slide-wrapper {
    min-width: 620px;
    margin-left: 117px;
    margin-right: 41px;
    padding-top: 81px;
  }

  &__image-wrapper {
    position: relative;
    min-width: 602px;
    padding-top: 10px;
  }

  &__title {
    color: #292C32;
    font-family: EB Garamond, serif;
    font-size: 60px;
    font-weight: 600;
    line-height: 60px;

    span {
      color: #F14A73;
    }
  }

  &__text {
    color: #454B58;
    line-height: 25px;
    max-width: 475px;
    margin-top: 26px;
    margin-bottom: 51px;
  }
}
</style>
