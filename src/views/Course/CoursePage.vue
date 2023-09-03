<template>
  <div class="course-page">
    <div class="container"  v-if="idCourse !== null">
      <div class="course-page__links">
        <p>Главная</p>
        <span>/</span>
        <p>Список курсов</p>
        <span>/</span>
        <p>{{ coursesArray[idCourse].name }}</p>
      </div>
      <div class="course-page__title">
        <h3>{{  coursesArray[idCourse].name }}</h3>
      </div>
      <div class="course-page__wrapper">

        <div class="course-page__wrapper-teacher">
          <img :src="teacher[coursesArray[idCourse].teachers].photo" alt="">
          <h3>{{ teacher[coursesArray[idCourse].teachers].nameUser }}</h3>
          <p>Преподаватель</p>

          <div class="price">
            <div class="price-item">
              <p>Зарегистрировались</p>
              <h5>{{coursesArray[idCourse].student.length}} человек</h5>
            </div>
            <div class="price-item">
              <p>Максимум:</p>
              <h5>{{coursesArray[idCourse].maxStudent}} человек</h5>
            </div>
          </div>

          <div class="elem">
            <p>Стоимость курса</p>
            <h5>{{coursesArray[idCourse].pricelessons}} $</h5>
          </div>

          <TheButton
          style="margin-top: 11px; width: 100%; text-transform: uppercase;"
            :width="200"
            :padding="15"
            :lineHeight="21"
          >записаться на курс</TheButton>
        </div>

        <div class="course-page__wrapper-main">
          <div class="base">
            <div class="base__start">
              <h5>Старт: <span>{{ formatDate(coursesArray[idCourse].date)}}</span></h5>
              <p><TimeSmall/> {{ TeachersHelpers.timeStart[coursesArray[idCourse].time].title }}</p>
            </div>
            <div class="base__label">
              <p><Beginers/>{{ TeachersHelpers.typed[coursesArray[idCourse].lvl].title }}</p>
              <p><People/> {{ TeachersHelpers.years[coursesArray[idCourse].years].title }}</p>
            </div>
            <div class="base__text">
              <p>{{ coursesArray[idCourse].about }}</p> 
            </div>
            <div class="base__time">
              <div class="base__time-item">
                <TimeBig/>
                <p>Онлайн уроки:</p>
                <h5>{{ coursesArray[idCourse].timeLessons }} часов</h5>
              </div>
              <div class="base__time-item">
                <TimeBig/>
                <p>Самостоятельная работа:</p>
                <h5>{{ coursesArray[idCourse].timeOut}} часов</h5>
              </div>
              <div class="base__time-item">
                <TimeBig/>
                <p>Выполнение тестов:</p>
                <h5>{{ coursesArray[idCourse].timeTest}} часов</h5>
              </div>
            </div>
          </div>

          <div class="plan">
            <h3>План обучения:</h3>

            <div class="plan__head">
              <p>Вид деятельности</p>
              <p>Тема</p>
              <p>Кол-во часов</p>
              <p>Дата</p>
            </div>
            <div class="plan__item" v-for="item in coursesArray[idCourse].plan">
              <p>{{ TeachersHelpers.type[item.type].title }}</p>
              <p>{{ item.title }}</p>
              <p>{{item.time}} ч</p>
              <p>10.07.2021</p>
            </div>
          </div>

          <TheReviews style="margin-top: 30px;"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

// временно
import TheReviews from '@/components/Reusable/TheReviews.vue'

import TimeSmall from '@/assets/icons/course/TimeSmall.vue'
import TimeBig from '@/assets/icons/course/TimeBig.vue'
import Beginers from '@/assets/icons/course/Beginers.vue'
import People from '@/assets/icons/course/People.vue'
import TheButton from '@/components/UI/Buttons/Button.vue'

import TeachersHelpers from '../../mixins/TeachersHelpers.js'
import { ref, onBeforeMount } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute()

import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/firebase";

const teacher = ref([]);

async function getTeacher(){
  const usersData = await getDocs(collection(db, 'publishedTeachers'));
  usersData.forEach((doc) => {
    teacher.value.push({
      id: teacher.value.length,
      nameUser: doc.data().nameUser,
      photo: doc.data().photo,
    })
  })
}

const coursesArray = ref([]);
const idCourse = ref(null);

async function getCourse(){
  const course = await getDocs(collection(db, 'course'));
  course.forEach((doc)=>{
    coursesArray.value.push({
      idx: doc.data().idx,
      id: doc.data().id,
      about: doc.data().about,
      date: doc.data().date,
      lvl: doc.data().lvl,
      maxStudent: doc.data().maxStudent,
      name: doc.data().name,
      plan: doc.data().plan,
      pricelessons: doc.data().pricelessons,
      student: doc.data().student,
      teachers: doc.data().teachers,
      time: doc.data().time,
      timeLessons: doc.data().timeLessons,
      timeOut: doc.data().timeOut,
      timeTest: doc.data().timeTest,
      years: doc.data().years,
    })
  })
}

onBeforeMount(() => {
  getTeacher();
  getCourse().then(()=>{
    coursesArray.value.forEach((item)=>{
      if(item.id == route.params.id){
        idCourse.value = item.idx;
      }
    })
  })

})

function formatDate(inputDate) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('ru-RU', options).replace(/ г\.$/, '');
}



</script>

<style lang="scss" scoped>
.course-page{
  flex: 1 1 auto;

  &__links{
    display: flex;
    align-items: center;
    margin-top: 93px;
    padding-left: 1px;

    p,
    span{
      color: #454B58;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }
    p{
      margin-right: 9px;
    }
    span{
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
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 24px;
    margin-bottom: 40px;

    &-teacher{
      max-width: 330px;
      width: 100%;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      padding-top: 34px;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 44px;

      img{
        width: 155px;
        height: 155px;
        border-radius: 100%;
        margin-left: 63px;
      }

      h3{
        max-width: 227px;
        margin: 0 auto;
        color: #292C32;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 137.5% */
        margin-top: 25px;
        height: 43px;
      }
      p{
        color: #8B919E;
        text-align: center;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
        margin-top: 3px;
      }

      .price{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #DCE3E8;
        border-bottom: 1px solid #DCE3E8;
        margin-top: 30px;
        padding-top: 12px;
        padding-bottom: 19px;
        padding-right: 7px;
        p{
          margin: 0;
          text-align: start;
          color: #8B919E;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 23px; /* 164.286% */
        }
        h5{
          color: #292C32;
          font-family: Montserrat;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 160% */
        }
      }

      .elem{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 11px;

        p{
          font-size: 15px;
        }

        h5{
          color: #292C32;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 24px */
        }
      }

    }

    &-main{
      max-width: 1000px;
      width: 100%;
      .base{
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
        padding-top: 41px;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 40px;

        &__start{
          display: flex;
          align-items: center;

          h5{
            color: #292C32;
            font-family: Montserrat;
            margin-right: 33px;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;

            span{
              color: #8B919E;
              font-family: Montserrat;
              font-size: 13px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              margin-left: 5px;
            }
          }

          p{
            display: flex;
            align-items: center;
            color: #8B919E;
            font-family: Montserrat;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            svg{
              margin-right: 5px;
            }
          }
        }

        &__label{
          display: flex;
          align-items: center;
          margin-top: 18px;

          p{
            display: flex;
            align-items: center;
            svg{
              margin-right: 5px;
            }
            color: #292C32;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 18px */
            padding: 5px 11px;
            border-radius: 20px;
            margin-right: 17px;
          }

          p:nth-child(1){
            background: #E1DAFF;
          }
          p:nth-child(2){
            background: #D0EEFB;
          }
        }

        &__text{
          margin-top: 14px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 182.85%; /* 25.599px */
          }
        }

        &__time{
          display: flex;
          align-items: center;
          margin-top: 36px;

          &-item{
            p{
              color: #8B919E;
              font-family: Montserrat;
              font-size: 15px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%; /* 22.5px */
              margin-top: 3px;
            }

            h5{
              color: #292C32;
              font-family: Montserrat;
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 27px */
              margin-top: 2px;
            }
          }

          &-item:nth-child(2){
            margin-left: 150px;
            margin-right: 98px;
          }
        }
      }

      .plan{
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
        padding: 34px 50px;
        margin-top: 33px;


        h3{
          color: #292C32;
          font-family: Montserrat;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 22px; /* 110% */
        }

        &__head{
          display: flex;
          align-items: center;
          padding: 15px 0;
          background: #FDE4EA;
          margin-top: 20px;
          p{
            color: #292C32;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 22.5px */
            text-align: center;
          }

          p:nth-child(1){
            width: 188px;
          }
          p:nth-child(2){
            text-align: start;
            width: 474px;
            padding-left: 28px;
          }
          p:nth-child(3){
            text-align: start;
            width: 151px;
          }
        }

        &__item{
          display: flex;
          align-items: center;
          border: 1px solid #EEE;
          background: #FFF;

          p{
            color: #292C32;
            border: 1px solid #EEE;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 45px; /* 300% */
            border-bottom: 0;
            border-top: 0;
          }

          p:nth-child(1){
            padding-left: 19px;
            width: 194px;
          }
          p:nth-child(2){
            padding-left: 22px;
            width: 459px;
          }
          p:nth-child(3){
            text-align: center;
            width: 120px;
          }
          p:nth-child(4){
            text-align: center;
            width: 128px;
          }
        }
      }
    }
  }
}
</style>