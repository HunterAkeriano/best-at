<template>
  <div class="container">
    <div class="our-advantages">
      <h2>Наши преимущества</h2>

      <div class="our-advantages__wrapper">
        <div class="our-advantages__card" v-for="(advantage, index) in advantages" :key="index">
          <div class="our-advantages__card-icon" :style="`background: ${advantage.bg}`">
            <component :is="advantage.icon" />
          </div>

          <div class="our-advantages__card-title">{{ advantage.title }}</div>

          <p class="our-advantages__card-text">{{ advantage.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdvantageOne from '@/assets/icons/main/our-advantages/AdvantageOne.vue'
import AdvantageTwo from '@/assets/icons/main/our-advantages/AdvantageTwo.vue'
import AdvantageThree from '@/assets/icons/main/our-advantages/AdvantageThree.vue'
import AdvantageFour from '@/assets/icons/main/our-advantages/AdvantageFour.vue'
import AdvantageFive from '@/assets/icons/main/our-advantages/AdvantageFive.vue'

const advantages = [
  {
    icon: AdvantageOne,
    title: 'Профессиональные учителя',
    text: 'Мы облегчаем задачу поиска учителей с рейтингом 5 звезд, чтобы вы думали только об учебе.',
    bg: '#FDF4FB'
  },
  {
    icon: AdvantageTwo,
    title: 'Комплексная платформа',
    text: 'Вносите уроки в расписание и общайтесь с учителем в окне своего браузера.',
    bg: '#F3F7FC'
  },
  {
    icon: AdvantageThree,
    title: 'Поддержка различных устройств',
    text: 'Заходите с помощью браузеров на вашем ПК, устройствах с ОС iOS и Android – они все поддерживаются.',
    bg: '#F9F9F9'
  },
  {
    icon: AdvantageFour,
    title: 'Индивидуальное обучение',
    text: 'Учитесь, проходя существующие курсы, или просите учителей составлять учебные планы для удовлетворения ваших конкретных потребностей.',
    bg: '#FCF8F4'
  },
  {
    icon: AdvantageFive,
    title: 'Глобальное сообщество',
    text: 'Присоединяйтесь к дружелюбному сообществу людей со всего мира, которым нравится изучать языки.',
    bg: '#F2FBF3'
  }
]
</script>

<style scoped lang="scss">
.our-advantages {
  width: 1380px;
  height: 1022px;
  margin-top: 100px;
  padding-top: 71px;
  background: #F2F5FA url("../../assets/img/main/our-advantages-bg.png") no-repeat;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 45px;
  }

  &__card {
    width: 350px;
    height: 340px;
    background: #FFF;
    margin-right: 48px;
    margin-bottom: 48px;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
    display: flex;
    align-items: center;
    flex-direction: column;

    &:nth-last-child(1),
    &:nth-last-child(3) {
      margin-right: 0;
    }

    &-icon {
      width: 104px;
      height: 104px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 39px;
    }

    &-title {
      color: #292C32;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      max-width: 270px;
      margin-top: 21px;
    }

    &-text {
      color: #454B58;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      max-width: 294px;
      margin-top: 14px;
    }
  }
}
</style>
