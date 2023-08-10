<template>
  <div class="main login">
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
            <input :class="{'error': v$?.email?.$error}" type="text" v-model="formData.email">
            <span v-if="v$?.email?.$error">Введите email</span>
            <IconError class="error-icons" v-if="v$?.email?.$error"/>
          </div>

          <div class="login__forms-input" style="margin-top: 15px;">
            <h5>Ваш пароль</h5>
            <input :class="{'error': v$?.password?.$error}" @input="filterInput" :type="SHOW_PASSWORD_ONE ? 'password' : 'text'" v-model="formData.password">
            <IconShowPassOneState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-if="SHOW_PASSWORD_ONE"/>
            <IconShowPassTwoState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-else/>
            <span v-if="v$?.password?.$error">{{ v$?.password?.$errors[0].$message }}</span>
            <IconError class="error-icons" v-if="v$?.password?.$error"/>
          </div>

          <div class="login__forms-btn">
            <TheButton
              :width="130"
              :padding="9"
              :lineHeight="21"
              style="margin-top: 20px;"
              @click="sigin"
              >Войти</TheButton>
          </div>
          <p class='login__forms-error'>{{ ERROR_MESSAGE }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'
import IconError from '@/assets/icons/registration/ErrorIcon.vue'

import TheButton from '@/components/UI/Buttons/Button.vue'
import {ref, computed} from 'vue'
// firebase BDSM
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'

function filterInput() {
  formData.value.password = formData.value.password.replace(/[^a-zA-Z0-9@]/g, '');
}

const formData = ref({
  email: '',
  password: '',
})

const rules = computed(() => {
  return {
    email: { required, email },
    password: {
      required: helpers.withMessage('Введите пароль', required),
      minLength: helpers.withMessage('Минимальная длина пароля 6 символов', minLength(6)),
    },
  };
});


const v$ = useVuelidate(rules, formData)
const router = useRouter();

const SHOW_PASSWORD_ONE = ref(true);
const ERROR_MESSAGE = ref('')


async function login(){
  signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/')
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
  const results = await v$.value.$validate()
  if(results){
    await login();
  }
}
</script>

<style lang="scss">
.login{
  margin-top: 92px;
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
        font-family: Montserrat;
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

      .error{
      outline: 1px solid #EF4848;
      &:focus{
        outline: 1px solid #EF4848;
      }
    }

    span{
        position: absolute;
        right: 0;
        bottom: -13px;
        color: #EF4848;
        font-size: 9px;
        font-style: normal;
        font-weight: 600;
        line-height: 10px;
    }

    .error-icons{
      position: absolute;
      right: -29px;
      top: 29px;

    }
    }

    &-error{
      color: #EF4848;
      font-size: 9px;
      font-style: normal;
      font-weight: 600;
      line-height: 10px;
      margin-top: 20px;
    }
  }
}
</style>
