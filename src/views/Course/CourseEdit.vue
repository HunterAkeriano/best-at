<template>
  <div class="course-create">
    <div class="container"  v-if="idCourse !== null">
     
      <div class="course-create__links">
        <p>Главная</p>
        <span>/</span>
        <p>Редактирование курса</p>
      </div>
      <div class="course-create__title">
        <h4>Редактирование курса</h4>
      </div>

      <div class="course-create__wrapper"
      style="margin-top: 25px;">
        <BaseInfo :data="coursesArray[idCourse]"/>
        <Teacher @activeTeacher="teachers"/>
      </div>
      <PlanCourse/>

      <div class="course-create__btn" style="display: flex; padding-bottom: 50px;">
        <TheButton
        :width="200"
        :padding="15"
        :lineHeight="21"
        @click="update"
      >Редактировать урок</TheButton>

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
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()


import TheButton from '@/components/UI/Buttons/Button.vue'

import BaseInfo from '@/components/Base/course/BaseInfo.vue';
import Teacher from '@/components/Base/course/Teacher.vue';
import PlanCourse from '@/components/Base/course/PlanCourse.vue';

import {stateCourse} from "@/stores/StateCourse";
const courses = stateCourse();

import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

async function getTeacher(){
  const usersData = await getDocs(collection(db, 'publishedTeachers'));
  usersData.forEach((doc) => {
    courses.teacher.push({
      id: courses.teacher.length,
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
        courses.idTeacher = coursesArray.value[idCourse.value].teachers
        courses.plan = coursesArray.value[idCourse.value].plan
      }
    })
  })

})

function teachers(idx){
  coursesArray.value[idCourse.value].teachers = idx;
}


async function update(){
  const userData = {
      id: coursesArray.value[idCourse.value].id,
      about: coursesArray.value[idCourse.value].about,
      date: coursesArray.value[idCourse.value].date,
      lvl: coursesArray.value[idCourse.value].lvl,
      maxStudent: coursesArray.value[idCourse.value].maxStudent,
      name: coursesArray.value[idCourse.value].name,
      plan: courses.plan,
      pricelessons: coursesArray.value[idCourse.value].pricelessons,
      student: coursesArray.value[idCourse.value].student,
      teachers: coursesArray.value[idCourse.value].teachers,
      time: coursesArray.value[idCourse.value].time,
      timeLessons: coursesArray.value[idCourse.value].timeLessons,
      timeOut: coursesArray.value[idCourse.value].timeOut,
      timeTest: coursesArray.value[idCourse.value].timeTest,
      years: coursesArray.value[idCourse.value].years,
  }
  await updateDoc(doc(db, "course", coursesArray.value[idCourse.value].id), userData);
}

function cancel(){
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