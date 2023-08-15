<template>

<div class="help" style="margin-top: 100px;">
   <input type="text"
   v-model="name" 
   placeholder="Имя Фамилия">

  <div class="lol">
    <input type="number"
   v-model="country" 
   placeholder="Страна цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="teacherLessons" 
   placeholder="Язык обучения цифрой">
  </div>

  <div class="lol">
    <input type="text"
   v-model="youtbe" 
   placeholder="Ссылка на видео из айфрейма">
  </div>

  <div class="lol">
    <input type="number"
   v-model="payment" 
   placeholder="Цена цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="timedLessons" 
   placeholder="Время преподавания цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="langTeacher" 
   placeholder="Язык общения цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="mans" 
   placeholder="Пол цифрой">
  </div>
  <div class="lol">
    <input type="number"
   v-model="testing" 
   placeholder="Подготовка к тестам цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="asspcts" 
   placeholder="Аспекты обучения цифрой">
  </div>

  <div class="lol">
    <input type="number"
   v-model="age" 
   placeholder="Возраст цифрой массива">
  </div>

  <div class="lol">
    <input type="number"
   v-model="rate" 
   placeholder="Рейтинг от 1 до 5">
  </div>

  <div class="lol">
    <input type="number"
   v-model="students" 
   placeholder="Кол-во учеников">
  </div>

  <div class="lol">
    <input type="number"
   v-model="isLessons" 
   placeholder="Кол-во уроков">
  </div>

  <div class="lol">
    <input type="text"
   v-model="description" 
   placeholder="Описание">
  </div>

  <div class="lol">
    <input type="text"
   v-model="email" 
   placeholder="email">
  </div>

  <div class="lol">
    <input type="text"
   v-model="password" 
   placeholder="password">
  </div>

  <button @click="send">Отправть данные на сервак</button>
</div>
</template>


<script setup>
import {ref} from 'vue'
import {getStorage,  getMetadata, listAll, deleteObject, getDownloadURL, uploadBytes,  uploadString} from "firebase/storage";
import { db, storage, auth } from "@/firebase/firebase";
import {updateDoc,  getFirestore,  doc, getDocs, getDoc, collection, writeBatch,  setDoc, deleteDoc    } from "firebase/firestore";
import { getAuth, EmailAuthProvider, updateEmail, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, reauthenticateWithCredential  } from "firebase/auth";

const name = ref('')
const country = ref('');
const teacherLessons = ref('');
const youtbe = ref('')
const payment = ref('')
const timedLessons = ref('');
const langTeacher = ref('')
const mans = ref('');
const testing = ref('');
const asspcts = ref('');

const age = ref('');
const rate = ref('')
const students = ref('');
const isLessons = ref('');

const email = ref('');
const password = ref('');
const description = ref('');

async function send(){
    let Data = 'teacher-' + Date.now();
    const userInfo = {
        nameUser: name.value,
        countryUser: country.value,
        teacherLessons: teacherLessons.value,
        youtbeIframe: youtbe.value,
        payment: payment.value,
        timedLessons: timedLessons.value,
        langTeacher: langTeacher.value,
        mans: mans.value,
        testing: testing.value,
        asspcts: asspcts.value,
        age: age.value,
        rate: rate.value,
        students: students.value,
        isLessons: isLessons.value,
        id: Data,
       // photo: 'загрузить на фаирбейс и отправить вставить сюда ссылку'
    }
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    await setDoc(doc(db, 'publicTeacher', `${Data}`), userInfo);
}

// photo: 'загрузить на фаирбейс и отправить вставить сюда ссылку'
</script>