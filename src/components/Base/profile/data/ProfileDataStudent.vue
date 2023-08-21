<template>
  <div class="data">
    <div class="data__title">
      <h3>Личные данные</h3>
    </div>

    <div class="data__wrapper">
      <div class="data__wrapper-all">
        <div class="data__wrapper-input">
          <p>Страна</p>
          <input type="text" 
          v-model="usersStore.user[usersStore.userId].country"
          >
        </div>

        <div class="data__wrapper-select">
          <p>Язык интерфейса</p>
          <TheSelect
          style="margin-top: 6px;"
          :items="TeachersHelpers.langeuages"
          :idx="usersStore.user[usersStore.userId].language"
          @setActiveSelect="langeuages"
          />   
        </div>

        <div class="data__wrapper-select" style="margin-top: 14px;">
          <p>Местное время</p>
          <TheSelect
          style="margin-top: 6px;"
          :items="TeachersHelpers.gmt"
          :idx="usersStore.user[usersStore.userId].time"
          @setActiveSelect="times"
          />   
        </div>
      </div>
      <div class="data__wrapper-info">
        <p>О себе</p>
        <textarea id="" cols="30" rows="10" v-model="usersStore.user[usersStore.userId].about"></textarea>
      </div>
    </div>

    <TheButton
      :width="239"
      :padding="15"
      style="margin-top: 18px;"
      @click="editUser()"
      >Сохранить изменения</TheButton>
  </div>
</template>

<script setup>
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TheButton from '@/components/UI/Buttons/Button.vue'

import TeachersHelpers from '../../../../mixins/TeachersHelpers'

import {stateUser} from "@/stores/StateUser";
const usersStore = stateUser();


import {  doc, updateDoc  } from "firebase/firestore";
import { db,  auth } from "@/firebase/firebase";
import { updatePassword, updateEmail, signInWithEmailAndPassword} from "firebase/auth";

function langeuages(idx){
  usersStore.user[usersStore.userId].language = idx;
}
function times(idx){
  usersStore.user[usersStore.userId].time = idx;
  console.log(usersStore.user[usersStore.userId].time)
}


async function editUser(){
  const userData = {
    country: usersStore.user[usersStore.userId].country,
    language: usersStore.user[usersStore.userId].language,
    timed: usersStore.user[usersStore.userId].time,
    about: usersStore.user[usersStore.userId].about,
  };
  await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
}



</script>

<style lang="scss">
.data{
  margin-left: 2px;
  margin-top: 1px;

  &__title{
    h3{
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
    }
  }

  &__wrapper{
    margin-top: 24px;
    margin-left: -2px;
    display: flex;
    &-input{
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }

      input{
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        width: 330px;
        margin-top: 3px;
        padding: 5px 10px;
        font-size: 13px;
       }
    }

    &-select{
      margin-top: 20px;
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }
    }

    &-info{
      margin-left: 40px;
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }
      textarea{
        margin-top: 5px;
        resize: none;
        width: 330px;
        height: 189px;
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        padding: 20px;
      }
    }
  }
}
</style>