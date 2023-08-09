<template>
  <div class="modal">
    <div class="modal__bg" />

    <div class="modal__close" @click="modalsStore.closeModal">
      <Close />
    </div>

    <h1 class="modal__title">Пробный урок</h1>

    <div class="modal__body">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useModalsStore } from '@/stores/modals'
import Close from '@/assets/icons/modal/Close.vue'


const modalsStore = useModalsStore()

const modals = ref([
    'Пробный урок',
    'Действительно ли удаляем ваш аккаунт?',
    'Исключить из команды',
    'Действительно исключить преподавателя из команды?',
    'Отменить урок',
    'Перенести урок',
    'Добавить отзыв о преподавателе',
    'Исключить ученика'
])
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #FFF url("../../assets/img/modal/modal-bg.png") no-repeat;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__close {
    position: absolute;
    right: 11px;
    top: 11px;
  }

  &__title {
    margin-top: 268px;
    color: #292C32;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
  }

  &__body {
    padding: 40px;
    margin-top: 30px;
    background: #FFF;
    max-width: 420px;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
  }
}
</style>
