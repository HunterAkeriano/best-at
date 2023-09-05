<template>
  <div class="lessons">
    <div class="container" v-if="lessons.idLess !== null">
      <div class="lessons__links">
        <p>Главная</p>
        <span>/</span>
        <p>Групповой урок</p>
      </div>
      <div class="lessons__title">
        <h3>Групповой урок</h3>
      </div>
      <div class="lessons__wrapper">
        <div class="lessons__wrapper-elem">
          <div class="item">
            <div class="item__time">
              <p>{{ formatDate(lessons.lessons[lessons.idLess].dateLessons) }} </p>
              <p><Time/>{{ TeacherHelper.timeStart[lessons.lessons[lessons.idLess].lessonsStart].title }}</p>
            </div>
            <div class="item__title">
              <h5>{{ lessons.lessons[lessons.idLess].name }}</h5>
            </div>
            <div class="item__info">
              <p><TimeUser/> {{ TeacherHelper.timed[lessons.lessons[lessons.idLess].lessonsTime].title }}</p>
              <p><IdUser/> {{ TeacherHelper.typed[lessons.lessons[lessons.idLess].lvlStudent].title }}</p>
              <p><User/> {{ TeacherHelper.years[lessons.lessons[lessons.idLess].yearsStudent].title }}</p>
            </div>
            <div class="item__text">
              <p>{{ lessons.lessons[lessons.idLess].about }}</p>
            </div>
            <div class="item__reg">
              <div class="item__reg-el">
                <p>Зарегистрировались:</p>
                <h5>{{ lessons.lessons[lessons.idLess].users.length }} человек</h5>
              </div>
              <div class="item__reg-el">
                <p>Максимум::</p>
                <h5>{{ lessons.lessons[lessons.idLess].maxStudent }}</h5>
              </div>
             
            </div>
            <div class="item__border"></div>
            <div class="item__pament">
              <p>Стоимость урока: <span>{{ lessons.lessons[lessons.idLess].priceLessons}} $ </span></p>
            </div>
          </div>
        </div>
        <div class="lessons__wrapper-img">
          <img src="@/assets/img/lessons/photo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Time from '@/assets/icons/lessons/Time.vue'
import TimeUser from '@/assets/icons/lessons/TimeUser.vue'
import IdUser from '@/assets/icons/lessons/IdUser.vue'
import User from '@/assets/icons/lessons/User.vue'

import TeacherHelper from '../../mixins/TeachersHelpers.js'

import { ref, watch, onBeforeMount } from 'vue'
import {stateLessons} from '@/stores/StateLessons.js'

import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

import { useRoute } from 'vue-router';

const route = useRoute();

async function getLessons(){
  const stud = await getDocs(collection(db, 'lessons'));
  stud.forEach((doc)=>{
    lessons.lessons.push({
      id: doc.data().id,
      idx: lessons.lessons.length,
      name: doc.data().name,
      teachers:  doc.data().teachers,
      dateLessons: doc.data().dateLessons,
      datePeriod: doc.data().datePeriod,
      lessonsStart:  doc.data().lessonsStart,
      lessonsTime: doc.data().lessonsTime,
      priceLessons: doc.data().priceLessons,
      minStudent: doc.data().minStudent,
      lvlStudent: doc.data().lvlStudent,
      yearsStudent: doc.data().yearsStudent,
      about: doc.data().about,
      maxStudent: doc.data().maxStudent,
      users: doc.data().users,
    })
  })
}
const lessons = stateLessons();
onBeforeMount(() => {
  lessons.lessons = [];
  lessons.idLess = null;
  getLessons().then(()=>{
    lessons.lessons.forEach((item)=>{
      if(item.id == route.params.id){
        lessons.idLess = item.idx;
      }
    })
  })

})

function formatDate(inputDate) {
  // Создаем объект Date из входной строки
  const date = new Date(inputDate);

  // Определяем названия месяцев
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = `${day} ${months[month]} ${year}`;
  return formattedDate;
}


</script>

<style lang="scss" scoped>
.lessons{
  flex: 1 1 auto;

  &__links{
    display: flex;
    align-items: center;
    margin-top: 93px;

    p,
    span{
      color: #7D7F83;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }

    span{
      margin: 0 9px;
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
    justify-content: space-between;
    margin-top: 25px;

    &-elem{
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      padding-top: 30px;
      padding-left: 44px;
      padding-right: 44px;
      margin-bottom: 20px;
      height: 470px;
      width: 880px;
      .item{
        &__time{
          display: flex;
          align-items: center;

          p{
            color: #8B919E;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 182.85%; /* 25.599px */
            margin-right: 30px;
            display: flex;
            align-items: center;
            svg{
              margin-right: 5px;
            }
          }
        }
        &__title{
          margin-top: 11px;
          h5{
            color: #292C32;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; /* 110% */
          }
        }
        &__info{
          display: flex;
          align-items: center;
          margin-top: 25px;

          p{
            padding: 5px 12px;
            display: flex;
            align-items: center;
            color: #292C32;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 18px */
            border-radius: 20px;
            svg{
              margin-right: 6px;
            }
          }

          p:nth-child(1){
            background: #FFDEE4;
          }
          p:nth-child(2){
            background: #E1DAFF;
            margin: 0 13px;
          }
          p:nth-child(3){
            background: #D0EEFB;
          }

        }

        &__text{
          max-width: 710px;
          margin-top: 15px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px; /* 178.571% */
          }
        }

        &__reg{
          display: flex;
          margin-top: 28px;
          p{
            color: #8B919E;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 22.5px */
          }

          h5{
            color: #292C32;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 27px */
          }

          &-el{
            margin-right: 99px;
          }
        }
        &__border{
          margin-top: 26px;
          background: #DCE3E8;
          height: 1px;
        }
        &__pament{
          margin-top: 24px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 27px */
            span{
              color: #292C32;
              font-family: Montserrat;
              font-size: 25px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%; /* 37.5px */
              margin-left: 10px;
            }
          }
        }
      }
    }

    &-img{
      width: 500px;
      height: 470px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>