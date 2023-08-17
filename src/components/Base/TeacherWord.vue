<template>
  <div class="teacher-top">
      <div class="teacher-top__content">  
        <div class="all-star">
          <AllStar/>
        </div>
        <div class="all-teacher">
          <AllTeacher/>
          <div class="info">
            <h4>{{ arrayTeacher.length }} +</h4>
            <p>преподавателей</p>
          </div>
        </div>
        <div class="container">   
          <div class="teacher-top__title">
            <h3>Преподаватели</h3>
          </div>
        </div>
        <div class="teacher-top__swiper">
          <Swiper
          :slides-per-view="4"
          :spaceBetween="58"
          >
            <SwiperSlide v-for="item in arrayTeacher">
              <div class="slide-item">
                <div class="slide-item__img">
                  <img width="155" height="155" :src="item.photo" alt="">
                </div>

                <div class="slide-item__star">
                  <TheStars :rating="item.rate" />
                </div>

                <h4>{{ item.nameUser }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide style="opacity: 0;"/>
           

          </Swiper>
        </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { db } from "@/firebase/firebase";
import {getDocs,  collection} from "firebase/firestore";

import AllStar from '@/assets/img/main/AllStar.vue'
import AllTeacher from '@/assets/img/main/AllTeacher.vue'
import TheStars from '@/components/Base/TheStars.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'


const arrayTeacher = ref([]);
async function getTeachers(){
  const querySnapshot = await getDocs(collection(db, "publishedTeachers"));
  querySnapshot.forEach((doc) => {
    arrayTeacher.value.push(doc.data());
  });
}

onMounted(() => {
  getTeachers();
})
</script>

<style lang="scss">
.teacher-top{
  .container{
    max-width: 100%;
    padding-right: 0;
    padding-left: 226px;
  }
  &__content{
    margin-top: 135px;
    height: 686px;
    position: relative;

    &::after{
      content: '';
      position: absolute;
      right: 0;
      top: -5px;
      width: 455px;
      height: 100%;
      background-image: url('../../assets/img/main/bg-teacher.png');
    }

    .all-star{
      position: absolute;
      right: 37%;
      top: -31px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.75);
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.20);
      backdrop-filter: blur(5px);
      padding: 5px 14.5px;
    }

    .all-teacher{
      position: absolute;
      right: 111px;
      height: 80px;
      bottom: -34px;
      z-index: 2;
      padding-top: 12px;
      padding-left: 16px;
      padding-bottom: 14px;

      border-radius: 10px;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.20);
      backdrop-filter: blur(5px);

      display: flex;
      align-items: center;
      width: 229px;
      
      h4{
        text-shadow: 0px 15px 25px rgba(193, 42, 61, 0.20);
        font-family: Montserrat;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 68.571% */
        background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left: 13px;
        margin-top: 8px;
      }

      p{
        margin-top: 5px;
        margin-left: 13px;
        color: #454B58;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 164.286% */
      }
    }

    .swiper{
      padding: 50px 0;
      padding-left: 46px;
      transform: translateY(-15px);
      &-slide{
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
        height: 400px;
        width: 320px !important;
        cursor: pointer;

        .slide-item{
          &__img{
            width: 155px;
            height: 155px;
            border-radius: 100%;
            margin: 0 auto;
            margin-top: 48px;
            img{
              border-radius: 100%;
            }
          }
          &__star{
            margin-top: 17px;
          }

          h4{
            color: #292C32;
            text-align: center;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; /* 122.222% */
            margin-top: -5px;
          }

          p{
            color: #454B58;
            text-align: center;
            font-family: Montserrat;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 22.5px */
            margin-top: 12px;
            padding: 0 28px;
          }
        }
      }

      &-slide:last-child{
        margin-right: 100px !important;
      }
    }
  } 

  &__swiper{
      margin-left: 180px;
  }

  &__title{
    h3{
      color: #292C32;
      font-family: EB Garamond;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
}
</style>