<template>
  <div class="forum" >
    <div class="container" v-if="forums.idForum !== null && forums.idChat !== null">
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
              <p
              :style="{ fontFamily: item.fonts, fontSize:  `${item.fz}px` }" 
              >{{ item.text }}</p>
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
      <div class="forum__input" v-if="user.userId !== null">
        <h5>{{ forums.forum[forums.idForum].theme[forums.idChat].title }}</h5>

        <div class="forum__input-text">
          <div class="head">
            <div class="head__fonts">
              <select  v-model="msgData.fonts"  name="" id="">
                <option v-for="item in fonts" :value="item.font" :style="{ fontFamily: item.font }">{{ item.font }}</option>
              </select>
            </div>
            <div class="head__fz">
              <select @change="changeFont"  v-model="msgData.fz">
                <option v-for="item in fz" :value="item.fz">{{ item.fz }}</option>
              </select>
            </div>
            <div class="head__style">
              <IconStyle/>
            </div>
          </div>
          <div class="body">
            <textarea 
            :style="{ fontFamily: msgData.fonts, fontSize:  `${msgData.fz}px` }" 
            v-model="msgData.text"
            placeholder="Сообщение" name="" id="" cols="30" rows="10"></textarea>
          </div>
          <TheButton
            :width="145"
            :padding="9"
            :lineHeight="21"
            :isCourses="true"
            style="margin-top: 20px; margin-bottom: 50px;"
            @click="sendMessage"
          >Отправить</TheButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onBeforeMount} from 'vue';
import ThePagination from '@/components/UI/pagination/ThePagination.vue'
import TheStar from '../../components/UI/Stars/TheStars.vue';
import IconStyle from '@/assets/icons/forum/IconStyle.vue'
import TheButton from '@/components/UI/Buttons/Button.vue'

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


const fonts = ref([
  {
    id: 0,
    font: 'Roboto',
  },
  {
    id: 1,
    font: 'Arial',
  },
  {
    id: 2,
    font: 'Helvetica',
  },
  {
    id: 3,
    font: 'Times New Roman',
  },
  {
    id: 4,
    font: 'Verdana',
  },
  {
    id: 5,
    font: 'Georgia',
  },
  {
    id: 6,
    font: 'Courier New',
  },
  {
    id: 7,
    font: 'Tahoma',
  },
  {
    id: 8,
    font: 'Verdana',
  },
  {
    id: 9,
    font: 'Impact',
  },
  {
    id: 10,
    font: 'Comic Sans MS',
  },
])

const fz = ref([
  {
    id: 0,
    fz: 8,
  },
  {
    id: 1,
    fz: 9,
  },
  {
    id: 2,
    fz: 10,
  },
  {
    id: 3,
    fz: 11,
  },
  {
    id: 4,
    fz: 12,
  },
  {
    id: 5,
    fz: 13,
  },
  {
    id: 6,
    fz: 14,
  },
  {
    id: 7,
    fz: 15,
  },
  {
    id: 8,
    fz: 16,
  },
  {
    id: 9,
    fz: 17,
  },
  {
    id: 10,
    fz: 18,
  },
  {
    id: 11,
    fz: 19,
  },
  {
    id: 12,
    fz: 20,
  }
])

const msgData = ref({
  fonts:  'Roboto',
  fz: 8,
  text: '',
})
function changeFont(){
  console.log(msgData.value)
}

function getFormattedDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}.${month}.${year}`;
}
const formattedDate = getFormattedDate();



async function sendMessage(){
  const msg = {
    id: forums.forum[forums.idForum].theme[forums.idChat].messangers.length,
    text: msgData.value.text,
    fz: msgData.value.fz,
    fonts: msgData.value.fonts,
    user: {
      name: user.user[user.userId].name,
      ava: user.user[user.userId].ava[0].url,
    },
    date: formattedDate,
  }

  forums.forum[forums.idForum].theme[forums.idChat].messangers.push(msg)
  msgData.value.text = '';
  currentPage.value = Math.ceil(forums.forum[forums.idForum].theme[forums.idChat].messangers.length / 2);
  const data = {
    theme: forums.forum[forums.idForum].theme,
  }
  await updateDoc(doc(db, "forum",  forums.forum[forums.idForum].idx), data);
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
    height: 691px;
    border: 1px solid #DCE3E8;
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

  &__input{
    margin-top: 59px;
    width: 913px;
    h5{
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
    }

    .head{
      border: 1px solid #DCE3E8;
      display: flex;
      align-items: center;
      margin-top: 23px;

      select{
        padding: 15px 18px;
        border: 0;
        outline: 0;
      }

      &__fonts{
        select{
          width: 175px;
          height: 50px;
        }
      }

      &__fz{
        border-left: 1px solid #DCE3E8;
        border-right: 1px solid #DCE3E8;
        select{
          width: 100px;
        }
      }

      &__style{
        margin-left: 13px;
        transform: translateY(2px);
      }
    }

    .body{
      textarea{
        width: 100%;
        outline: 0;
        border: 1px solid #DCE3E8;
        resize: none;
        height: 228px;
        padding: 10px;
      }
    }
  }

  
}
</style>