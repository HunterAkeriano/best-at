<template>
  <div class="course-create">
    <div class="container">
      <div class="course-create__links">
        <p>Главная</p>
        <span>/</span>
        <p>Создание группового урока</p>
      </div>
      <div class="course-create__title">
        <h4>Создание группового урока</h4>
      </div>

      <div class="course-create__wrapper"
      style="margin-top: 25px;">
        <BaseInfo 
        :data="data" 
        :teached="teached"
        v-if="teached.length > 0"/>
        <Teacher 
        @activeTeacher="teachers"
        v-if="lessons.student.length > 0"
        />
      </div>
      <div class="course-create__btn" style="display: flex;  margin-top: 40px; padding-bottom: 50px;">
        <TheButton
        :width="200"
        :padding="15"
        :lineHeight="21"
        @click="createLessons"
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

import BaseInfo from '@/components/Base/lessons/BaseInfo.vue';
import Teacher from '@/components/Base/lessons/Teacher.vue';

import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();

import { collection, getDocs, doc, setDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";




const teached = ref([]);
async function getTeacher(){
  const usersData = await getDocs(collection(db, 'publishedTeachers'));
  usersData.forEach((doc) => {
    teached.value.push({
      id: course.teacher.length,
      title: doc.data().nameUser,
    })
  })
}



import {stateLessons} from "@/stores/stateLessons";
const lessons = stateLessons();
async function getStudent(){
  const stud = await getDocs(collection(db, 'student'));
  stud.forEach((doc)=>{
    lessons.student.push({
      name: doc.data().name,
    })
  })
}
const less = ref([]);
async function getLessons(){
  const stud = await getDocs(collection(db, 'lessons'));
  stud.forEach((doc)=>{
    less.value.push({
      id: doc.data().about,
    })
  })
}

onBeforeMount(() => {
  lessons.student = [];
  lessons.students = [];
  getTeacher();
  getStudent();
  getLessons();

})

function teachers(idx){
  data.value.teachers = idx;
}



function cancel(){
  router.push('/')
}


const data = ref({
  name: '',
  teachers: 0,
  dateLessons: '',
  datePeriod: ['', ''],
  lessonsStart: 0,
  lessonsTime: 0,
  priceLessons: '',
  minStudent: '',
  lvlStudent: 0,
  yearsStudent: 0,
  about: '',
  maxStudent: '',
})
async function createLessons(){
  const randomNumber = 'lessons-' + Date.now();
  const dataInfo = {
    id: randomNumber,
    idx: less.value.length,
    name: data.value.name,
    teachers:  data.value.teachers,
    dateLessons: data.value.dateLessons,
    datePeriod: data.value.datePeriod,
    lessonsStart: data.value.lessonsStart,
    lessonsTime: data.value.lessonsTime,
    priceLessons: data.value.priceLessons,
    minStudent: data.value.minStudent,
    lvlStudent: data.value.lvlStudent,
    yearsStudent: data.value.yearsStudent,
    about: data.value.about,
    maxStudent: data.value.maxStudent,
    users: lessons.students,
  }

  await setDoc(doc(db, "lessons",  randomNumber), dataInfo);
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