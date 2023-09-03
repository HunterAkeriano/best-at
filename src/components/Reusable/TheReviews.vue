<template>
  <div class="reviews">
    <div class="reviews__title">
      <h4>Отзывы</h4>
      <p>15 отзывов</p>
    </div>
    <div class="reviews__select">
      <div class="reviews__select-item">
        <p>Язык отзыва</p>
        <TheSelect
          style="margin-top: 2px; width: 190px;"
          :items="TeachersHelpers.langeuages"
        />
      </div>
      <div class="reviews__select-item">
        <p>Дата отзыва</p>
        <TheSelect
          style="margin-top: 2px; width: 190px;"
          :items="TeachersHelpers.date"
        />
      </div>
      <div class="reviews__select-item">
        <p>Полезность отзыва</p>
        <TheSelect
          style="margin-top: 2px; width: 190px;"
          :items="TeachersHelpers.reviews"
        />
      </div>
    </div>

    <div class="reviews__swiper">
      <swiper
      :slides-per-view="2"
      :modules="[Navigation]"
      >
      <swiper-slide v-for="item in reviews">
      <div class="item">
        <div class="item__teacher">
          <div class="item__teacher-img">
            <img :src="item.img" alt="">
          </div>
          <div class="item__teacher-info">
            <h5>{{ item.name }}</h5>
            <p>Кол-во уроков: {{ item.lessons }}</p>
          </div>
        </div>
        <div class="item__reviews">
          <p>{{ item.reviews }}</p>
        </div>
        <div class="item__footer">
          <div class="item__footer-date">
            <p>{{ item.date }}</p>
          </div>
          <div class="item__footer-like">
            <p style="margin-right: 32px;"><Like/>0</p>
            <p><Like style="transform: rotate(180deg) translateY(-2px);"/>0</p>
          </div>
        </div>
      </div>
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import Like from '@/assets/icons/course/Like.vue'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TeachersHelpers from '../../mixins/TeachersHelpers.js'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const reviews = [
  {
    id: 0,
    img: 'https://firebasestorage.googleapis.com/v0/b/best-at-cb209.appspot.com/o/users%2Fteachers%2Fphoto_2023-07-13_12-44-35.jpg?alt=media&token=5eb0b7cd-3117-4f87-a3ce-86fcacdf65ee',
    name: 'Анна Михайлова',
    lessons: 5,
    reviews: 'Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. ',
    date: '15.06.2021',
    liked: 0,
    disslike: 5,
  },
  {
    id: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/best-at-cb209.appspot.com/o/users%2Fteachers%2Fphoto_2023-07-13_12-44-35.jpg?alt=media&token=5eb0b7cd-3117-4f87-a3ce-86fcacdf65ee',
    name: 'Анна Михайлова',
    lessons: 5,
    reviews: 'Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. ',
    date: '15.06.2021',
    liked: 0,
    disslike: 5,
  },
  {
    id: 2,
    img: 'https://firebasestorage.googleapis.com/v0/b/best-at-cb209.appspot.com/o/users%2Fteachers%2Fphoto_2023-07-13_12-44-35.jpg?alt=media&token=5eb0b7cd-3117-4f87-a3ce-86fcacdf65ee',
    name: 'Анна Михайлова',
    lessons: 5,
    reviews: 'Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. ',
    date: '15.06.2021',
    liked: 0,
    disslike: 5,
  }
]

</script>

<style lang="scss" scoped>
.reviews{
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  padding-top: 31px;
  padding-left: 50px;
  padding-right: 30px;
  width: 1000px;
  padding-bottom: 50px;
  &__title{
    display: flex;
    align-items: center;
    h4{
      color: #292C32;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 110% */
      margin-right: 20px;
    }
    p{
      color: #454B58;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 182.85%; /* 25.599px */
      transform: translateY(2px);
    }
  }

  &__select{
    margin-top: 12px;
    display: flex;
    &-item{
      margin-right: 20px;
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }
    }
  }

  &__swiper{
    overflow: hidden;
    margin-top: 29px;
    .swiper-slide{
      width: 435px !important;
      margin-right: 30px;
      border: 1px solid #DCE3E8;
      background: rgba(242, 245, 250, 0.60);
      padding-left: 22px;
      padding-top: 20px;
      padding-bottom: 20px;
      .item{
        &__teacher{
          display: flex;
          &-img{
            width: 65px;
            height: 65px;
            img{
              width: 100%;
              border-radius: 100%;
            }
          }

          &-info{
            margin-left: 15px;
            margin-top: 9px;
            h5{
              color: #292C32;
              font-family: Montserrat;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 22px; /* 137.5% */
            }
            p{
              color: #454B58;
              font-family: Montserrat;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 23px; /* 164.286% */
            }
          }
        }
        &__reviews{
          margin-top: 12px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
          }
        }
        &__footer{
          display: flex;
          justify-content: space-between;
          margin-top: 13px;
          &-date{
            p{
              color: #8B919E;
              font-family: Montserrat;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 182.85%; /* 25.599px */
            }
          }
          &-like{
            display: flex;
            align-items: center;
            margin-right: 31px;
            cursor: pointer;
            p{
              opacity: 0.5;
              display: flex;
              align-items: center;
              color: #454B58;
              font-family: Gilroy;
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              transition: .25s;
              svg{
                margin-right: 10px;
                transition: .25s;
              }

              &:hover{
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
  
}
</style>