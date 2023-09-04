<template>
  <TheLoader v-if="isProssesing"/>
  <div class="student-form">

    <div class="student-form__input">
      <p class="student-form__input-text">Ваш логин</p>
      <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
      <span v-if="v$?.login?.$error">Заполните поле</span>
      <IconError class="error-icons" v-if="v$?.login?.$error"/>
    </div>

    <div class="student-form__input" style="margin-top: 15px;">
      <p class="student-form__input-text">Ваш пароль</p>
      <input :class="{'error': v$?.password?.$error}" v-model="formData.password" :type="SHOW_PASSWORD_ONE ? 'password' : 'text'">
      <IconShowPassOneState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-if="SHOW_PASSWORD_ONE"/>
      <IconShowPassTwoState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-else/>
      <span v-if="v$?.password?.$error">{{ v$?.password?.$errors[0].$message }}</span>
      <IconError class="error-icons" v-if="v$?.password?.$error"/>
    </div>

    <div class="student-form__input" style="margin-top: 16px;">
      <p class="student-form__input-text">Подтвердите пароль</p>
      <input :class="{'error': v$?.RePassword?.$error}" v-model="formData.RePassword" :type="SHOW_PASSWORD_TWO ? 'password' : 'text'">
      <IconShowPassOneState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-if="SHOW_PASSWORD_TWO"/>
      <IconShowPassTwoState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-else/>
      <span v-if="v$?.RePassword?.$error">{{ v$?.RePassword?.$errors[0].$message }}</span>
      <IconError class="error-icons" v-if="v$?.RePassword?.$error"/>
    </div>

    <div class="student-form__input" style="margin-top: 16px;">
      <p class="student-form__input-text">Ваш e-mail</p>
      <input :class="{'error': v$?.email?.$error}" v-model="formData.email" type="email">
      <span v-if="v$?.email?.$error">Заполните поле</span>
      <IconError class="error-icons" v-if="v$?.email?.$error"/>
    </div>

    <div class="student-form__accept" @click="ACCEPTED_FORM = !ACCEPTED_FORM">
      <div class="student-form__accept-icon">
        <IconCheckBoxOne v-if="!ACCEPTED_FORM"/>
        <IconCheckBoxTwo v-else/>
      </div>
      
      <p>Я принимаю условия пользовательского соглашения и <span> правила обработки персональных данных</span></p>
    </div>

    <div class="student-form__btn">
      <TheButton  
      @click="registerStudent"
      :isDisabled="!ACCEPTED_FORM"
      >Зарегистрироваться</TheButton>
    </div>
    
    <div class="student-form__last">
      <p>Или войти через социальные сети</p>
      <div class="student-form__last-icons">
        <IconFacebook/>
        <IconGoogle/>
        <IconLinkedin/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TheLoader from '../UI/Loader/TheLoader.vue'

import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import IconError from '@/assets/icons/registration/ErrorIcon.vue'

import IconCheckBoxOne from '@/assets/icons/registration/CheckboxOne.vue'
import IconCheckBoxTwo from '@/assets/icons/registration/CheckboxTwo.vue'

import IconFacebook from '@/assets/icons/registration/social/Facebook.vue'
import IconGoogle from '@/assets/icons/registration/social/Google.vue'
import IconLinkedin from '@/assets/icons/registration/social/Linkedin.vue'



import TheButton from '@/components/UI/Buttons/Button.vue'

import {ref, computed} from 'vue'
const router = useRouter();

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

// firebase игрушки
import { auth, db } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const SHOW_PASSWORD_ONE = ref(true)
const SHOW_PASSWORD_TWO = ref(true)
const ACCEPTED_FORM = ref(false);
const isProssesing = ref(false);

const formData = ref({
  login: '',
  email: '',
  password: '',
  RePassword: '',
})



const rules = computed(() => {
  return {
    login: { required },
    email: { required, email },
    password: {
      required: helpers.withMessage('Введите пароль', required),
      minLength: helpers.withMessage('Минимальная длина пароля 6 символов', minLength(6)),
    },
    RePassword: {
      required: helpers.withMessage('Подтвердите пароль', required),
      sameAs: helpers.withMessage('Пароли не совпадают', sameAs(formData.value.password)),
    },
  };
});


const v$ = useVuelidate(rules, formData)

async function register(){
  const randomNumber = 'student-' + Date.now();
  const privateInfo = {
      login: formData.value.login,
      email: formData.value.email,
      password: formData.value.password,
      RePassword: formData.value.RePassword,
    };
    const publicInfo = {
      email: formData.value.email,
      name: '',
      surname: '',
      phone: '',
      country: 0,
      timed: 2,
      about: '',
      lessons: [],
      selectedTeacher: [],
      payment: [],
      statistic: [],


    }
    const allInfo = {
      login: formData.value.login,
      email: formData.value.email,
      password: formData.value.password,
      RePassword: formData.value.RePassword,
      name: '',
      surname: '',
      phone: '',
      country: "",
      timed: 0,
      language: 0,
      about: '',
      lessons: [],
      selectedTeacher: [],
      payment: [],
      statistic: [],
      type:{
        student: true,
        teachers: false,
        company: false,
      },
      cards: [
        {
          number: '',
          user: '',
          cvv: '',
          timed: '',
          main: false,
        }
      ],
      id: randomNumber,
      ava: [
        {
          name: '',
          obj: null,
          url: null,
        }
      ],
    }
    
    await createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password);
    await setDoc(doc(db, "privateStudentData",  randomNumber), privateInfo);
    await setDoc(doc(db, "publicStudentData",  randomNumber), publicInfo);
    await setDoc(doc(db, "allUser",  randomNumber), allInfo);
}

async function registerStudent(){
  const results = await v$.value.$validate()
  if(results){
    isProssesing.value = true;
    await register();
    router.push('/')
  }
  
}





</script>

<style lang="scss">
.student-form{
  font-family: Montserrat;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 50px;
  padding-top: 35px;
  padding-bottom: 43px;

  &__input{
    position: relative;
    &-text{
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

    .showpass{
      position: absolute;
      right: 15px;
      top: 37px;
    }
    
  }

  &__accept{
    display: flex;
    gap: 10px;
    margin-top: 17px;
    cursor: pointer;
    p{
      color: #454B58;
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: 17px;

      span{
        color: #F04973;
        text-decoration-line: underline;
      }
    }
  }

  &__btn{
    margin-top: 21px;
    button{
      width: 100% !important;
      padding: 10px 0px !important;

    }
  }

  &__last{
    margin-top: 43px;
    p{
      color: #454B58;
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; 
    }
    &-icons{
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
  }

}
</style>