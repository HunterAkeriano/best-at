<template>
<header class="header">
  <div class="container">
    <div class="header__content">
      <div class="header__logo">
          <p>BeBest</p>
          <span>at</span>
      </div>
      <div class="header__link">
        <nav class="header__link-nav">
          <ul>
            <li v-for="item in navLink"> {{ item.link }}</li>
          </ul>
        </nav>
      </div>
      <div class="header__user">
        <div class="header__user-auth">
          <IconUser/>
          <p>Войти</p>
          <span>|</span>
          <p>Регистрация</p>
        </div>
      </div>
      <div class="header__lang" @click="selectedLanguage = !selectedLanguage">
        <div class="header__lang-select" style="margin-left: 1px; transform: translateY(-1px) translateX(1px);">
            <div class="header__lang-item" >
              <component :is="selectUserLanguage.icon"/>
              <p>{{ selectUserLanguage.lang }}</p>
          </div>
        </div>
        
        <IconArrow v-if="selectedLanguage"/>
        <div class="header__lang-selected" v-if="!selectedLanguage">
          <div class="header__lang-item" style="transform: translateY(-0.1px);" v-for="item in computedLanguage" @click="selectUserLanguage = item">
            <component :is="item.icon"/>
            <p>{{ item.lang }}</p>
          </div>
          <IconArrow class="arrow"/>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script setup>
import IconUser from '@/assets/icons/header/User.vue'
import IconArrow from '@/assets/icons/header/Arrow.vue'
import IconUkrainer from '@/assets/icons/header/country/Ukraine.vue'
import IconBritish from '@/assets/icons/header/country/British.vue'
import IconSpain from '@/assets/icons/header/country/Spain.vue'
import {ref, shallowRef, computed   } from 'vue';
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
    router: 'community'
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

const selectedLanguage = ref(true);

const selectUserLanguage = shallowRef(language[0]);

const computedLanguage = computed(() => {
  const selectedLanguageValue = selectUserLanguage.value;
  const filteredLanguage = language.filter(item => item.lang !== selectedLanguageValue.lang);
  return [selectedLanguageValue, ...filteredLanguage];
});

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
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    margin-left: 51px;
    padding-top: 9px;
    position: relative;
    transition: .15s;
    gap: 10px;
    &-selected{
      position: absolute;
      left: -14px;
      transition: .15s;
      top: 0;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      padding: 11px 20px 10px 16px;
      width: 106px;
      .arrow{
        position: absolute;
        right: 20px;
        top: 20px;
        transform: rotate(180deg);
      }
    }
    &-item{
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      transition: .15s;
      p{
        transition: .15s;
        color: #454B58;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 185.714% */
        transform: translateX(1px);
      }
      &:hover{
        p{
          color: #F04973;
        }
      }
    }
  }
}
</style>