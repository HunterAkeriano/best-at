<template>
  <div class="reviews-course">
    <div class="container">
      <div class="reviews-course__title">
        <h3>Отзывы</h3>
      </div>
      <div class="reviews-course__swiper">
        <Swiper
            :slides-per-view="2"
            :spaceBetween="60"
        >
          <SwiperSlide v-for="item in arrayReviews">
            <div class="slide-info">
              <div class="flex">
                <div class="course">
                  <p>{{ item.course }}</p>
                </div>
                <div class="date">
                  <p>{{ item.date }}</p>
                </div>
              </div>
              <div class="reviews">
                <p>{{ item.reviews }}</p>
              </div>

              <div class="user">
                <div class="ava">
                  <img :src="item.user.ava" alt="">
                </div>

                <div class="user__info">
                  <div class="user__info-name">{{ item.user.name }}</div>
                  <div class="user__info-city">{{ item.user.city }}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {db} from "@/firebase/firebase";
import {getDocs, collection} from "firebase/firestore";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation} from 'swiper/modules'
import 'swiper/css'

const arrayReviews = ref([]);

async function getTeachers() {
  const querySnapshot = await getDocs(collection(db, "publicReviews"));
  querySnapshot.forEach((doc) => {
    arrayReviews.value.push(doc.data());
  });
}

onMounted(() => {
  getTeachers();
})
</script>


<style lang="scss">
.reviews-course {
  margin-top: 33px;

  .container {
    padding-left: 137px;
  }

  &__title {
    h3 {
      color: #292C32;
      font-family: EB Garamond, serif;
      font-size: 50px;
      font-weight: 600;
      line-height: normal;
    }
  }

  &__swiper {
    .swiper {
      padding: 35px 0;

      .swiper-slide {
        padding-top: 36px;
        padding-left: 32px;
        border-radius: 10px;
        padding-right: 31px;
        background: #FFF;
        box-shadow: 0 10px 50px 0 rgba(42, 102, 193, 0.15);
        width: 543px !important;
        height: 290px !important;
        overflow: hidden;

        .slide-info {
          .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .course {
              border-radius: 20px;
              background: #FA6655;
              padding: 8px 0;
              color: #FFF;
              font-size: 15px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 22.5px */
              width: 180px;
              text-align: center;
            }

            .date {
              color: #8B919E;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              transform: translateY(-3px);
            }
          }

          .reviews {
            margin-top: 16px;
            color: #454B58;
            font-size: 14px;
            font-weight: 400;
            line-height: 25px;
            margin-bottom: 20px;
          }

          .user {
            display: flex;
            align-items: center;

            &__info-name {
              color: #292C32;
              font-size: 16px;
              font-weight: 700;
              line-height: 1;
              margin-bottom: 8px;
            }

            &__info-city {
              color: #454B58;
              font-size: 14px;
              font-weight: 500;
              line-height: 1;
            }
          }

          .ava {
            width: 65px;
            height: 65px;
            overflow: hidden;
            margin-right: 16px;
            border-radius: 100px;
          }
        }
      }
    }
  }
}
</style>
