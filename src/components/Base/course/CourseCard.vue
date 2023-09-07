<template>
  <div class="course">
    <div class="course__date">{{ card.date }}</div>

    <div class="course__title">{{ card.name }}</div>

    <div class="course__teacher">
      <img class="course__teacher-pfp" :src="teacher.photo" alt="" width="50" height="50">

      <div>
        <div class="course__teacher-position">преподаватель</div>

        <div class="course__teacher-name">{{ teacher.name }}</div>
      </div>
    </div>

    <div class="course__tags">
      <div class="course__tags-item course__tags-item--mini course__tags-item--time">{{ TeachersHelpers.timeLessons[card.time].title }}</div>

      <div class="course__tags-item course__tags-item--mini course__tags-item--lvl">{{ TeachersHelpers.typed[card.lvl].title }}</div>

      <div class="course__tags-item course__tags-item--mini course__tags-item--years">{{ TeachersHelpers.years[card.years].title }}</div>
    </div>

    <div class="course__first-row">
      <div style="margin-right: 40px">
        <div class="course__label">Зарегистрировались</div>

        <div class="course__value">{{ card.student.length }} человек</div>
      </div>

      <div>
        <div class="course__label">Максимум:</div>

        <div class="course__value">{{ card.maxStudent }} человек</div>
      </div>
    </div>

    <hr>

    <div class="course__row">
      <p>Стоимость курса</p>

      <span>{{ card.pricelessons }} $</span>
    </div>

    <Button
        :width="380"
        :padding="16"
        uppercase-text
    >
      Забронировать
    </Button>
  </div>
</template>

<script setup>
import Button from '@/components/UI/Buttons/Button.vue'
import TeachersHelpers from '../../../mixins/TeachersHelpers'


const props = defineProps({
  card: {
    type: Object,
    default: () => {}
  },
  teacher: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped lang="scss">
.course {
  width: 450px;
  height: 398px;
  margin-right: 40px;
  margin-bottom: 35px;
  padding: 22px 35px 34px;
  border: 1px solid #DCE3E8;
  background: rgba(242, 245, 250, 0.60);

  &:nth-child(2n) {
    margin-right: 0;
  }

  hr {
    background: #DCE3E8;
    margin: 19px 0 12px 0;
  }

  &__date {
    color: #8B919E;
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 7px;
  }

  &__title {
    color: #292C32;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 14px;
  }

  &__teacher {
    display: flex;
    align-items: center;

    &-pfp {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      margin-right: 15px;
      border-radius: 100px;
    }

    &-position {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: normal;
    }

    &-name {
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 600;
      line-height: 19px;
    }
  }

  &__tags {
    display: flex;
    margin-top: 19px;
    margin-bottom: 22px;

    &-item {
      height: 36px;
      display: flex;
      color: #292C32;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      margin-left: 16px;
      align-items: center;
      border-radius: 20px;
      padding: 8px 14px 8px 16px;

      span {
        font-weight: 400;
        margin-right: 4px;
      }

      &:nth-child(1) {
        margin-left: 0;
      }

      &--mini {
        height: 25px;
        font-size: 12px;
        margin-left: 10px;
        padding: 6px 8px 6px 11px;

        &:nth-child(1) {
          margin-left: 0;
        }
      }

      &--time {
        background: #FFDEE4;
      }

      &--exp {
        background: #FDECC8;
      }

      &--lvl {
        background: #E1DAFF;
      }

      &--years {
        background: #D0EEFB;
      }
    }
  }

  &__first-row {
    display: flex;
    max-width: 306px;
    margin-bottom: 14px;
    justify-content: space-between;
  }

  &__label {
    color: #8B919E;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  &__value {
    color: #292C32;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
  }

  &__row {
    display: flex;
    margin-bottom: 16px;
    align-items: flex-end;
    justify-content: space-between;

    span {
      display: block;
      color: #292C32;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
    }

    p {
      color: #454B58;
      font-size: 15px;
      font-weight: 400;
      line-height: 150%;
    }
  }

  &__amount {
    color: #8B919E;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 10px;
  }
}
</style>
