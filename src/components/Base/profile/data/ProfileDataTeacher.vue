<template>
  <div class="profile-data">
    <div class="profile-data__title">
      <h3>Личные данные</h3>
    </div>

    <div class="profile-data__wrapper">
      <div class="profile-data__wrapper-left">
        <div class="profile-data__wrapper-input" style="margin-top: 20px;">
          <p>Страна</p>
          <input type="text" v-model="usersStore.user[usersStore.userId].country" style="margin-top: 10px;">
        </div>
        <div class="profile-data__wrapper-input" style="margin-top: 18px;">
          <p>Местное время</p>
          <input type="text" v-model="usersStore.user[usersStore.userId].timedZone" style="margin-top: 6px;">
        </div>

        <div class="profile-data__wrapper-select" style="margin-top: 18px;">
          <p>Языки общения</p>
          <div class="el" style="display: flex; flex-wrap: wrap; width: 100%;">
            <div class="el__select">
              <TheSelect
              style="margin-top: 6px; width: 305px;"
              v-for="(item, i) in usersStore.user[usersStore.userId].langArr"
              :items="TeachersHelpers.langeuages"
              @setActiveSelect="activeLanguage(i, $event)"
              :idx="item"/>
            </div>
            <IconAdd
            style="margin-top: 10px; margin-left: 3px; cursor: pointer;"
            @click="addLang"
            />  
          </div>
           
        </div>

        <div class="profile-data__wrapper-select" style="margin-top: 11px;">
          <p>Возраст учеников</p>
          <div class="el" style="display: flex; flex-wrap: wrap; width: 100%;">
            <div class="el__select">
              <TheSelect
              style="margin-top: 6px; width: 305px;"
              v-for="(item, i) in usersStore.user[usersStore.userId].yearStudent"
              :items="TeachersHelpers.years"
              @setActiveSelect="activeYearStudent(i, $event)"
              :idx="item"/>
            </div>
            <IconAdd
            style="margin-top: 10px; margin-left: 3px; cursor: pointer;"
            @click="addYearStudent"
            />  
          </div>
           
        </div>
      </div>

      <div class="profile-data__wrapper-right">
        <div class="profile-data__wrapper-textarea">
          <p>Обо мне</p>
          <textarea v-model="usersStore.user[usersStore.userId].about" cols="30" rows="10"></textarea>
        </div>

        <div class="profile-data__wrapper-select" style="margin-top: 5px;">
          <p>Языки обучения</p>
          <div class="el" style="display: flex; flex-wrap: wrap; width: 100%;">
            <div class="el__select">
              <TheSelect
              style="margin-top: 6px; width: 305px;"
              v-for="(item, i) in usersStore.user[usersStore.userId].langTeacher"
              :items="TeachersHelpers.langeuages"
              @setActiveSelect="activeLanguageTeachet(i, $event)"
              :idx="item"/>
            </div>
            <IconAdd
            style="margin-top: 10px; margin-left: 3px; cursor: pointer;"
            @click="addLangTeacher"
            />  
          </div>
           
        </div>

        <div class="profile-data__wrapper-select" style="margin-top: 13px;">
          <p>Предметы обучения</p>
          <div class="el" style="display: flex; flex-wrap: wrap; width: 100%;">
            <div class="el__select">
              <TheSelect
              style="margin-top: 6px; width: 305px;"
              v-for="(item, i) in usersStore.user[usersStore.userId].itemTeacher"
              :items="TeachersHelpers.langeuages"
              @setActiveSelect="activeLanguageItems(i, $event)"
              :idx="item"/>
            </div>
            <IconAdd
            style="margin-top: 10px; margin-left: 3px; cursor: pointer;"
            @click="addLangTeacherItmes"
            />  
          </div>
           
        </div>
      </div>
    </div>

    <div class="profile-data__subitle">
        <h4>Стоимость уроков</h4>
      </div>

    <div class="profile-data__price">

      <div class="profile-data__price-left">
        <div class="profile-data__price-input" style="margin-top: 10px;">
          <p>За 1 урок</p>
          <input  v-model="usersStore.user[usersStore.userId].lessonsPrice.one" type="number">
        </div>
        <div class="profile-data__price-input" style="margin-top: 22px;">
          <p>За 5 уроков</p>
          <input v-model="usersStore.user[usersStore.userId].lessonsPrice.five" type="number">
        </div>
        <div class="profile-data__price-input" style="margin-top: 21px;">
          <p>Длительность уроков</p>
            <TheSelect
              style="margin-top: 6px; width: 330px;"
              v-for="(item, i) in usersStore.user[usersStore.userId].yearStudent"
              :items="TeachersHelpers.timeLessons"
              @setActiveSelect="selectTimeLessons"
              :idx="usersStore.user[usersStore.userId].lessonsPrice.time"/>
        </div>
        

      </div>
      
      <div class="profile-data__price-right">
        <div class="profile-data__price-input" style="margin-top: 9px;">
          <p>За 10 уроков</p>
          <input  v-model="usersStore.user[usersStore.userId].lessonsPrice.teen" type="number">
        </div>
        <div class="profile-data__price-input" style="margin-top: 22px;">
          <p>За 20 уроков</p>
          <input v-model="usersStore.user[usersStore.userId].lessonsPrice.theeteen" type="number">
        </div>
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
import {ref} from 'vue'
import {stateUser} from "@/stores/StateUser";
import TheButton from '@/components/UI/Buttons/Button.vue'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TeachersHelpers from '../../../../mixins/TeachersHelpers'
import IconAdd from '@/assets/icons/profile/AddIcon.vue'


const usersStore = stateUser();


const activeLanguage = (i, idx) => {
  usersStore.user[usersStore.userId].langArr[i] = idx;
};

function addLang(){
  if(usersStore.user[usersStore.userId].langArr.length > 5) return;
  usersStore.user[usersStore.userId].langArr.push(0);
}

const activeYearStudent = (i, idx) => {
  usersStore.user[usersStore.userId].yearStudent[i] = idx;
};

function addYearStudent(){
  if(usersStore.user[usersStore.userId].yearStudent.length > 5) return;
  usersStore.user[usersStore.userId].yearStudent.push(0);
}

const activeLanguageTeachet = (i, idx) => {
  usersStore.user[usersStore.userId].langTeacher[i] = idx;
};

function addLangTeacher(){
  if(usersStore.user[usersStore.userId].langTeacher.length > 5) return;
  usersStore.user[usersStore.userId].langTeacher.push(0);
}

const activeLanguageItems = (i, idx) => {
  usersStore.user[usersStore.userId].itemTeacher[i] = idx;
};

function addLangTeacherItmes(){
  if(usersStore.user[usersStore.userId].itemTeacher.length > 5) return;
  usersStore.user[usersStore.userId].itemTeacher.push(0);
}

function selectTimeLessons(idx){
  usersStore.user[usersStore.userId].lessonsPrice.time = idx;
}


import {  doc, updateDoc  } from "firebase/firestore";
import { db } from "@/firebase/firebase";

async function editUser(){
  const userData = {
    country: usersStore.user[usersStore.userId].country,
    timedZone: usersStore.user[usersStore.userId].timedZone,
    langArr: usersStore.user[usersStore.userId].langArr,
    yearStudent: usersStore.user[usersStore.userId].yearStudent,
    langTeacher: usersStore.user[usersStore.userId].langTeacher,
    itemTeacher: usersStore.user[usersStore.userId].itemTeacher,
    about: usersStore.user[usersStore.userId].about,
    lessonsPrice:  usersStore.user[usersStore.userId].lessonsPrice,
  };
  await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
}

</script>

<style lang="scss">
.profile-data{
  &__title{
    margin-top: 2px;
    margin-left: 2px;
    h3{
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
    }
  }

  &__subitle{
    margin-top: 39px;

    h4{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px; /* 126.667% */
    }
  }

  &__wrapper{
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
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */

      }
    }

    &-textarea{
      margin-top: 20px;
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
        margin-bottom: 10px;
      }

      textarea{
        border-radius: 17px;
        background: #F2F5FA;
        border: 0;
        width: 330px;
        height: 112px;
        padding: 20px;
        resize: none;
      }
    }

    &-right{
      margin-left: 40px;
    }
  }

  &__price{
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

    &-right{
      margin-left: 41px;
    }
  }
}

</style>