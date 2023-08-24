<template>
  <div class="edit">
    <h3>Редактировать карту</h3>

    <div class="edit__input" style="margin-top: 20px;">
      <p>Номер карты</p>
      <input type="text" 
      v-model="cards[index].number"
      @input="onCardNumberInput"
      maxlength="19">
    </div>

    <div class="edit__input" style="margin-top: 15px;">
      <p>Владелец карты</p>
      <input type="text" 
      v-model="cards[index].user">
    </div>

    <div class="blocks" style="display: flex; gap: 25px; align-items: center;">
      <div class="edit__input" style="margin-top: 15px;">
      <p>Срок действия карты</p>
      <input type="text"
      @input="onCardTimedInput"
      style="width: 172px;" 
      maxlength="5"
      v-model="cards[0].timed">
    </div>
    <div class="edit__input" style="margin-top: 15px;">
      <p>CVV</p>
      <input type="text" 
      style="width: 131px;" 
      @input="onCardCvvInput"
      maxlength="3"
      v-model="cards[0].cvv">
    </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const cards = ref([
  {
    main: true,
    number: '4441558866668888',
    user: 'Дмитрий Гулак',
    timed: '02/25',
    cvv: '223',
  },

  {
    main: true,
    number: '4441558866668888',
    user: 'Святослав Иващенко',
    timed: '02/25',
    cvv: '223',
  },
])


const props = defineProps({
  index: {
    type: Number,
    default: 0,
    required: true,
  }
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
  cards.value[index].number = formatCardNumber(event.target.value);
};


function formatCardTimed(cardTimed) {
  let input = cardTimed.replace(/\D/g, ''); // Оставляем только цифры
  if (input.length > 2) {
    input = input.substring(0, 2) + '/' + input.substring(2);
  }
  return input;
}

const onCardTimedInput = (event) => {
  cards.value[index].timed = formatCardTimed(event.target.value);
};

const onCardCvvInput = (event) => {
  cards.value[index].cvv = event.target.value.replace(/\D/g, '').substring(0, 3);
};


onMounted(() => {
  cards.value[index].number = formatCardNumber(cards.value[0].number);
  cards.value[index].timed = formatCardTimed(cards.value[0].timed);
});

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