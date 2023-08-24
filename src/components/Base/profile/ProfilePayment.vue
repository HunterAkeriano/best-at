<template>
  <div class="payments">
    <div class="payments__title">
      <h4>Платежная информация</h4>
    </div>
    <div class="payments__subtitle">
      <h5>Список привязанных карт</h5>
    </div>

    <div class="payments__cards">
      <div class="payments__cards-card"
        v-for="(card, idx) in cards"
        >
        <div class="card"
        @click="editCardFun(idx)">
          <div class="card__img">
            <component :is="selectCard(card.number)"/>
          </div>
          <div class="card__info">
            <h5>{{ infoCard(card.number) }}</h5>
            <p>{{ lastWord(card.number) }}</p>
          </div>
        </div>

        <div class="info">
          <h3 v-if="card.main">Основная карта</h3>
          <h4 @click="selectMain(idx)" v-else>Сделать основной</h4>
          <div class="info__delete">
            <DeleteIcon/>
            <p>Удалить</p>
          </div>
        </div>
      </div>
    </div>

    <div class="payments__components" v-if="editCards">
      <EditCard
      :index="idxCardEdit"
      />
      <div class="payments__components-btn"
      style="display: flex; align-items: center;"
      >
        <TheButton
          :width="239"
          :padding="15"
          style="margin-top: 25px;"
          @click="editUser()"
          >Сохранить изменения</TheButton>

          <p 
          style="color: #8B919E;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
          text-decoration: underline;
          margin-top: 20px;
          margin-left: 25px;
          cursor: pointer;">Отмена</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue';

import MasterCardIcon from '@/assets/icons/profile/MasterCard.vue'
import VisaCardIcon from '@/assets/icons/profile/VisaCard.vue'
import DeleteIcon from '@/assets/icons/profile/DeleteIcon.vue'

import EditCard from '../profile/payments/Edit.vue'
import TheButton from '@/components/UI/Buttons/Button.vue'

const cards = ref([
  {
    main: true,
    number: '4441 5588 6666 8888',
    user: 'Дмитрий Гулак',
    timed: '02/25',
    cvv: '223',
  },

  {
    main: false,
    number: '5556 5588 6666 8888',
    user: 'Дмитрий Гулак',
    timed: '02/25',
    cvv: '223',
  }
])

function selectCard(cardNumber) {
  const firstDigits = cardNumber.substring(0, 4);

  if (firstDigits === '4441') {
    return VisaCardIcon;
  } else {
    return MasterCardIcon;
  }
}

function infoCard(cardNumber) {
  const firstDigits = cardNumber.substring(0, 4);

  if (firstDigits === '4441') {
    return 'Visa Classic';
  } else {
    return 'Master Card';
  }
}

function lastWord(cardNumber) {
  const lastDigits = cardNumber.slice(-4);
  const maskedPart = '**** '
  return maskedPart + lastDigits;
}

function selectMain(idx) {
  if (idx >= 0 && idx < cards.value.length) {
    const updatedCards = cards.value.map((item, index) => {
      return { ...item, main: index === idx };
    });
    cards.value = updatedCards;
  }
}

const editCards = ref(false);
const idxCardEdit = ref(0);

function editCardFun(idx){
  editCards.value = true;
  idxCardEdit.value = idx;
}


</script>

<style lang="scss">
.payments{
  margin-top: 2px;
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
  &__subtitle{
    margin-top: 23px;
    h5{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px; /* 126.667% */

    }
  }

  &__cards{
    margin-top: 16px;
    &-card{
      margin-bottom: 16px;
      .card{
        display: flex;
        align-items: center;
        border: 1px solid #DCE3E8;
        width: 363px;
        padding: 16px 22px;
        cursor: pointer;

        &__img{
          transform: translateX(-2px) translateY(1px);
        }

        &__info{
          margin-left: 20px;
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
            font-weight: 400;
            line-height: 182.85%; /* 25.599px */
            opacity: 0.8;
          }
        }
      }

      .info{
        display: flex;
        justify-content: space-between;
        margin-top: 2px;

        h3{
          color: #454B58;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 182.85%; /* 25.599px */
        }

        h4{
          color: #8B919E;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 182.85%; /* 25.599px */
          text-decoration-line: underline;
          cursor: pointer;
        }

        .info__delete{
          display: flex;
          align-items: center;
          cursor: pointer;

          svg{
            margin-right: 7px;
          }
          p{
            color: #8B919E;
            font-family: Montserrat;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: 182.85%; /* 23.771px */
            text-decoration-line: underline;
          }
        }
      }
    }
  }
}
</style>