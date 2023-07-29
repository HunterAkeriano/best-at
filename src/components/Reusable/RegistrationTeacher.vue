<template>
  <div class="teacher-forms">
    <div class="teacher-forms__one-step" v-if="stepModal.one">
      <div class="teacher-forms__input" style="margin-top: 5px;">
        <p class="teacher-forms__input-text">Ваш логин</p>
        <input :class="{'error': v1$?.login?.$error}" type="text" v-model="oneStepData.login">
        <span v-if="v1$?.login?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.login?.$error"/>
      </div>

      <div class="student-form__input" style="margin-top: 15px;">
        <p class="student-form__input-text">Ваш пароль</p>
        <input :class="{'error': v1$?.password?.$error}" v-model="oneStepData.password"  :type="SHOW_PASSWORD_ONE ? 'password' : 'text'">
        <IconShowPassOneState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-if="SHOW_PASSWORD_ONE"/>
        <IconShowPassTwoState @click="SHOW_PASSWORD_ONE = !SHOW_PASSWORD_ONE" class="showpass" v-else/>
        <span v-if="v1$?.password?.$error">{{ v1$?.password?.$errors[0].$message }}</span>
        <IconError class="error-icons" v-if="v1$?.password?.$error"/>
      </div>

      <div class="student-form__input" style="margin-top: 15px;">
        <p class="student-form__input-text">Подтвердите пароль</p>
        <input :class="{'error': v1$?.RePassword?.$error}" v-model="oneStepData.RePassword" :type="SHOW_PASSWORD_TWO ? 'password' : 'text'">
        <IconShowPassOneState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-if="SHOW_PASSWORD_TWO"/>
        <IconShowPassTwoState @click="SHOW_PASSWORD_TWO = !SHOW_PASSWORD_TWO" class="showpass" v-else/>
        <span v-if="v1$?.RePassword?.$error">{{ v1$?.RePassword?.$errors[0].$message }}</span>
        <IconError class="error-icons" v-if="v1$?.RePassword?.$error"/>
      </div>

      <div class="teacher-forms__input" style="margin-top: 18px;">
        <p class="teacher-forms__input-text">Ваш e-mail</p>
        <input :class="{'error': v1$?.email?.$error}" v-model="oneStepData.email" type="email" >
        <span v-if="v1$?.email?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.email?.$error"/>
      </div>

      <div class="teacher-forms__input" style="margin-top: 15px;">
        <p class="teacher-forms__input-text">Ваш телефон</p>
        <input :class="{'error': v1$?.phone?.$error}" v-model="oneStepData.phone" v-on:keydown="onKeyDown" type="text" >
        <span v-if="v1$?.phone?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.phone?.$error"/>
      </div>

      <div class="teacher-forms__btn">
        <TheButton
        :width="130"
        :padding="9"
        :lineHeight="21"
        style="margin-top: 29px;"
        @click="nextStep"
        >Далее</TheButton>
      </div>

    </div>
   
    <div class="teacher-forms__two-step" v-if="true">
      <div class="teacher-forms__photo">
        
      </div>
    </div>
   
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import IconError from '@/assets/icons/registration/ErrorIcon.vue'


import TheButton from '@/components/UI/Buttons/Button.vue'

const SHOW_PASSWORD_ONE = ref(true)
const SHOW_PASSWORD_TWO = ref(true)


const stepModal = ref({
  one: true,
  two: false,
  three: false,
})



const onKeyDown = (event) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
  const isDigit = /\d/.test(event.key);
  const isAllowedKey = allowedKeys.includes(event.key);
  const isMaxLengthReached = oneStepData.value.phone.length >= 13;
  if ((!isDigit && !isAllowedKey) || isMaxLengthReached) {
    event.preventDefault();
  }
};

const oneStepData = ref({
  login: '',
  email: '',
  password: '',
  RePassword: '',
  phone: '',
})

const rulesOne = computed(() => {
  return {
    login: { required },
    email: { required, email },
    phone: { required, 
      minLength: minLength(12) 
    },
    password: {
      required: helpers.withMessage('Введите пароль', required),
      minLength: helpers.withMessage('Минимальная длина пароля 6 символов', minLength(6)),
    },
    RePassword: {
      required: helpers.withMessage('Подтвердите пароль', required),
      sameAs: helpers.withMessage('Пароли не совпадают', sameAs(oneStepData.value.password)),
    },
  };
});

const v1$ = useVuelidate(rulesOne, oneStepData)

async function nextStep(){
  // const results = await v1$.value.$validate()
  // if(results) stepModal.value.two = true;
  stepModal.value.two = true;
}

</script>


<style lang="scss">
.teacher-forms{
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  transition: all .5s;
  gap: 40px;

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

  &__one-step,
  &__two-step{
    max-width: 380px;
    width: 100%;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
    padding: 0 50px;
    padding-top: 35px;
    padding-bottom: 43px;
    margin-top: 25px;
  }
}


.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>