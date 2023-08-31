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
        <BaseInfo/>
        <Teacher/>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import {onBeforeMount} from 'vue'

import BaseInfo from '@/components/Base/course/BaseInfo.vue';
import Teacher from '@/components/Base/course/Teacher.vue';

import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();

import { collection, getDocs,} from "firebase/firestore";
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

onBeforeMount(() => {
  getTeacher()
})


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