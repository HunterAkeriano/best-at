<template>
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

    <div class="company-form__one-step">
      <div class="company-form__input">
        <p class="company-form__input-text">Наименование компании</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">ИНН</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Страна</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Город</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Юридический адрес</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
      </div>

      <div class="company-form__input" style="margin-top: 16px;">
        <p class="company-form__input-text">Почтовый адрес</p>
        <input :class="{'error': v$?.login?.$error}" type="text" v-model="formData.login">
        <span v-if="v$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v$?.login?.$error"/>
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
  </div>
</template>

<script setup>
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import IconError from '@/assets/icons/registration/ErrorIcon.vue'

import IconCheckBoxOne from '@/assets/icons/registration/CheckboxOne.vue'
import IconCheckBoxTwo from '@/assets/icons/registration/CheckboxTwo.vue'


import TheButton from '@/components/UI/Buttons/Button.vue'

import {ref, computed} from 'vue'


import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'


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


async function nextStep(){
  const results = await v$.value.$validate()
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