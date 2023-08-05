<template>
  <div class="login">
    <div class="container">
      <div class="login__links">
        <p>Главная</p>
        <span>/</span>
        <p>Авторизация</p>
      </div>
      <div class="login__forms">
        <h3>Авторизация</h3>
        <div class="login__forms-block">
          <div class="login__forms-input">
            <h5>Ваш email</h5>
            <input type="text" v-model="formData.login">
          </div>

          <div class="login__forms-input" style="margin-top: 15px;">
            <h5>Ваш пароль</h5>
            <input :type="SHOW_PASSWORD_ONE ? 'password' : 'text'" v-model="formData.password">
            <IconShowPassOneState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-if="SHOW_PASSWORD_ONE"/>
            <IconShowPassTwoState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-else/>
          </div>
          <p>{{ ERROR_MESSAGE }}</p>
          <div class="login__forms-btn">
            <TheButton
              :width="130"
              :padding="9"
              :lineHeight="21"
              style="margin-top: 20px;"
              @click="sigin"
              >Войти</TheButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import TheButton from '@/components/UI/Buttons/Button.vue'
import {ref} from 'vue'
// firebase BDSM
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter();

const SHOW_PASSWORD_ONE = ref(true);
const ERROR_MESSAGE = ref('')

const formData = ref({
  login: '',
  password: '',
})

const isProssesing = ref(false);

async function login(){
  signInWithEmailAndPassword(auth, formData.value.login, formData.value.password)
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data.user))
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          ERROR_MESSAGE.value = 'Не верный емаил';
          break;
        case "auth/user-not-found":
          ERROR_MESSAGE.value = 'Пользователь не найден';
          break;
        case "auth/wrong-password":
          ERROR_MESSAGE.value = 'Не верный пароль';
          break;
        default:
          ERROR_MESSAGE.value = `${error.code}`;
          break;
      }
  });
}

async function sigin(){
  await login();
  router.push('/')
}
</script>

<style lang="scss">
.login{
  font-family: Montserrat;
  margin-top: 25px;
  margin-bottom: 40px;
  &__links{
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
    p{
      color: #454B58;
    }
    span{
      color: #454B58;
      margin: 0 9px;
    }
  }
  &__forms{
    margin-top: 21px;
    h3{
      color: #292C32;
      text-align: center;
      font-family: EB Garamond;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &-block{
     
      width: 380px;
      margin: 0 auto;
      padding: 40px 50px;
      padding-bottom: 60px;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      margin-top: 25px;
    }

    &-input{
      position: relative;
      h5{
        color: #8B919E;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }

      input{
        margin-top: 2px;
        border-radius: 20px;
        border: 0;
        width: 100%;
        padding: 5px 22px;
        padding-right: 50px;
        background: #F2F5FA;
        color: #454B58;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; 
        &:focus{
          outline: 0;
        }
      
      }
      svg{
        position: absolute;
        right: 15px;
        top: 36px;
      }
    }
  }
}
</style>