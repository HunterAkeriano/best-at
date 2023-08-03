<template>
<div class="not-found">
  <div class="container">
    <div class="not-found__title">
      <h2>Увы, страница не найдена</h2>
      <h5>Погладьте пока котика или перейдите на главную.</h5>
    </div>
    <div class="not-found__img">
      <picture>
        <source type="image/webp" :srcset="NotFound">
        <source type="image/png" :srcset="'@/assets/img/404/404.png'">
        <img class="card__content-img" :src="NotFound" alt="">
       </picture>
    </div>
    <div class="not-found__btn">
      <router-link :to="{ path: `/` }">
      <TheButton
      :width="262"
      :uppercaseText="true"
      :padding="20"
      >перейти на главную</TheButton>
      </router-link>
    </div>
  </div>
</div>
</template>

<script setup>
import NotFound from '@/assets/img/404/404.png?w=889&h=500&format=webp'

import TheButton from '@/components/UI/Buttons/Button.vue'
</script>

<style lang="scss">
.not-found{
  font-family: EB Garamond;
  margin-top: 23px;
  margin-bottom: 50px;
  &__title{
    text-align: center;
    h2{
      color: #292C32;
      text-align: center;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: 60px; /* 100% */
    }
    h5{
      margin-top: 20px;
      color: #454B58;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 25px; /* 178.571% */
    }
  }
  &__img{
    max-width: 914px;
    margin: 0 auto;
    margin-top: 55px;
  }
  &__btn{
    button{
      margin: 0 auto;
      margin-top: 60px;
    }
  }
}
</style>