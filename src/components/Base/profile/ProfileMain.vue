<template>
  <div class="account" v-if="usersStore.userId !== null">
    <h4>Аккаунт</h4>

    <div class="account__inputs">
      <div class="account__inputs-input" v-if="usersStore.user[usersStore.userId].type.student">
        <p>Логин</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].login">
      </div>

      <div class="account__inputs-input" style="margin-top: 19px;">
        <p>Пароль</p>
        <input :type="!SHOW_PASSWORD ? 'password' : 'text'" v-model="usersStore.user[usersStore.userId].password">
        <IconShowPassOneState @click="SHOW_PASSWORD = !SHOW_PASSWORD" v-if="SHOW_PASSWORD"/>
        <IconShowPassTwoState  @click="SHOW_PASSWORD = !SHOW_PASSWORD" v-else/>
      </div>

      <div class="account__inputs-input"  style="margin-top: 16px;">
        <p>E-mail</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].email">
      </div>

      <div class="account__inputs-input"  style="margin-top: 16px;">
        <p>Телефон</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].phone">
      </div>

      <TheButton
      :width="239"
      :padding="15"
      style="margin-top: 28px;"
      >Сохранить изменения</TheButton>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

import TheButton from '@/components/UI/Buttons/Button.vue'
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import {stateUser} from "@/stores/StateUser";

const usersStore = stateUser();

const SHOW_PASSWORD = ref(true);
</script>

<style lang="scss">
.account{
  font-family: Montserrat;

  h4{
    color: #292C32;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 110% */
  }

  &__inputs{
    margin-top: 24px;
    &-input{
      position: relative;
      p{
        color: #8B919E;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; 
        margin-bottom: 7px;
      }

      input{
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        width: 330px;
        font-size: 13px;
        color: #454B58;
        line-height: 24px;
        padding: 3px 22px;
        padding-right: 50px;
      }

      svg{
        position: absolute;
        right: 16px;
        bottom: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>