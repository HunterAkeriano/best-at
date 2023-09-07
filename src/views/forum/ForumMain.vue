<template>
  <div class="forum">
    <div class="container">
      <div class="forum__links">
        <p><router-link :to="{ path: `/` }">Главная</router-link></p>
        <span>/</span>
        <p>Список разделов форума</p>
      </div>
      <div class="forum__title">
        <h4>Форум</h4>
        <h5>Разделы форума</h5>
      </div>

      <div class="forum__el">
        <p>Название форума</p>
        <p>Темы</p>
        <p>Обновления</p>
      </div>

      <div class="forum__theme" 
      style="height: 432px; border-bottom: 1px solid #ccc;">
        <div class="forum__theme-item"
        v-for="item in paginateUsers()"
        >
        <router-link :to="{ path: `/forum/${item.router}` }">
          <ThemeIcon/>
          <p>{{ item.title }}</p>
          <p style="transform: translateX(10px);">{{ item.theme.length }}</p>
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

import TheInput from '@/components/UI/Input/TheInput.vue'

import ThemeIcon from '@/assets/icons/forum/ThemeIcon.vue';

import { stateForum } from '@/stores/StateForum';

const forums = stateForum();


const currentPage = ref(1)

function paginateUsers() {
  let from = (currentPage.value - 1) * 9
  let to = from + 9
  return forums.forum.slice(from, to)
}

const pages = computed(() => {
    return Math.ceil(forums.forum.length / 9);
})

function changePage(page) {
  currentPage.value = page
}

import { collection, getDocs} from "firebase/firestore";
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
  getForums();
})
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
      width: 1003px;
    }
    p:nth-child(2){
      width: 172px;
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
        width: 974px;
      }
      p:nth-child(3){
        width: 164px;
      }

      &:hover{
        background: rgb(228, 223, 223);
      }
      
    }
  }
}
</style>