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
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {stateUser} from "@/stores/StateUser";
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
}

</style>