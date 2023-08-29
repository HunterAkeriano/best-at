<template>
 <div class="poslugi">
  <div class="poslugi__title">
    <h4>Услуги</h4>
  </div>

  <div class="poslugi__top">
    <h4>Поднять аккаунт в ТОП</h4>
    <p>Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. </p>
    <TheButton
      :width="180"
      :isCourses="true"
      :padding="9"
      :lineHeight="21"
      style="margin-top: 20px;"
      @click="MODAL = true;"
      >Поднять рейтинг</TheButton>

      <div class="poslugi__top-modal" v-if="MODAL" >
        <div class="select">
          <p>Период</p>
          <TheSelect
            style="margin-top: 6px; width: 250px;"
            :items="TeachersHelpers.timeLessons"
            :idx="0"/>

          <h5>Суммарная стоимость: <span>1000 $</span> </h5>
          <TheButton
            :width="250"
            :padding="9"
            :lineHeight="21"
            style="margin-top: 20px;"
            @click="MODAL = false;"
            >Поднять рейтинг</TheButton>
        </div>
      </div>
  </div>

  <div class="poslugi__reklama">
    <h4>Реклама профиля</h4>
    <p>Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. </p>
    
    <div class="poslugi__reklama-item">
      <div class="item"
        v-for="el in reklama"
        >
          <h5>{{ el.title }}</h5>
          <p>{{ el.price }}</p>
          <TheButton
          :width="180"
          :padding="9"
          :lineHeight="21"
          style="margin-top: 20px;"
          @click="MODAL = true;"
          >Заказать</TheButton>

          <div class="item-hover">
            <p>Ваша публичная страница будет отображаться в рекламном блоке {{ el.title }} на 7 дней”</p>
          </div>
        </div>
      </div>
  
  </div>
 </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import TeachersHelpers from '../../../mixins/TeachersHelpers'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TheButton from '@/components/UI/Buttons/Button.vue'

const MODAL = ref(false);

const reklama = ref([
  {
    title: 'Реклама профиля на главной странице сайта',
    price: '20 500 $ ',
  },
  {
    title: 'Реклама профиля на главной странице сайта',
    price: '20 500 $ ',
  },
  {
    title: 'Реклама профиля на главной странице сайта',
    price: '20 500 $ ',
  },
])


</script>

<style lang="scss">
.poslugi{
  &__title{
    h4{
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
    }
  }

  &__top{
    margin-top: 25px;
    position: relative;
    h4{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px; /* 126.667% */
    }

    p{
      margin-top: 7px;
      color: #454B58;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 182.85%; /* 25.599px */
      max-width: 680px;
    }

    &-modal{
      position: absolute;
      top: 25px;
      right: 171px;
      width: 300px;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
      padding: 0 25px;
      padding-top: 24px;
      padding-bottom: 33px;

      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
        margin-top: 5px;
      }

      h5{
        margin-top: 12px;
        color: #454B58;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 22.5px */
        span{
          color: #454B58;
          font-family: Montserrat;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
        }
      }

    }
  }

  &__reklama{

    margin-top: 48px;
    h4{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px; /* 126.667% */
    }
    p{
      margin-top: 8px;
      color: #454B58;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 182.85%; /* 25.599px */
      max-width: 650px;
    }

    &-item{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 25px;

      .item{
        position: relative;
        margin-top: 20px;
        border: 1px solid #DCE3E8;
        background: rgba(242, 245, 250, 0.60);
        max-width: 233px;
        padding-top: 24px;
        padding-left: 27px;
        padding-right: 26px;

        h5{
          color: #292C32;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 19px; /* 135.714% */
        }

        p{
          margin-top: 9px;
          color: #292C32;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 24px */

        }

        button{
          margin-bottom: 38px;
        }

        .item-hover{
          position: absolute;
          left: 200px;
          display: none;
          width: 320px;
          z-index: 10;
          top: 0;
          border-radius: 10px;
          background: #FFF;
          box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
          padding: 24px;


          p{
            color: #454B58;
            margin: 0;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 22.5px */
          }
        }

        button:hover ~ .item-hover{
          display: block;
        }

      }
    }
  }
}

</style>