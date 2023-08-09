<template>
  <div class="container">
    <div class="how-we-work">
      <h2>Как мы работаем</h2>

      <div class="how-we-work__bg">
        <Path />
      </div>

      <div class="how-we-work__wrapper">
        <div class="how-we-work__step" v-for="(step, index) in steps" :key="index">
          <div class="how-we-work__step-number">{{ step.number }}</div>

          <div class="how-we-work__step-content">
            <component :is="step.icon" />

            <div class="how-we-work__step-title">{{ step.title }}</div>

            <p class="how-we-work__step-text">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Path from '@/assets/icons/main/how-we-work/Path.vue'
import StepOne from '@/assets/icons/main/how-we-work/StepOne.vue'
import StepTwo from '@/assets/icons/main/how-we-work/StepTwo.vue'
import StepThree from '@/assets/icons/main/how-we-work/StepThree.vue'

const steps = [
  {
    number: '01',
    icon: StepOne,
    title: 'Найдите преподавателя',
    text: 'Независимо от бюджета и предпочтений, вы точно сможете найти подходящего для себя учителя.'
  },
  {
    number: '02',
    icon: StepTwo,
    title: 'Пройдите урок',
    text: 'Уроки проходят прямо в вашем браузере. Никаких дополнительных загрузок и регистраций на сторонних сервисах.'
  },
  {
    number: '03',
    icon: StepThree,
    title: 'Учитесь каждый день и добивайтесь прогресса',
    text: 'Планы уроков, отчеты, сертификаты по окончании каждого этапа позволят вам с легкостью отслеживать прогресс'
  }
]
</script>

<style scoped lang="scss">
.how-we-work {
  margin: 0 28px;
  position: relative;

  &__bg {
    position: absolute;
    left: 172px;
    top: 102px;
  }

  &__wrapper {
    display: flex;
    position: relative;
    margin-top: 43px;
  }

  &__step {
    display: flex;
    min-width: 406px;
    margin-right: 60px;

    &:nth-last-child(1) {
      margin-right: 0;
    }

    &-number {
      color: #fff;
      margin-top: 8px;
      font-size: 58px;
      font-weight: 700;
      line-height: 58px;
      margin-right: 23px;
      letter-spacing: 2.32px;
      font-family: EB Garamond, serif;
      text-shadow: -1px -1px 0 #F04973, 1px -1px 0 #F04973, -1px 1px 0 #F04973, 1px 1px 0 #F04973;
    }

    &-title {
      color: #292C32;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      margin-top: 14px;
      max-width: 300px;
    }

    &-text {
      color: #454B58;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      margin-top: 11px;
    }
  }
}
</style>
