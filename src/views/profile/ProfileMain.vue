<template>
  <div class="profile">
    <div class="container">
      <div class="profile__links">
        <p>Главная</p>
        <span>/</span>
        <p>Личный кабинет</p>
      </div>

      <div class="profile__title">
        <h3>Личный кабинет</h3>
      </div>

      <div class="profile__wrapper">
        <div class="profile__wrapper-left">
          <div class="profile__wrapper-user" v-if="usersStore.userId !== null">
            <div class="user">
              <div class="user__photo" style="width: 65px; height: 65px; background: red;">
                
              </div>
              <div class="user__info">
                <div class="user__info-name">
                  <p>{{ usersStore.user[usersStore.userId].name }}</p>
                </div>
                <div class="user__info-type">
                  <p :class="{'active': usersStore.user[usersStore.userId].type.student}">Ученик</p>
                  <p :class="{'active': usersStore.user[usersStore.userId].type.teachers}">Учитель</p>
                  <p :class="{'active': usersStore.user[usersStore.userId].type.company}">Компания</p>
                  <p>Выйти</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="profile__wrapper-info">
          <ProfileMain/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onBeforeMount} from 'vue'
import {stateUser} from "@/stores/StateUser";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/firebase";

const usersStore = stateUser();

import ProfileMain from '@/components/Base/profile/ProfileMain.vue'

const userEmail = ref();

async function getUser(){
  const usersData = await getDocs(collection(db, 'allUser'));
  usersData.forEach((doc) => {
    usersStore.user.push({
      id: usersStore.user.length,
      name: doc.data().name,
      email: doc.data().email,
      login: doc.data().login,
      password: doc.data().password,
      phone: doc.data().phone,
      type: doc.data().type,

    })
  })
}

onBeforeMount(() => {
  userEmail.value = JSON.parse(localStorage.getItem('user'));
  getUser().then(()=>{
    usersStore.user.forEach((item)=>{
      if(item.email == userEmail.value.email){
        usersStore.userId = item.id;
      }
    })
  })
})

</script>

<style lang="scss">
.profile{
  margin-top: 93px;
  margin-bottom: 40px;
  font-family: Montserrat;
  flex: 1 1 auto;

  &__links{
    display: flex;
    align-items: center;
    color: #7D7F83;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */

    span{
      display: block;
      margin-left: 10px;
      margin-right: 8px;
    }
  }

  &__title{
    margin-top: 20px;

    h3{
      color: #292C32;
      font-family: EB Garamond;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  &__wrapper{
    display: flex;


    &-left{
      max-width: 240px;
      width: 100%;
    }

    &-user{
      .user{
        display: flex;
        gap: 16px;
        margin-top: 26px;

        &__info{
          max-width: 150px;

          &-name{
            min-height: 41px;

            p{
              color: #292C32;
              font-size: 15px;
              font-style: normal;
              font-weight: 700;
              line-height: 20px; 
            }
          }

          &-type{
            p{
              cursor: default;
              color: #8B919E;
              font-size: 13px;
              font-style: normal;
              font-weight: 600;
              line-height: 182.85%; /* 23.771px */
              text-decoration-line: underline;
              transition: all .25s;

              &.active{
                color: #F04973;
                text-decoration: none;
              }
            }
            p:nth-child(3){
              margin-top: -5px;
            }

            p:last-child{
              &:hover{
                color: #F04973;
                text-decoration: none;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    &-info{
      margin-left: 110px;
      margin-top: 25px;
    }
  }
}
</style>