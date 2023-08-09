<template>
  <div class="trial-lesson">
    <div class="trial-lesson__bg">
      <img
          class="trial-lesson__bg-img trial-lesson__bg-left"
          src="../../assets/img/main/trial-lesson-left.png"
          alt="" width="550" height="398"
      >

      <img
          class="trial-lesson__bg-img trial-lesson__bg-right"
          src="../../assets/img/main/trial-lesson-right.png"
          alt="" width="625" height="398"
      >
    </div>

    <div class="container">
      <div class="trial-lesson__wrapper">
        <h2 class="trial-lesson__title">Запишись на пробный урок</h2>

        <p class="trial-lesson__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы.</p>

        <Button
            :width="262"
            :padding="19"
            uppercase-text
            @click="modalsStore.currentModal = 'Пробный урок'"
        >
          забронировать урок
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalsStore } from '@/stores/modals'
import Button from '@/components/UI/Buttons/Button.vue'


const modalsStore = useModalsStore()
</script>

<style scoped lang="scss">
.trial-lesson {
  height: 398px;
  margin-top: 138px;
  background: #F2F5FA;
  position: relative;

  &__bg {

    &-img {
      position: absolute;
    }

    &-left {
      left: 0;
    }

    &-right {
      right: 0;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin-left: 117px;
  }

  &__title {
    margin-top: 57px;
  }

  &__text {
    color: #454B58;
    font-size: 16px;
    line-height: 29px;
    max-width: 678px;
    margin-top: 20px;
    margin-bottom: 41px;
  }
}
</style>
