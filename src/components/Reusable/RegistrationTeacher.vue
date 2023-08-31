<template>
   <TheLoader v-if="isProssesing"/>
  <div class="teacher-forms">
    <div class="teacher-forms__one-step" :class="{'teacher-forms_disabled': stepModal.two}" v-if="stepModal.one">
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
   
    <div class="teacher-forms__two-step" :class="{'teacher-forms_disabled': stepModal.three}"  v-if="stepModal.two">
      <div class="teacher-forms__photo">
        <div class="teacher-forms__photo-img" v-for="item in ava">
          <img v-if="item.url !== null" :src="item.url" alt="" height="54" width="54">
          <img v-else src="@/assets/img/registration/Avatar.svg" alt="" height="54" width="54">
        </div>
        <div class="teacher-forms__photo-text">
          <input id="img" @change="onFileSelectedAva($event)"   ref="fileInput" type="file" accept="image/* " >
          <label for="img">Загрузить фотографию</label>
        </div>
      </div>
      
      <div class="teacher-forms__input" style="margin-top: 20px;">
        <p class="teacher-forms__input-text">Паспорт</p>
        <input :class="{'error': v2$?.pass?.$error}" type="text" v-model="twoStepData.pass">
        <span v-if="v2$?.pass?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v2$?.pass?.$error"/>
      </div>

      <div class="teacher-forms__input" style="margin-top: 15px;">
        <p class="teacher-forms__input-text">Страна</p>
        <input :class="{'error': v2$?.country?.$error}" type="text" v-model="twoStepData.country">
        <span v-if="v2$?.country?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v2$?.country?.$error"/>
      </div>

      <div class="teacher-forms__input" style="margin-top: 18px;">
        <p class="teacher-forms__input-text">Город</p>
        <input :class="{'error': v2$?.city?.$error}" type="text" v-model="twoStepData.city">
        <span v-if="v2$?.city?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v2$?.city?.$error"/>
      </div>

      <div class="teacher-forms__input" style="margin-top: 15px;">
        <p class="teacher-forms__input-text">Адрес</p>
        <input :class="{'error': v2$?.adress?.$error}" type="text" v-model="twoStepData.adress">
        <span v-if="v2$?.adress?.$error">Заполните поле</span>
        <IconError class="error-icons" v-if="v1$?.adress?.$error"/>
      </div>

      <div class="teacher-forms__btn">
        <TheButton
        :width="130"
        :padding="9"
        :lineHeight="21"
        style="margin-top: 29px;"
        @click="nextStepThree"
        >Далее</TheButton>
      </div>

    </div>
     

      <div class="teacher-forms__three-step" v-if="stepModal.three">
        
        <div class="block" :class="{'block_open': isOpenBlock}" >
          <div class="teacher-forms__input" style="margin-top: 5px;">
            <p class="teacher-forms__input-text">Образование</p>
            <input :class="{'error': v3$?.educationOne?.$error}" type="text" v-model="lastStepData.educationOne">
            <IconError class="error-icons" v-if="v3$?.educationOne?.$error"/>
          </div>

          <div class="teacher-forms__input" style="margin-top: 5px;">
            <input type="text" v-model="lastStepData.educationTwo">
          </div>

        </div>

        <div class="create" @click="isOpenBlock = true"  v-if="!isOpenBlock">
          <IconCreate/>
          <p>Добавить поле</p>
        </div>

        <div class="block-two" :class="{'block-two_open': isOpenBlockTwo}" >
          <div class="teacher-forms__input" style="margin-top: 15px;">
            <p class="teacher-forms__input-text">Опыт работы</p>
            <input :class="{'error': v3$?.experience?.$error}" type="text" v-model="lastStepData.experience">
            <IconError class="error-icons" v-if="v3$?.experience?.$error"/>
          </div>

          <div class="teacher-forms__input" style="margin-top: 5px;">
            <input type="text" v-model="lastStepData.experienceTwo">
          </div>

        </div>

        <div class="create" @click="isOpenBlockTwo = true"  v-if="!isOpenBlockTwo">
          <IconCreate/>
          <p>Добавить поле</p>
        </div>

        <div class="document">
          <IconDocument/>
          <input type="file"  ref="fileInput" name="" id="document" @change="onFileSelected">
          <label for="document">Загрузить диплом</label>
        </div>

        <div class="item" style="height: 39px; margin-top: 10px;">
          <div class="document__element" v-for="item in myPDFs">
            <IconDocument/>
            <p>{{ item.name }}</p>
          </div>
        </div>

        <div class="teacher-forms__accept" @click="ACCEPTED_FORM = !ACCEPTED_FORM">
          <div class="student-form__accept-icon">
            <IconCheckBoxOne v-if="!ACCEPTED_FORM"/>
            <IconCheckBoxTwo v-else/>
          </div>
          
          <p>Я принимаю условия пользовательского соглашения и <span> правила обработки персональных данных</span></p>
        </div>


      <div class="teacher-forms__btn">
        <TheButton
        :padding="9"
        :lineHeight="21"
        style="margin-top: 29px; width: 100%;"
        @click="createAccount"
        :isDisabled="!ACCEPTED_FORM"
        >Создать аккаунт</TheButton>
      </div>

    </div>
   
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'
import { useRouter } from 'vue-router';
import TheLoader from '../UI/Loader/TheLoader.vue'
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'

import IconError from '@/assets/icons/registration/ErrorIcon.vue'
import IconCreate from '@/assets/icons/registration/CreateIcon.vue'
import IconDocument from '@/assets/icons/registration/NewDocument.vue'

import IconCheckBoxOne from '@/assets/icons/registration/CheckboxOne.vue'
import IconCheckBoxTwo from '@/assets/icons/registration/CheckboxTwo.vue'

import TheButton from '@/components/UI/Buttons/Button.vue'

// mixins
import FirebaseMethods from '../../mixins/FirebaseMethods'
const router = useRouter();

const isProssesing = ref(false);
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
  const results = await v1$.value.$validate()
  if(results) stepModal.value.two = true;
}

const  ava = ref([
  {
    obj: null,
    name: 'ava-' + Date.now(),
    url: null,
    }
]);

const twoStepData = ref({
  pass: '',
  country: '',
  city: '',
  adress: '',
})
const rulesTwo = computed(() => {
  return {
    pass: { required },
    country: { required },
    city: { required },
    adress: { required },
    
  };
});

const v2$ = useVuelidate(rulesTwo, twoStepData)

async function onFileSelectedAva(event) {
  const top = event.target.files;
  ava.value = [];
  for (let i = 0; i < top.length; i++) {
    const file = top[i];
    const img = new Image();
    await new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
      img.src = URL.createObjectURL(file);
    });
    ava.value.push({
      id: 0,
      obj: file,
      name: 'ava-' + Date.now(),
      url: URL.createObjectURL(file)
    });     
  }  

}

async function nextStepThree(){
  const results = await v2$.value.$validate();
  if(results) stepModal.value.three = true;
}

const isOpenBlock = ref(false)
const isOpenBlockTwo = ref(false)


const myPDFs = ref([]);
async function onFileSelected(event) {
  myPDFs.value = [];
  const files = event.target.files;
  const fileArray = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type === 'application/pdf') {
      fileArray.push({
        id: 0,
        obj: file,
        name: file.name,
        url: URL.createObjectURL(file)
      });
      } else {
          console.warn(`Unsupported file type: ${file.type}`);
        }
  }
  myPDFs.value.push(...fileArray);
}

const ACCEPTED_FORM = ref(false);

const lastStepData = ref({
  educationOne: '',
  educationTwo: '',
  experience: '',
  experienceTwo: '',
})
const rulesLat = computed(() => {
  return {
    educationOne: { required },
    experience: { required },
  };
});

const v3$ = useVuelidate(rulesLat, lastStepData)


async function register(){
  const userInfo = 'teacher-' + Date.now();
  const avaInfo = `users/teachers/${userInfo}/ava/`;
  const docInfo = `users/teachers/${userInfo}/doc/`;
  if(ava.value[0].obj !== null){
    await FirebaseMethods.sendDocumentStorage(ava.value, avaInfo);
  }
  
  await FirebaseMethods.sendDocumentStorage(myPDFs.value, docInfo);
    const objPrivateUser = {
      login: oneStepData.value.login,
      password: oneStepData.value.password,
      email: oneStepData.value.email,
      phone: oneStepData.value.phone,
      pass: twoStepData.value.pass,
      ava: ava.value,
    }
    await FirebaseMethods.sendDocumentDataBase('privateTeachers', userInfo, objPrivateUser);
    const allInfo = {
      id: userInfo,
      login: oneStepData.value.login,
      password: oneStepData.value.password,
      email: oneStepData.value.email,
      phone: oneStepData.value.phone,
      pass: twoStepData.value.pass,
      country: twoStepData.value.country,
      ava: ava.value,
      name: '',
      language: 0,
      timed: 0,
      about: '',
      city: twoStepData.value.city,
      adress: twoStepData.value.adress,
      education: {
        educationOne: lastStepData.value.educationOne,
        educationTwo: lastStepData.value.educationTwo,
      },
      experience: {
        experienceOne: lastStepData.value.experience,
        experienceTwo: lastStepData.value.experienceTwo,
      },
      document: myPDFs.value,
      type:{
        student: false,
        teachers: true,
        company: false,
      },
      timedZone: '',
      yearStudent: [0, 1],
      langTeacher: [0],
      langArr: [0],
      itemTeacher: [0],
      lessonsPrice: {
        one: 0,
        five: 0,
        teen: 0,
        theeteen: 0,
        time: 0,
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
    }
    
    await FirebaseMethods.sendDocumentDataBase('allUser', userInfo, allInfo);
   
    await FirebaseMethods.registerUser(oneStepData.value.email, oneStepData.value.password)
}

async function createAccount(){
    const results = await v3$.value.$validate();
    console.log(results)
    if(results){
      isProssesing.value = true;
      await register();
      router.push('/')
    }
     
}
</script>


<style lang="scss">
.teacher-forms{
  display: flex;
  align-items: flex-start;
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

  &__one-step,
  &__two-step,
  &__three-step{
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

  &_disabled{
    pointer-events: none;
  }

  &__photo{
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 14px;
    height: 54px;
    &-img{
     width: 54px;
     height: 54px;
     border-radius: 280px/100px;
     img{
      border-radius: 100%;
      display: block;
      width: 100%;
      height: 100%;
     }
    }

    label{
        color: #454B58;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 13px; /* 100% */
        text-decoration-line: underline;
        cursor: pointer;
    }

    input{
      opacity: 0;
      visibility: visible;
      width: 0px;
      height: 0px;
    }
  }
}

.create{
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  p{
    color: #F04973;

    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 14.3px */
  }
}


.block{
  max-height: 65px;
  overflow: hidden;
  transition: all .5s;
  cursor: pointer;

  &_open{
    max-height: 150px;
  }
}

.block-two{
  max-height: 75px;
  overflow: hidden;
  transition: all .5s;
  cursor: pointer;

  &_open{
    max-height: 150px;
  }
}

.document{
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 24px;
  cursor: pointer;
  input{
    opacity: 0;
    visibility: visible;
    width: 0px;
    height: 0px;
  }

  label{
    color: #454B58;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px; /* 100% */
    text-decoration-line: underline;
    cursor: pointer;
  }

  &__element{
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>