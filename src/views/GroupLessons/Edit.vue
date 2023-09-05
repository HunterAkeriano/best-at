<template>
  <div class="course-create">
    <div class="container">
      <div class="course-create__links">
        <p>Главная</p>
        <span>/</span>
        <p>Редактирование группового урока</p>
      </div>
      <div class="course-create__title">
        <h4>Редактирование группового урока</h4>
      </div>

      <div class="course-create__wrapper"
      style="margin-top: 25px;">
        <BaseInfo 
        :data="less[lessId]" 
        :teached="teached"
        v-if="lessId !== null"/>
        <Teacher 
        style="height: 681px;"
        @activeTeacher="teachers"
        v-if="lessons.student.length > 0"
        />
      </div>
      <div class="course-create__btn" style="display: flex;  margin-top: 40px; padding-bottom: 50px;">
        <TheButton
        :width="200"
        :padding="15"
        :lineHeight="21"
        @click="editLess"
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
const route = useRoute();

import TheButton from '@/components/UI/Buttons/Button.vue'

import BaseInfo from '@/components/Base/lessons/BaseInfo.vue';
import Teacher from '@/components/Base/lessons/Teacher.vue';

import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();

import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
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
  const stud = await getDocs(collection(db, 'publicStudentData'));
  stud.forEach((doc)=>{
    lessons.student.push({
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
      lessons: doc.data().lessons,
    })
  })
}
const less = ref([]);
const lessId = ref(null);
async function getLessons(){
  const stud = await getDocs(collection(db, 'lessons'));
  stud.forEach((doc)=>{
    less.value.push({
      id: doc.data().id,
      idx: less.value.length,
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

onBeforeMount(() => {
  lessons.student = [];
  lessons.students = [];
  getTeacher();
  getStudent();
  getLessons().then(()=>{
    less.value.forEach((item)=>{
      if(item.id == route.params.id){
        lessId.value = item.idx;
        lessons.students = item.users;
      }
    })
  });

})

function teachers(idx){
  less.value[lessId].teachers = idx;
}

async function editLess(){
  const student = lessons.students.map((doc) => {
    const { lessons, ...newObject } = doc;
    return newObject;
  });
  const data = {
    name: less.value[lessId.value].name,
    teachers: less.value[lessId.value].teachers,
    dateLessons: less.value[lessId.value].dateLessons,
    datePeriod: less.value[lessId.value].datePeriod,
    lessonsStart: less.value[lessId.value].lessonsStart,
    lessonsTime: less.value[lessId.value].lessonsTime,
    priceLessons: less.value[lessId.value].priceLessons,
    minStudent: less.value[lessId.value].minStudent,
    lvlStudent: less.value[lessId.value].lvlStudent,
    yearsStudent: less.value[lessId.value].yearsStudent,
    about: less.value[lessId.value].about,
    maxStudent: less.value[lessId.value].maxStudent,
    users:  student,
  }
  await updateDoc(doc(db, "lessons", less.value[lessId.value].id), data);
  
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