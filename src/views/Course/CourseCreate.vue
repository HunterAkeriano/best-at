<template>
  <div class="course-create">
    <div class="container">
      <div class="course-create__links">
        <p>Главная</p>
        <span>/</span>
        <p>Создание курса</p>
      </div>
      <div class="course-create__title">
        <h4>Создание курса</h4>
      </div>

      <div class="course-create__wrapper"
      style="margin-top: 25px;">
        <BaseInfo :data="data"/>
        <Teacher @activeTeacher="teachers"/>
      </div>
      <PlanCourse/>

      <div class="course-create__btn" style="display: flex; padding-bottom: 50px;">
        <TheButton
        :width="200"
        :padding="15"
        :lineHeight="21"
        @click="createCourse"
      >Создать урок</TheButton>

      <TheButton
      style="margin-left: 20px;"
        :width="130"
        :padding="15"
        :lineHeight="21"
        :isCourses="true"
        @click="cancel"
      >Отменить</TheButton>
      </div>

    </div>
  </div>
</template>
 
<script setup>
import {ref, onBeforeMount} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();


import TheButton from '@/components/UI/Buttons/Button.vue'

import BaseInfo from '@/components/Base/course/BaseInfo.vue';
import Teacher from '@/components/Base/course/TeacherCreate.vue';
import PlanCourse from '@/components/Base/course/PlanCourse.vue';

import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();

import { collection, getDocs, doc, setDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

async function getTeacher(){
  const usersData = await getDocs(collection(db, 'publishedTeachers'));
  usersData.forEach((doc) => {
    course.teacher.push({
      id: course.teacher.length,
      nameUser: doc.data().nameUser,
      photo: doc.data().photo,
    })
  })
}


const coursesArray = ref([]);
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
  course.plan = [
      {
        type: 0,
        title: '',
        time: '',
        date: '',
      },
    ],
  getCourse();
})

function teachers(idx){
  data.value.teachers = idx;
}

const data = ref({
  name: '',
  date: '',
  time: 0,
  timeLessons: '',
  timeOut: '',
  timeTest: '',
  pricelessons: '',
  lvl: 0,
  years: 0,
  maxStudent: '',
  about: '',
  teachers: 0,
})

function cancel(){
  router.push('/')
}



async function createCourse(){
  const randomNumber = 'course-' + Date.now();
  const dataInfo = {
    id: randomNumber,
    idx: coursesArray.value.length,
    name: data.value.name,
    date: data.value.date,
    time: data.value.time,
    timeLessons: data.value.timeLessons,
    timeOut: data.value.timeOut,
    timeTest: data.value.timeTest,
    pricelessons: data.value.pricelessons,
    lvl: data.value.lvl,
    years: data.value.years,
    maxStudent: data.value.maxStudent,
    about: data.value.about,
    teachers: data.value.teachers,
    student: [],
    plan: course.plan,
  }

  await setDoc(doc(db, "course",  randomNumber), dataInfo);
  router.push('/')
}

</script>

<style lang="scss">
.course-create{
  flex: 1 1 auto;

  &__links{
    margin-top: 93px;
    display: flex;
    align-items: center;
    color: #454B58;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */

    p,
    span{
      font-family: inherit;
      font-size: inherit;
    }

    p:nth-child(1){
      margin-right: 12px;
    }

    span{
      margin-right: 6px;
    }
  }

  &__title{
    margin-top: 20px;
    h4{
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
  }
}
</style>