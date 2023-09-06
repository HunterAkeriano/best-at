<template>
  <div class="forum" >
    <div class="container" v-if="forums.idForum !== null">
      <div class="forum__links">
        <p>Главная</p>
        <span>/</span>
        <p>Список разделов форума</p>
        <span>/</span>
        <p>Список тем форума</p>
      </div>
      <div class="forum__title">
        <h4>Форум</h4>
        <h5>{{ forums.forum[forums.idForum].theme[forums.idChat].title }}</h5>
      </div>

      <div class="forum__subtitle">
        <h5>{{ forums.forum[forums.idForum].theme[forums.idChat].title }}</h5>
      </div>

      <div class="forum__msg">
        <div class="forum__msg-item" v-for="(item, idx) in paginateUsers()">
          <div class="user">
            <img :src="item.user.ava" alt="">
            <h5>{{ item.user.name}}</h5>
            <TheStar style="margin-top: 4px; margin-bottom: 0;" :rating="4"/>
            <p>Сообщений: <span>6</span></p>
            <p style="margin-top: 7px;">Регистрация: 15.06.2021</p>
          </div>
          <div class="text">
            <div class="text__date">
              <p>{{ item.date }}</p>
              <p>#{{ +item.id + 1 }}</p>
            </div>
            <div class="text__content">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <ThePagination
        v-if="pages>1"
        :total-pages="pages"
        :current-page="currentPage"
        style="margin-top: 32px;"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onBeforeMount} from 'vue';
import ThePagination from '@/components/UI/pagination/ThePagination.vue'
import TheStar from '../../components/UI/Stars/TheStars.vue';

import {stateUser} from '@/stores/StateUser.js'
const user = stateUser();

import { useRoute } from 'vue-router';
const router = useRoute();

import { stateForum } from '@/stores/StateForum';

const forums = stateForum();


const currentPage = ref(1)

function paginateUsers() {
  let from = (currentPage.value - 1) * 2
  let to = from + 2
  return  forums.forum[forums.idForum].theme[forums.idChat].messangers.slice(from, to)
}

const pages = computed(() => {
    return Math.ceil(forums.forum[forums.idForum].theme[forums.idChat].messangers.length / 2);
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

        forums.forum[forums.idForum].theme.forEach((el)=>{
          if(el.router == router.params.chatid){
            forums.idChat = el.id;
          }
        })
      }
    })
  })
})



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

  &__subtitle{
    background: #FDE4EA;
    padding: 12px 0px;
    padding-left: 20px;
    margin-top: 24px;
    h5{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 22.5px */
    }
  }

  &__msg{
    &-item{
      display: flex;
      height: 345px;
      .user{
        border: 1px solid #DCE3E8;
        padding-top: 28px;
        width: 210px;
        img{
          width: 100px;
          display: block;
          margin: 0 auto;
          height: 100px;
          border-radius: 100%;
        }
        h5{
          margin-top: 17px;
          color: #292C32;
          text-align: center;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
          line-height: 17px; /* 130.769% */
          height: 43px;
        }
        p{
          color: #8B919E;
          text-align: center;
          margin-top: 17px;
          font-family: Montserrat;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;

          span{
            color: #292C32;
          }
        }
      }
      .text{
        width: 1170px;
        border: 1px solid #DCE3E8;
        &__date{
          display: flex;
          justify-content: space-between;
          background: #F2F5FA;
          padding: 13px 0px;
          padding-left: 25px;
          padding-right: 25px;
          border: 1px solid #DCE3E8;
          width: 100%;
          p{
            color: #8B919E;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
        &__content{
          padding-top: 19px;
          padding-left: 25px;
          padding-right: 20px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px; /* 178.571% */
          }
        }
      }
    }
  }

  
}
</style>