<template>
  <div class="registration">
    <div class="container">
      <div class="registration__link">
        <p style="color: #454B58;">Главная</p>
        <p style="margin-left: 10px;">/</p>
        <p style="margin-left: 8px;">Регистрация</p>
      </div>
      <div class="registration__title">
        <h2>Регистрация</h2>
      </div>
      <Transition name="fade">
        <div class="registration__type" v-if="DEFAULT_REGISTATION">
          <div class="registration__type-item" v-for="(item, idx) in REGISTRATION_TYPE" @click="selectType(item.type)">
            <component :is="item.icons"/>
            <p>{{ item.name }}</p>
            <div class="select"></div>
            <IconOneState class="one-state"/>
            <IconTwoState class="two-state"/>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
import IconStudent from '@/assets/icons/registration/Student.vue'
import IconTeacher from '@/assets/icons/registration/Teacher.vue'
import IconCompany from '@/assets/icons/registration/Company.vue'

import IconOneState from '@/assets/icons/registration/OneState.vue'
import IconTwoState from '@/assets/icons/registration/TwoState.vue'

import {ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const DEFAULT_REGISTATION = ref(true);

const REGISTRATION_TYPE = [
  {
    name: 'Ученик',
    icons: IconStudent,
    type: 'student',
  },
  {
    name: 'Преподаватель',
    icons: IconTeacher,
    type: 'teachers',
  },
  {
    name: 'Компания',
    icons: IconCompany,
    type: 'company',
  },
]

const SELECTED_VALUES = ref('')

function selectType(queryParam) {
  SELECTED_VALUES.value = queryParam;
  const currentQuery = { ...router.currentRoute.value.query };
  currentQuery.param = queryParam;
  router.push({ query: currentQuery });
  DEFAULT_REGISTATION.value = false
}

</script>

<style lang="scss">
.registration{
  margin-top: 25px;
  margin-bottom: 300px;
  &__link{
    display: flex;
    align-items: center;
    p{
      color: #7D7F83;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }

  }
  &__title{
    margin-top: 20px;
    h2{
      color: #292C32;
      text-align: center;
      font-family: EB Garamond;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  &__type{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 118px;
    margin-top: 23px;
    &-item{
      cursor: pointer;
      position: relative;
      transition: all .25s;
      width: 350px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      p{
        margin-top: 22px;
        transform: translateY(5px);
        color: #292C32;
        text-align: center;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 122.222% */
      }
      .one-state,
      .two-state{
        position: absolute;
        right: 21px;
        top: 21px;
      }
      .two-state{
        display: none;
      }
      &:hover{
        .one-state{
          display: none;
        }
        .two-state{
          display: block;
        }
        border: 1px solid #F04973;

      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>