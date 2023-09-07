<template>
  <div class="forum" >
    <div class="container" v-if="forums.idForum !== null">
      <div class="forum__links">
        <p @click="addDocs">Главная</p>
        <span>/</span>
        <p>Список разделов форума</p>
        <span>/</span>
        <p>Список тем форума</p>
      </div>
      <div class="forum__title">
        <h4>Форум</h4>
        <h5>{{ forums.forum[forums.idForum].title }}</h5>
      </div>

      <div class="forum__el">
        <p>Название тем</p>
        <p>Обновления</p>
        <p>Темы</p>
        <p>Создана</p>
      </div>

      <div class="forum__theme" 
      style="height: 432px; border-bottom: 1px solid #ccc;">
        <div class="forum__theme-item"
        v-for="item in paginateUsers()"
        >
        <router-link :to="{ path: `/forum/${$route.params.id}/${item.router}` }">
          <ThemeIcon/>
          <p>{{ item.title }} <span>от {{ item.inOut }}</span></p>
          <p style="transform: translateX(37px);">{{ item.timed }} <span>от {{ item.out }}</span></p>
          <p>{{ item.messangers.length }}</p>
          <p>{{ item.timed }}</p>
        </router-link>
        </div>
      </div>
      <ThePagination
          v-if="pages>1"
          :total-pages="pages"
          :current-page="currentPage"
          @changePage="changePage"
          />
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onBeforeMount} from 'vue';
import ThePagination from '@/components/UI/pagination/ThePagination.vue'

import ThemeIcon from '@/assets/icons/forum/ThemeIcon.vue';

import { useRoute } from 'vue-router';
const router = useRoute();

import { stateForum } from '@/stores/StateForum';

const forums = stateForum();


const currentPage = ref(1)

function paginateUsers() {
  let from = (currentPage.value - 1) * 9
  let to = from + 9
  return forums.forum[forums.idForum].theme.slice(from, to)
}

const pages = computed(() => {
    return Math.ceil(forums.forum[forums.idForum].theme.length / 9);
})

function changePage(page) {
  currentPage.value = page
}

import { collection, getDocs, updateDoc, doc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

async function getForums(){
  if(forums.forum.length>0) return;
  const foums = await getDocs(collection(db, 'forum'));
  foums.forEach((doc)=>{
    forums.forum.push({
      idx: doc.id,
      id: doc.data().id,
      router: doc.data().router,
      theme: doc.data().theme,
      timed: doc.data().timed,
      title: doc.data().title,
    })
  })
}

onBeforeMount(() => {
  getForums().then(()=>{
    forums.forum.forEach((item)=>{
      if(item.router == router.params.id){
        forums.idForum = item.id;
      }
    })
  })
})


const item = ref([
  {
    id: 2,
    title: 'Влад учит новые слова',
    inOut: 'Владислав Андрейко',
    timed: '28.08.2023',
    out: 'Николай Николаевич',
    messangers: [],
    created: '29.08.2023',
    router: 'theme-lessons-word',
  }
])


async function addDocs(){
  forums.forum[forums.idForum].theme.push(item.value[0]);
  const data = {
    theme: forums.forum[forums.idForum].theme,
  }
  await updateDoc(doc(db, 'forum', forums.forum[forums.idForum].idx),  data);
}
</script>


<style lang="scss" scoped>
.forum{
  flex: 1 1 auto;

  &__links{
    margin-top: 92px;
    display: flex;
    align-items: center;
    cursor: pointer;

    p{
      color: #7D7F83;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
      margin-right: 14px;
    }

    span{
      color: #7D7F83;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
      display: block;
      margin-right: 6px;
    }
  }

  &__title{
    margin-top: 21px;
    h4{
      color: #292C32;
      font-family: EB Garamond;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    h5{
      margin-top: 27px;
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
    }
  }

  &__el{
    margin-top: 24px;
    display: flex;
    align-items: center;
    background: #FDE4EA;
    padding: 12px 0;
    padding-left: 21px;

    p{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 22.5px */

    }

    p:nth-child(1){
      width: 873px;
    }
    p:nth-child(2){
      width: 206px;
    }
    p:nth-child(3){
      width: 140px;
    }
  }

  &__theme{
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;

    &-item{

      a{
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 48px;
        padding-left: 20px;
        padding-top: 5px;
        border-bottom: 1px solid #ccc;
      }

      svg{
        margin-right: 14px;
      }

      p{
        color: #292C32;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 133.333% */
      }

      p:nth-child(2){
        display: flex;
        flex-direction: column;
        width: 818px;

        span{
          color: #8B919E;
          font-family: Montserrat;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      p:nth-child(3){
        width: 242px;
        display: flex;
        flex-direction: column;
        color: #8B919E;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 133.333% */
      }

      p:nth-child(4){
        width: 120px;
      }

      &:hover{
        background: rgb(228, 223, 223);
      }
      
    }
  }
}
</style>