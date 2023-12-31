<template>
  <div class="wrapper">
    <TheHeader v-if="is404Page"/>
    <TheModal v-if="modalsStore.currentModal !== undefined" />
    <RouterView />
    <TheFooter v-if="is404Page"/>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { ref, watch, onBeforeMount } from 'vue'
import { useModalsStore } from '@/stores/modals'

import TheHeader from '@/components/Base/TheHeader.vue'
import TheFooter from '@/components/Base/TheFooter.vue'
import TheModal from '@/components/Base/TheModal.vue'


const modalsStore = useModalsStore()
const route = useRoute();

const is404Page = ref(null);
watch(route, () => {
  is404Page.value = route.name !== 'Not Found';
});

import {stateUser} from "@/stores/StateUser";
import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

const usersStore = stateUser();

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

async function getStudent(){
  const usersData = await getDocs(collection(db, 'publicStudentData'));
  usersData.forEach((doc) => {
    usersStore.userStudent.push({
      docName: doc.id,
      lessons: doc.data().lessons,
      email: doc.data().email,
    })
  })
}

onBeforeMount(() => {
  userEmail.value = JSON.parse(localStorage.getItem('user'));
  usersStore.user = [];
  usersStore.userId = null;
  usersStore.userStudent = [];
  usersStore.studentId = null;

  if(userEmail.value){
    getUser().then(()=>{
    usersStore.user.forEach((item)=>{
      if(item.email == userEmail.value.email){
        usersStore.userId = item.id;
        if(item.type.student){
          getStudent().then(()=>{
            usersStore.userStudent.forEach((student)=>{
              if(student.email == userEmail.value.email){
                usersStore.studentId =  usersStore.userStudent.findIndex(item => item.email === userEmail.value.email);
              }
            })
          });
        }
      }
    })
  })
  } 
})


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

#app {
    height: 100vh;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

a{
  text-decoration: none;
  color: inherit;
}

.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  opacity: 1;
  position: relative;
}

.main{
  flex: 1 1 auto;
  margin-top: 70px;
}

.container{
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: EB Garamond, serif;
}

h2 {
  color: #292C32;
  font-size: 50px;
  text-align: center;
}

</style>
