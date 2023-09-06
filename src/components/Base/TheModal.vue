<template>
  <div class="modal">
    <div class="modal__bg">
      <img src="../../assets/img/modal/modal-bg.png" alt="">
    </div>

    <div class="modal__close" @click="modalsStore.closeModal">
      <Close/>
    </div>

    <h1 class="modal__title">{{ title }}</h1>

    <div class="modal__buttons" v-if="modalsStore.currentModal === 1">
      <Button
          :width="160"
          :padding="16"
          @click="modalsStore.closeModal"
      >
        Отмена
      </Button>

      <Button
          :width="160"
          :padding="16"
          is-courses
          @click="deletesUser"
      >
        Удалить
      </Button>
    </div>

    <div class="modal__body modal__body--big" v-else-if="modalsStore.currentModal === 0">
      <p class="modal__body-label">Дата урока</p>

      <input class="modal__body-input" type="date" v-model="selectedDate"/>

      <div class="modal__times">
        <div class="modal__times-item"
             v-for="(hour, index) in hoursArray" :key="index"
             :class="{ 'modal__times-item--active': hour === '09:00' }"
        >
          <span>{{ hour }}</span>
        </div>
      </div>

      <Button
          :width="240"
          :padding="11"
          @click="modalsStore.closeModal"
      >
        Забронировать
      </Button>
    </div>

    <div class="modal__body modal__body--big" v-else-if="modalsStore.currentModal === 5">
      <p class="modal__body-label">Дата урока</p>

      <input class="modal__body-input" type="date" v-model="selectedDate"/>

      <div class="modal__times">
        <div class="modal__times-item"
             v-for="hour in TeachersHelpers.timeStart" :key="hour.id"
             :class="{ 'modal__times-item--active': hour.title === selectedHour }"
             @click="selectedHour = hour.title"
        >
          <span>{{ hour.title }}</span>
        </div>
      </div>

      <p class="modal__body-label">Причина переноса</p>

      <textarea class="modal__body-textarea modal__body-textarea--small"/>

      <Button
          :width="240"
          :padding="11"
          @click="modalsStore.closeModal"
      >
        Перенести
      </Button>
    </div>

    <div class="modal__body modal__body--big" v-else-if="modalsStore.currentModal === 6">
      <p class="modal__body-label">Напишите ваш отзыв</p>

      <textarea class="modal__body-textarea"/>

      <p class="modal__body-label">Как вы оцените преподавателя?</p>

      <div class="modal__body-select"/>

      <Button
          :width="340"
          :padding="11"
          @click="modalsStore.closeModal"
      >
        Отправить
      </Button>
    </div>

    <div class="modal__body" v-else>
      <p class="modal__body-label" v-if="modalsStore.currentModal === 4">Причина отмены урока</p>

      <p class="modal__body-label" v-else>Причина исключения</p>

      <textarea class="modal__body-textarea"/>

      <Button
          :width="280"
          :padding="11"
          v-if="modalsStore.currentModal === 2"
          @click="modalsStore.closeModal"
      >
        Исключить
      </Button>

      <div class="modal__buttons" v-else-if="modalsStore.currentModal === 3">
        <Button
            :width="132"
            :padding="11"
            @click="modalsStore.closeModal"
        >
          Отмена
        </Button>

        <Button
            :width="132"
            :padding="11"
            is-courses
        >
          Исключить
        </Button>
      </div>

      <Button
          :width="280"
          :padding="11"
          v-else-if="modalsStore.currentModal === 4"
          @click="modalsStore.closeModal"
      >
        Отменить
      </Button>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useModalsStore} from '@/stores/modals'
import Close from '@/assets/icons/modal/Close.vue'
import Button from '@/components/UI/Buttons/Button.vue'
import TeachersHelpers from '../../mixins/TeachersHelpers'

const modalsStore = useModalsStore()

const modals = [
  'Пробный урок',
  'Действительно ли удаляем ваш аккаунт?',
  'Исключить из команды',
  'Действительно исключить преподавателя из команды?',
  'Отменить урок',
  'Перенести урок',
  'Добавить отзыв о преподавателе',
  'Исключить ученика'
]

const title = computed(() => {
  return modals[modalsStore.currentModal]
})


const selectedDate = ref()
const selectedHour = ref()

// Удаление аккаунта
import {deleteDoc, doc} from "firebase/firestore";
import {db, auth} from "@/firebase/firebase";
import {deleteUser, signInWithEmailAndPassword} from "firebase/auth";

import {useRouter} from 'vue-router';
import {stateUser} from "@/stores/StateUser";

const usersStore = stateUser();
const router = useRouter();


async function deletesUser() {
  signInWithEmailAndPassword(auth, usersStore.user[usersStore.userId].email, usersStore.user[usersStore.userId].password)
      .then((userCredential) => {
        const user = userCredential.user;
        deleteUser(user).then(async () => {
          await deleteDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName));
          usersStore.user = [];
          usersStore.userId = null;
          usersStore.auth = null;
          localStorage.setItem('user', null)
          await router.push('/');
          modalsStore.closeModal();
        }).catch((e) => {
          console.log(e);
        });
      })
      .catch((error) => {
        console.log(error);
      });
}

</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #FFF;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__close {
    position: absolute;
    cursor: pointer;
    right: 11px;
    top: 11px;
  }

  &__title {
    color: #292C32;
    line-height: 1;
    font-size: 50px;
    font-weight: 600;
    max-width: 865px;
    margin-top: 268px;
    text-align: center;
  }

  &__body {
    padding: 40px 50px;
    margin-top: 30px;
    background: #FFF;
    min-width: 380px;
    max-width: 420px;
    min-height: 314px;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &--big {
      width: 100%;
      padding: 40px;
    }

    &-label {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: 23px;
      margin-bottom: 8px;
    }

    &-input {
      width: 340px;
      height: 35px;
      padding: 0 17px;
      margin-bottom: 24px;
      border-radius: 20px;
      background: #F2F5FA;
    }

    &-textarea {
      border: none;
      resize: none;
      outline: none;
      width: 100%;
      height: 130px;
      color: #454B58;
      font-size: 13px;
      font-weight: 500;
      line-height: 24px;
      padding: 12px 22px;
      border-radius: 18px;
      background: #F2F5FA;
      margin-bottom: 25px;

      &--small {
        width: 328px;
        height: 75px;
      }
    }

    &-select {
      width: 340px;
      height: 35px;
      border-radius: 20px;
      background: #F2F5FA;
      margin-bottom: 33px;
    }
  }

  &__times {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    &-item {
      width: 60px;
      height: 30px;
      display: flex;
      padding: 10px 0;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #F3F6F9;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.7px;
      margin-right: 10px;
      margin-bottom: 9px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      span {
        opacity: 0.8;
        color: #8B919E;
      }

      &--active {
        background: #F04973;

        span {
          opacity: 1;
          color: #FFF;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    margin-top: 30px;

    .ui-button {

      &:nth-child(1) {
        margin-right: 17px;
      }
    }
  }
}
</style>
