<template>
  <div class="my-lessons">
    <div class="my-lessons__title" v-if="usersStore.user[usersStore.userId].type.company">Уроки компании</div>
    <div class="my-lessons__title" v-else>Мои уроки</div>

    <TheCalendar month-calendar/>

    <div class="my-lessons__row">
      <div class="my-lessons__type my-lessons__type--personal">
        <div/>
        <p>персональные уроки</p>
      </div>

      <div class="my-lessons__type my-lessons__type--group">
        <div/>
        <p>групповые уроки</p>
      </div>

      <div class="my-lessons__type my-lessons__type--course">
        <div/>
        <p>уроки курсов</p>
      </div>
    </div>

    <div class="my-lessons__subtitle">Список оплаченных уроков</div>

    <div class="my-lessons__wrapper">
      <div class="my-lessons__paid" v-for="i in 5" :key="i">
        <img class="my-lessons__paid-img" src="../../../assets/img/people/pfp-1.png" alt="">
        <div>
          <div class="my-lessons__paid-time">12:35 pm, 28 июня 2021</div>
          <div class="my-lessons__paid-name">Алексей Кузьменко Андреевич</div>
        </div>
      </div>
    </div>

    <div class="my-lessons__subtitle">Список групповых занятий</div>

    <div class="my-lessons__wrapper">
      <div class="my-lessons__item" v-for="i in 6" :key="i">
        <div class="my-lessons__item-tags">
          <div class="my-lessons__item-tag my-lessons__item-tag--date">28 июня 2021</div>
          <div class="my-lessons__item-tag my-lessons__item-tag--time">10:00 – 11:30</div>
        </div>

        <div class="my-lessons__item-title">Базовые навыки испанского языка</div>

        <div class="my-lessons__item-row">
          <div>
            <p class="my-lessons__item-text">Зарегистрировались</p>
            <p class="my-lessons__item-value">10 человек</p>
          </div>

          <div>
            <p class="my-lessons__item-text">Максимум:</p>
            <p class="my-lessons__item-value">15 человек</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-lessons__buttons" v-if="!usersStore.user[usersStore.userId].type.student">
      <Button
          :width="330"
          :padding="16"
      >
        Создать групповой урок
      </Button>

      <Button
          :width="330"
          :padding="16"
          is-courses
      >
        Показать все
      </Button>
    </div>

    <div class="my-lessons__subtitle">Список обучающих курсов</div>

    <div class="my-lessons__wrapper">
      <div class="my-lessons__item" v-for="i in 5" :key="i">
        <div class="my-lessons__item-tags">
          <div class="my-lessons__item-tag my-lessons__item-tag--date">28 июня 2021</div>
          <div class="my-lessons__item-tag my-lessons__item-tag--time">10:00 – 11:30</div>
        </div>

        <div class="my-lessons__item-title">Базовые навыки испанского языка</div>

        <div class="my-lessons__item-row">
          <div>
            <p class="my-lessons__item-text">Зарегистрировались</p>
            <p class="my-lessons__item-value">10 человек</p>
          </div>

          <div>
            <p class="my-lessons__item-text">Максимум:</p>
            <p class="my-lessons__item-value">15 человек</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-lessons__buttons" v-if="!usersStore.user[usersStore.userId].type.student">
      <Button
          :width="330"
          :padding="16"
      >
        Создать групповой урок
      </Button>

      <Button
          :width="330"
          :padding="16"
          is-courses
      >
        Показать все
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/UI/Buttons/Button.vue'
import TheCalendar from '@/components/UI/Calendar/TheCalendar.vue'
import {stateUser} from "@/stores/StateUser";

const usersStore = stateUser();
</script>

<style scoped lang="scss">
.my-lessons {

  &__title {
    color: #292C32;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 25px;
  }

  &__row {
    display: flex;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__type {
    display: flex;
    align-items: center;
    margin: 20px 35px 15px 0;

    div {
      width: 19px;
      height: 19px;
      flex-shrink: 0;
      margin-right: 11px;
    }

    p {
      color: #454B58;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }

    &--personal div {
      background: #C0D1FF;
    }

    &--group div {
      background: #A7E6C8;
    }

    &--course div {
      background: #FCAAAA;
    }
  }

  &__subtitle {
    margin-top: 30px;
    margin-bottom: 10px;
    color: #292C32;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
  }

  &__paid {
    width: 447px;
    height: 80px;
    display: flex;
    flex-shrink: 0;
    padding: 15px 23px;
    margin-right: 20px;
    margin-bottom: 15px;
    align-items: center;
    border: 1px solid #DCE3E8;
    background: rgba(242, 245, 250, 0.60);

    &:nth-child(2n) {
      margin-right: 0;
    }

    &-img {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      margin-right: 19px;
      border-radius: 100px;
    }

    &-time {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
    }

    &-name {
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
    }
  }

  &__item {
    width: 330px;
    height: 180px;
    flex-shrink: 0;
    padding: 24px 25px 23px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #DCE3E8;
    background: rgba(242, 245, 250, 0.60);

    &:nth-child(3n) {
      margin-right: 0;
    }

    &-tags {
      display: flex;
    }

    &-tag {
      padding: 6px 8px;
      color: #292C32;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
      border-radius: 20px;

      &--date {
        background: #C7F2EB;
      }

      &--time {
        background: #FFDEE4;
      }
    }

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 19px;
      margin-bottom: 11px;
      margin-top: 17px;
    }

    &-row {
      display: flex;
      justify-content: space-between;
    }

    &-text {
      color: #8B919E;
      font-size: 14px;
      font-weight: 500;
      line-height: 23px;
    }

    &-value {
      color: #292C32;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  &__buttons {
    display: flex;
    margin-bottom: 15px;

    .ui-button:nth-child(2) {
      margin-left: 20px;
    }
  }
}
</style>
