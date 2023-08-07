<template>
  <TheLoader v-if="isProssesing"/>
  <div class="company-form">
    <div class="company-form__one-step">
      <div class="company-form__input">
        <p class="company-form__input-text">Ваш логин</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="student-form__input-text">Ваш пароль</p>
        <input :class="{'error': v$?.password?.$error}" v-model="formData.password" :type="SHOW_PASSWORD_ONE ? 'password' : 'text'">
        <IconShowPassOneState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-if="SHOW_PASSWORD_ONE"/>
        <IconShowPassTwoState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-else/>
        <span v-if="v$?.password?.$error">{{ v$?.password?.$errors[0].$message }}</span>
        <IconError class="error-icons" v-if="v$?.password?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="student-form__input-text">Подтвердите пароль</p>
        <input :class="{'error': v$?.RePassword?.$error}" v-model="formData.RePassword" :type="SHOW_PASSWORD_TWO ? 'password' : 'text'">
        <IconShowPassOneState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-if="SHOW_PASSWORD_TWO"/>
        <IconShowPassTwoState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-else/>
        <span v-if="v$?.RePassword?.$error">{{ v$?.RePassword?.$errors[0].$message }}</span>
        <IconError class="error-icons" v-if="v$?.RePassword?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="student-form__input-text">Ваш e-mail</p>
        <input :class="{'error': v$?.email?.$error}" v-model="formData.email" type="email">
        <span v-if="v$?.email?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.email?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="student-form__input-text">Ваш телефон</p>
        <input :class="{'error': v$?.phone?.$error}" v-model="formData.phone" type="text">
        <span v-if="v$?.phone?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.phone?.$error"/>
      </div>

      <div class="company-form__btn">
        <TheButton
        :width="130"
        :padding="9"
        :lineHeight="21"
        style="margin-top: 20px;"
        @click="nextStep"
        >Далее</TheButton>
      </div>
    </div>

    <div class="company-form__one-step" v-if="nextStepInfo">
      <div class="company-form__input">
        <p class="company-form__input-text">Наименование компании</p>
        <input :class="{'error': v1$?.name?.$error}" type="text" v-model="formTwoData.name">
        <span v-if="v1$?.name?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.name?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">ИНН</p>
        <input :class="{'error': v1$?.number?.$error}" type="text" v-model="formTwoData.number">
        <span v-if="v1$?.number?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.number?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Страна</p>
        <input :class="{'error': v1$?.country?.$error}" type="text" v-model="formTwoData.country">
        <span v-if="v1$?.country?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.country?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Город</p>
        <input :class="{'error': v1$?.city?.$error}" type="text" v-model="formTwoData.city">
        <span v-if="v1$?.city?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.city?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Юридический адрес</p>
        <input :class="{'error': v1$?.adress?.$error}" type="text" v-model="formTwoData.adress">
        <span v-if="v1$?.adress?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.adress?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Почтовый адрес</p>
        <input  type="text" v-model="formTwoData.postadress">
      </div>

      <div class="student-form__accept" @click="isAdress = !isAdress">
        <div class="student-form__accept-icon">
            <IconCheckBoxOne v-if="!isAdress"/>
            <IconCheckBoxTwo v-else/>
          </div>
          
          <p>Совпадает с юридическим</p>
      </div>

      <div style="margin-top: 7px;" class="student-form__accept" @click="ACCEPTED_FORM = !ACCEPTED_FORM">
        <div class="student-form__accept-icon">
            <IconCheckBoxOne v-if="!ACCEPTED_FORM"/>
            <IconCheckBoxTwo v-else/>
          </div>
          
          <p>Я принимаю условия пользовательского соглашения и <span> правила обработки персональных данных</span></p>
      </div>

      <div class="company-form__btn">
        <TheButton
        :padding="9"
        :lineHeight="21"
        style="margin-top: 20px; width: 100%;"
        :isDisabled="!ACCEPTED_FORM"
        @click="registration"
        >Создать аккаунт</TheButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import IconError from '@/assets/icons/registration/ErrorIcon.vue'

import IconCheckBoxOne from '@/assets/icons/registration/CheckboxOne.vue'
import IconCheckBoxTwo from '@/assets/icons/registration/CheckboxTwo.vue'


import TheButton from '@/components/UI/Buttons/Button.vue'
import TheLoader from '../UI/Loader/TheLoader.vue'

import {ref, computed} from 'vue'


import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

// mixins
import FirebaseMethods from '../../mixins/FirebaseMethods'
const isProssesing = ref(false);
const router = useRouter();

const formData = ref({
  login: '',
  email: '',
  password: '',
  RePassword: '',
  phone: '',
})

const rules = computed(() => {
  return {
    login: { required },
    phone: { required },
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

const SHOW_PASSWORD_ONE = ref(true)
const SHOW_PASSWORD_TWO = ref(true)


const nextStepInfo = ref(false);
async function nextStep(){
  const results = await v$.value.$validate()
  if(results) nextStepInfo.value = true;
}

const formTwoData = ref({
  name: '',
  number: '',
  country: '',
  RePassword: '',
  city: '',
  adress: '',
  postadress: '',
})

const rulesTwo = computed(() => {
  return {
    name: { required },
    number: { required },
    country: { required },
    city: { required },
    adress: { required },
  };
});


const isAdress = ref(false);
const ACCEPTED_FORM = ref(false)

const v1$ = useVuelidate(rulesTwo, formTwoData)

async function sendRegistred(){
  const companyInfo = 'company-' + Date.now();
    const objPrivate = {
      login: formData.value.login,
      password: formData.value.password,
      email: formData.value.email,
      phone: formData.value.phone,
    }
    const objPublic = {
      nameCompany: formTwoData.value.name,
      inn: formTwoData.value.number,
      country: formTwoData.value.country,
      city: formTwoData.value.city,
      urAdress: formTwoData.value.adress,
      postAdress: formTwoData.value.postadress,
      teachers: [],
    }
    const allInfo = {
      login: formData.value.login,
      password: formData.value.password,
      email: formData.value.email,
      phone: formData.value.phone,
      nameCompany: formTwoData.value.name,
      inn: formTwoData.value.number,
      country: formTwoData.value.country,
      city: formTwoData.value.city,
      urAdress: formTwoData.value.adress,
      postAdress: formTwoData.value.postadress,
      teachers: [],
      country: 0,
      timed: 0,
      type:{
        student: false,
        teachers: false,
        company: true,
      },

    }
    await FirebaseMethods.sendDocumentDataBase('privateCompany', companyInfo, objPrivate);
    await FirebaseMethods.sendDocumentDataBase('publicCompany', companyInfo, objPublic);
    await FirebaseMethods.sendDocumentDataBase('allUser', companyInfo, allInfo);
    await FirebaseMethods.registerUser(formData.value.email, formData.value.password);

}

async function registration(){
  const results = await v1$.value.$validate()

  if(results){
    isProssesing.value = true;
    await sendRegistred();
    isProssesing.value = false;
    router.push('/')
  }
}



</script>

<style lang="scss">
.company-form{
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  &__one-step{
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
    max-width: 380px;
    width: 100%;
    margin-top: 30px;
    padding: 0 50px;
    padding-top: 35px;
    padding-bottom: 43px;
  }

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
}
</style>