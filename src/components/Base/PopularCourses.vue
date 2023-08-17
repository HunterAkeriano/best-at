<template>
  <div class="popular-courses">
    <div class="container">
      <h2>Популярные курсы</h2>
      <div class="popular-courses__wrapper" style="height: 410px;">
        <div class="popular-courses__card" v-for="item in arrayCourse">
          <div class="popular-courses__card-img" >
            <img :src="item.img" alt="" width="315" height="240">
          </div>

          <div class="popular-courses__card-content">
            <div class="popular-courses__card-title" style="height: 46px;">{{ item.title }}</div>

            <Button
                :width="130"
                :padding="10"
            >
              Начать
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { db } from "@/firebase/firebase";
import {getDocs,  collection} from "firebase/firestore";

import Button from '@/components/UI/Buttons/Button.vue'

const arrayCourse = ref([]);
async function getCourse(){
  const querySnapshot = await getDocs(collection(db, "homeCousrse"));
  querySnapshot.forEach((doc) => {
    arrayCourse.value.push(doc.data());
  });
}

onMounted(() => {
  getCourse();
})

</script>

<style scoped lang="scss">
.popular-courses {
  margin-top: 95px;
  margin-bottom: 124px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
  }

  &__card {
    max-width: 315px;
    background: #FFF;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-img {
      width: 315px;
      height: 240px;
      background: #8B919E;
    }

    &-content {
      padding: 26px 22px 35px 23px;
    }

    &-title {
      color: #292C32;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      margin-bottom: 24px;
    }
  }
}
</style>
