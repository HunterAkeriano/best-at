<template>
<header class="header">
  <div class="container">
    <div class="header__content" :class="{'header__content_auth': authStore.auth}">
      <div class="header__logo">
        <router-link :to="{ path: `/` }">
          <p>BeBest</p>
          <span>at</span>
        </router-link>
      </div>
      <div class="header__link">
        <nav class="header__link-nav">
          <ul>
            <li v-for="item in navLink">
               <router-link :to="{ path: `/${item.router}` }"> {{ item.link }} </router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header__user" v-if="!authStore.auth">
        <div class="header__user-auth">
          <IconUser/>
          <p> <router-link :to="{ path: `/login` }"> Войти </router-link></p>
          <span>|</span>
          <p> <router-link :to="{ path: `/registration` }"> Регистрация </router-link></p>
        </div>
      </div>

      <div class="header__auth" v-if="authStore.auth">
        <router-link :to="{ path: `/profile` }"><IconAcademy/></router-link>
        <IconMessage/>
        <IconMain @click="logout"/>
      </div>

      <div class="header__lang" :class="{'header__lang_selected': selectedLanguage}" @click="selectedLanguage = !selectedLanguage">
          <div class="header__lang-container">
            <div class="header__lang-item" 
            v-for="(item, index) in language"
            @click="moveToFirst(index); ">
            <component :is="item.icon"/>
            <p>{{ item.lang }}</p>
          </div>
        </div>
      <IconArrow class="arrow"/>
    
      </div>
    </div>
  </div>
</header>
</template>

<script setup>
import IconUser from '@/assets/icons/header/User.vue'
import IconArrow from '@/assets/icons/header/Arrow.vue'
import IconAcademy from '@/assets/icons/header/auth/IconAcademy.vue'
import IconMain from '@/assets/icons/header/auth/IconMain.vue'
import IconMessage from '@/assets/icons/header/auth/IconMessage.vue'
import IconUkrainer from '@/assets/icons/header/country/Ukraine.vue'
import IconBritish from '@/assets/icons/header/country/British.vue'
import IconSpain from '@/assets/icons/header/country/Spain.vue'

import {ref} from 'vue';
import {stateUser} from '@/stores/StateUser'
const authStore = stateUser();

const navLink = [
  {
    link: 'Курсы',
    router: 'courses'
  },
  {
    link: 'Уроки',
    router: 'lessons'
  },
  {
    link: 'О проекте',
    router: 'about'
  },
  {
    link: 'Преподаватели',
    router: 'teachers'
  },
  {
    link: 'Компании',
    router: 'company'
  },
  {
    link: 'Статьи',
    router: 'article'
  },
  {
    link: 'Сообщество',
    router: 'forum'
  },
]

const language = [
  {
    lang: 'UA',
    icon: IconUkrainer
  },
  {
    lang: 'EN',
    icon: IconBritish
  },
  {
    lang: 'ES',
    icon: IconSpain
  }
]

const selectedLanguage = ref(false);
function moveToFirst(index) {
  const selectedItem = language.splice(index, 1)[0];
  language.unshift(selectedItem);
}

function logout(){
  authStore.logout();
  authStore.auth = null;
}


</script>


<style lang="scss">
.header{
  position: fixed;
  margin-right: calc(-100vw - -100%);
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 14px 0px;
  font-family: Montserrat;
  background: #FFF;
  box-shadow: 0px 4px 50px 0px rgba(42, 102, 193, 0.08);
  &__content{
    display: flex;
  }
  &__logo{
    
    a{
      display: flex;
      align-items: center;
    }
    p{
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 4px 9px;
      border: 1px solid rgba(241, 74, 115, 1);
      border-radius: 12px;
      background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span{
      color: #454B58;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-left: 5px;
    }
  }
  &__link{
    max-width: 708px;
    width: 100%;
    margin-left: 99px;
    padding-top: 12px;
    &-nav{
      ul{
        padding: 0;
        list-style-type: none;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
          cursor: pointer;
          color: #454B58;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: .15s;

          &:hover{
            color: #F04973;
          }
        }
      }
    }
  }
  &__user{
    &-auth{
      margin-left: 97px;
      padding-top: 9px;
      display: flex;
      align-items: center;
      p{
        cursor: pointer;
        color: #454B58;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        transition: .15s;
      }
      p:nth-child(2){
        margin-left: 8px;
        margin-right: 5px;
        &:hover{
            color: #F04973;
        }
      }
      span{
        opacity: 0.6000000238418579;
      }
      p:nth-child(4){
        margin-left: 6px;
        &:hover{
            color: #F04973;
        }
      }
     
    }
  }
  &__lang{
    width: 106px;
    position: relative;
    margin-left: 38px;
    cursor: pointer;
    &-container{
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      padding: 10px 19.57px 10px 15px;
      height: 41px;
      overflow: hidden;
      transition: .25s;

    }
    &-item{      
      display: flex;
      gap: 8px;
      align-items: center;
      cursor: pointer;
      p{
        color: #454B58;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 185.714% */
        transition: .25s;
        &:hover{
          color: #F04973;
        }
      }
      
    }
    &-item:nth-child(2),
    &-item:nth-child(3){
      margin-top: 2px;
    }
    .arrow{
      position: absolute;
      z-index: 10;
      right: 19px;
      top: 20px;
      transition: .25s;
    }
    &:hover{
      .arrow{
        path{
          transition: .25s;
          fill: #F04973
        }
      }
    }

    &_selected{
      .header__lang-container{
        height: 100px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      }
      .arrow{
        transform: rotate(180deg);
        path{
          fill: #F04973;
        }
      }
    }
  }
  &__content_auth{
    .header__link{
      margin-left: 144px;
    }
    .header__auth{
      display: flex;
      align-items: center;
      margin-left: 142px;

      a{
        width: 28px;
        height: 20px;
      }
      
      svg{
        cursor: pointer;
        transition: all .25s;

        &:hover{
          path{
            transition: all .25s;
            fill: #F04973;
          }
        }
      }
      svg:nth-child(2){
        margin-left: 20px;
      }

      svg:nth-child(3){
        margin-left: 20px;
      }
    }
    .header__lang{
      margin-left: 28px;
    }
  }
}
</style>