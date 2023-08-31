<template>
  <div class="profile">
    <div class="container">
      <div class="profile__links">
        <p><router-link :to="{ path: `/` }">Главная</router-link></p>
        <span>/</span>
        <p style="cursor: pointer;">Личный кабинет</p>
      </div>

      <div class="profile__title">
        <h3>Личный кабинет</h3>
      </div>

      <div class="profile__wrapper">
        <div class="profile__wrapper-left">
          <div class="profile__wrapper-user" v-if="usersStore.userId !== null">
            <div class="user">
              <div class="user__photo"
              v-for="item in usersStore.user[usersStore.userId].ava" 
              style="cursor: pointer;">
                <img 
                v-if="item.url !== null"
                style="border-radius: 50px;"
                :src="item.url"   
                alt="" height="65" width="65">
                <img  v-if="item.url == null "  src="@/assets/img/registration/Avatar.svg"   alt="" height="65" width="65">
                

                <div class="user__photo-input">
                  <input id="img" @change="onFileSelectedAva($event)" ref="fileInput" type="file" accept="image/* " >
                  <label for="img">Загрузить фотографию</label>
                </div>
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

            <div class="links">
              <div class="links__items"
              :class="{'active': SELECTED_ROUTER == ''}"
              @click="selectRouter('')">
                <UserIcon/>
                <p>Аккаунт</p>
              </div>
              <div class="links__items" 
              :class="{'active': SELECTED_ROUTER == 'data'}"
              @click="selectRouter('data')">
                <DataIcon/>
                <p>Личные данные</p>
              </div>
              <div class="links__items"
              :class="{'active': SELECTED_ROUTER == 'lessons'}"
              @click="selectRouter('lessons')"
              >
                <LessonsIcon/>
                <p>Мои уроки</p>
              </div>
              <div class="links__items" v-if="usersStore.user[usersStore.userId].type.student">
                <TeacherIcon/>
                <p>Мои преподаватели</p>
              </div>
              <div class="links__items"
              :class="{'active': SELECTED_ROUTER == 'payments'}"
              @click="selectRouter('payments')">
                <PaymentIcon/>
                <p>Платежная информация</p>
              </div>
              <div class="links__items" 
              @click="selectRouter('poslugi')" 
              :class="{'active': SELECTED_ROUTER == 'poslugi'}"
              v-if="usersStore.user[usersStore.userId].type.teachers || usersStore.user[usersStore.userId].type.company">
                <EduIcon/>
                <p>Услуги</p>
              </div>
              <div class="links__items">
                <StatsIcon/>
                <p>Статистика</p>
              </div>
              <div class="links__items" v-if="usersStore.user[usersStore.userId].type.company">
                <CommandIcon/>
                <p>Команда компании</p>
              </div>
              <div class="links__items">
                <ChatsIcon/>
                <p>Чаты</p>
              </div>
            </div>
          </div>
        </div>
        <div class="profile__wrapper-info" v-if="usersStore.userId !== null">
          <ProfileMain v-if="SELECTED_ROUTER == ''"/>
          <ProfileDataStudent v-if="SELECTED_ROUTER == 'data' && usersStore.user[usersStore.userId].type.student"/>
          <ProfileDataTeacher v-if="SELECTED_ROUTER == 'data' && usersStore.user[usersStore.userId].type.teachers"/>
          <ProfileDataCompany v-if="SELECTED_ROUTER == 'data' && usersStore.user[usersStore.userId].type.company"/>
          <ProfilePayment v-if="SELECTED_ROUTER == 'payments'"/>
          <ProfilePoslugi v-if="SELECTED_ROUTER == 'poslugi'  && usersStore.user[usersStore.userId].type.teachers"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onBeforeMount, watch} from 'vue'
import {stateUser} from "@/stores/StateUser";
import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

const usersStore = stateUser();

import ProfileMain from '@/components/Base/profile/ProfileMain.vue'
import ProfileDataStudent from '@/components/Base/profile/data/ProfileDataStudent.vue'
import ProfileDataTeacher from '@/components/Base/profile/data/ProfileDataTeacher.vue'
import ProfileDataCompany from '@/components/Base/profile/data/ProfileDataCompany.vue'
import ProfilePayment from '@/components/Base/profile/ProfilePayment.vue'
import ProfilePoslugi from '@/components/Base/profile/ProfilePoslugi.vue'

import UserIcon from '@/assets/icons/profile/UserIcon.vue'
import DataIcon from '@/assets/icons/profile/DataIcon.vue'
import LessonsIcon from '@/assets/icons/profile/LessonsIcon.vue'
import TeacherIcon from '@/assets/icons/profile/TeacherIcon.vue'
import PaymentIcon from '@/assets/icons/profile/PaymentIcon.vue'
import StatsIcon from '@/assets/icons/profile/StatsIcon.vue'
import ChatsIcon from '@/assets/icons/profile/ChatIcon.vue'
import EduIcon from '@/assets/icons/profile/EduIcon.vue'
import CommandIcon from '@/assets/icons/profile/CommandIcon.vue'

const userEmail = ref();

async function getUser(){
  const usersData = await getDocs(collection(db, 'allUser'));
  usersData.forEach((doc) => {
    usersStore.user.push({
      id: usersStore.user.length,
      docName: doc.id,
      name: doc.data().name,
      newName: doc.data().name,
      email: doc.data().email,
      login: doc.data().login,
      password: doc.data().password,
      phone: doc.data().phone,
      type: doc.data().type,
      emailNew: doc.data().email,
      passwordNew: doc.data().password,
      type: doc.data().type,
      country: doc.data().country,
      language: doc.data().language,
      time: doc.data().timed,
      about: doc.data().about,
      timedZone: doc.data().timedZone,
      langArr: doc.data().langArr,
      yearStudent: doc.data().yearStudent,
      langTeacher: doc.data().langTeacher,
      itemTeacher: doc.data().itemTeacher,
      lessonsPrice: doc.data().lessonsPrice,
      urAdress: doc.data().urAdress,
      info: doc.data().info,
      cards: doc.data().cards,
      ava: doc.data().ava,
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

  handleRouteUpdate(router.currentRoute.value)
})


// роутинг
import { useRouter } from 'vue-router';

const router = useRouter();

const SELECTED_ROUTER = ref('');

function selectRouter(queryParam) {
  if (queryParam === "") {
    SELECTED_ROUTER.value = '';
    router.push({ query: null }); 
  } else {
    SELECTED_ROUTER.value = queryParam;
    const currentQuery = { ...router.currentRoute.value.query };
    currentQuery.param = queryParam;
    router.push({ query: currentQuery });
  }
}

function handleRouteUpdate(to) {
  const queryParam = to.query.param
  if (queryParam) {
    SELECTED_ROUTER.value = queryParam
  } else {
    SELECTED_ROUTER.value = ''
  }
}

watch(() => router.currentRoute.value.query, (newQuery, oldQuery) => {
  const queryParam = newQuery.param;
  if (!queryParam) {
    SELECTED_ROUTER.value = '';
  }
});


// ava
import FirebaseMethods from '../../mixins/FirebaseMethods';

async function onFileSelectedAva(event) {
  const top = event.target.files;
  usersStore.user[usersStore.userId].ava = [];
  for (let i = 0; i < top.length; i++) {
    const file = top[i];
    const img = new Image();
    await new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
      img.src = URL.createObjectURL(file);
    });
    usersStore.user[usersStore.userId].ava.push({
      obj: file,
      name: 'ava-' + Date.now(),
      url: URL.createObjectURL(file)
    });     
  }
  const userInfo = 'ava-' + Date.now();
  const docInfo = `users/${userInfo}`;
  await FirebaseMethods.sendDocumentStorage(usersStore.user[usersStore.userId].ava, docInfo);
  const userData = {
    ava: usersStore.user[usersStore.userId].ava,
  };
  await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
}

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

        &__photo{
          position: relative;
          z-index: 5;
          &-input{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            label{
              display: block;
              overflow: hidden;
              opacity: 0;
              height: 0;
              visibility: visible;
              height: 65px;
              margin-top: -23px;
              cursor: pointer;
            }
            input{
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              height: 0;
            }
          }
        }
      }

      .links{
        margin-top: 10px;

        &__items{
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 11px;
          padding-bottom: 9px;
          cursor: pointer;
          border-top: 1px solid #DCE3E8;
          transition: all .25s;

          p{
            color: #454B58;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
          }

          &.active,
          &:hover{
            p{
              color: #F04973;
            }

            svg{
              path{
                fill: #F04973;
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