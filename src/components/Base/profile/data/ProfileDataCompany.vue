<template>
  <div class="company">
    <div class="company__title">
      <h4>Данные компании</h4>
    </div>

    <div class="company__wrapper">
      <div class="company__wrapper-left">
        <div class="company__wrapper-input" style="margin-top: 24px;">
          <p>ОГРН</p>
          <input  v-model="usersStore.user[usersStore.userId].info.ogrn" type="text"  style="margin-top: 10px;">
        </div>

        <div class="company__wrapper-input" style="margin-top: 13px;">
          <p>КПП</p>
          <input v-model="usersStore.user[usersStore.userId].info.kpp" type="text"  style="margin-top: 10px;">
        </div>

        <div class="company__wrapper-input" style="margin-top: 15px;">
          <p>Юридический адрес</p>
          <input v-model="usersStore.user[usersStore.userId].urAdress" type="text"  style="margin-top: 10px;">
        </div>

        <div class="company__wrapper-input" style="margin-top: 15px;">
          <p>ОКПО</p>
          <input v-model="usersStore.user[usersStore.userId].info.okpo" type="text"  style="margin-top: 10px;">
        </div>
      </div>

      <div class="company__wrapper-right">
        <div class="company__wrapper-input" style="margin-top: 24px;">
          <p>Расчетный счет организации</p>
          <input v-model="usersStore.user[usersStore.userId].info.price" type="text"  style="margin-top: 10px;">
        </div>

        <div class="company__wrapper-input" style="margin-top: 14px;">
          <p>Корреспондентский счет банка</p>
          <input v-model="usersStore.user[usersStore.userId].info.bank" type="text"  style="margin-top: 10px;">
        </div>
        <div class="company__wrapper-input" style="margin-top: 14px;">
          <p>БИК банка</p>
          <input v-model="usersStore.user[usersStore.userId].info.bik" type="text"  style="margin-top: 10px;">
        </div>
      </div>
    </div>

    <TheButton
      :width="239"
      :padding="15"
      style="margin-top: 24px;"
      @click="editUser()"
      >Сохранить изменения</TheButton>
  </div>
</template>

<script setup>
import TheButton from '@/components/UI/Buttons/Button.vue'
import {stateUser} from "@/stores/StateUser";
const usersStore = stateUser();


import {  doc, updateDoc  } from "firebase/firestore";
import { db } from "@/firebase/firebase";

async function editUser(){
  const userData = {
    urAdress: usersStore.user[usersStore.userId].urAdress,
    info: usersStore.user[usersStore.userId].info,
  };
  await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
}

</script>

<style lang="scss">
.company{
  &__title{
    margin-left: 3px;
    margin-top: 1px;
    h4{
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

    &-right{
      margin-left: 40px;
    }
  }
}

</style>