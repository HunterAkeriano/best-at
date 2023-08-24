<template>
  <div class="useful-articles">
    <div class="useful-articles__bg">
      <img src="../../../assets/img/teachers-catalog/useful-articles-bg.png" alt="">
    </div>

    <div class="container">
      <h2>Полезные статьи</h2>

      <div class="useful-articles__wrapper">
        <div class="useful-articles__card" v-for="item in arrayCourse">
          <div class="useful-articles__card-img">
            <img :src="item.img" alt="" width="315" height="200">
          </div>

          <div class="useful-articles__card-content">
            <div class="useful-articles__card-title">{{ item.title }}</div>

            <div class="useful-articles__card-description">
              Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы...
            </div>

            <Button
                :width="140"
                :padding="10"
            >
              Детальнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {db} from '@/firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'
import Button from '@/components/UI/Buttons/Button.vue'

const arrayCourse = ref([]);

async function getCourse() {
  const querySnapshot = await getDocs(collection(db, "homeCousrse"));
  querySnapshot.forEach((doc) => {
    arrayCourse.value.push(doc.data());
  });
}

onMounted(() => {
  getCourse()
})
</script>

<style scoped lang="scss">
.useful-articles {
  height: 728px;
  position: relative;
  margin-top: 70px;
  background: #F2F5FA;

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h2 {
    padding-top: 75px;
    position: relative;
    line-height: normal;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 35px;
  }

  &__card {
    height: 449px;
    max-width: 315px;
    background: #FFF;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-img {
      width: 315px;
      height: 200px;
      background: #8B919E;

      img {
        object-fit: cover;
      }
    }

    &-content {
      height: 249px;
      display: flex;
      flex-direction: column;
      padding: 26px 22px 30px 23px;
    }

    &-title {
      height: 46px;
      color: #292C32;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      margin-bottom: 12px;
    }

    &-description {
      color: #454B58;
      font-size: 14px;
      line-height: 25px;
      margin-bottom: auto;
    }
  }
}
</style>
