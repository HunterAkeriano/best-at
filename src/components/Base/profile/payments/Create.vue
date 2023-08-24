<template>
  <div class="edit" v-if="usersStore.userId !== null">
    <h3>Добавить карту</h3>

    <div class="edit__input" style="margin-top: 20px;">
      <p>Номер карты</p>
      <input type="text" 
      v-model="card.number"
      @input="onCardNumberInput"
      maxlength="19">
    </div>

    <div class="edit__input" style="margin-top: 15px;">
      <p>Владелец карты</p>
      <input type="text" 
      v-model="card.user">
    </div>

    <div class="blocks" style="display: flex; gap: 25px; align-items: center;">
      <div class="edit__input" style="margin-top: 15px;">
      <p>Срок действия карты</p>
      <input type="text"
      @input="onCardTimedInput"
      style="width: 172px;" 
      maxlength="5"
      v-model="card.timed">
    </div>
    <div class="edit__input" style="margin-top: 15px;">
      <p>CVV</p>
      <input type="text" 
      style="width: 131px;" 
      @input="onCardCvvInput"
      maxlength="3"
      v-model="card.cvv">
    </div>
    </div>

    <div class="btn" style="display: flex; align-items: center;">
      <TheButton
          :width="239"
          :padding="15"
          style="margin-top: 25px;"
          @click="createCards"
          >Привязать</TheButton>

          <p 
          style="color: #8B919E;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
          text-decoration: underline;
          margin-top: 20px;
          margin-left: 25px;
          cursor: pointer;"
          >Отмена</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import TheButton from '@/components/UI/Buttons/Button.vue'

import {stateUser} from "@/stores/StateUser";
const usersStore = stateUser();

const card = ref({
  number: '',
  user: '',
  cvv: '',
  timed: '',
})


function formatCardNumber(cardNumber) {
  let input = cardNumber.replace(/\D/g, '');
  const chunks = [];
  while (input.length > 0) {
    chunks.push(input.substring(0, 4));
    input = input.substring(4);
  }
  return chunks.join(' ');
}

const onCardNumberInput = (event) => {
  card.value.number = formatCardNumber(event.target.value);
};


function formatCardTimed(cardTimed) {
  let input = cardTimed.replace(/\D/g, ''); // Оставляем только цифры
  if (input.length > 2) {
    input = input.substring(0, 2) + '/' + input.substring(2);
  }
  return input;
}

const onCardTimedInput = (event) => {
  card.value.timed = formatCardTimed(event.target.value);
};

const onCardCvvInput = (event) => {
  card.value.cvv = event.target.value.replace(/\D/g, '').substring(0, 3);
};
const emits = defineEmits(['close', 'click',]);
import {  doc, updateDoc  } from "firebase/firestore";
import { db } from "@/firebase/firebase";
async function createCards(){
  usersStore.user[usersStore.userId].cards.push(card.value);
  const userData = {
    cards: usersStore.user[usersStore.userId].cards,
  };
  await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
  emits('close');
}

</script>

<style lang="scss">
.edit{
  margin-top: 44px;
  h3{
    color: #292C32;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px; /* 126.667% */
  }

  &__input{
      p{
        color: #8B919E;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; /* 176.923% */
      }

      input{
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        width: 330px;
        margin-top: 3px;
        padding: 5px 10px;
        font-size: 13px;
       }
    }
}
</style>