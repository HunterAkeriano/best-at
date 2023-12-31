<template>
  <div class="teacher-card">
    <div class="teacher-card__column">
      <div class="teacher-card__pfp">
        <div class="teacher-card__fav">
          <Heart/>
        </div>

        <img :src="teacher.photo" alt="">
      </div>

      <TheStars :rating="teacher.rate"/>

      <div class="teacher-card__recommended" style="display: none"/>
    </div>

    <div class="teacher-card__column">
      <div class="teacher-card__info">
        <div class="teacher-card__name">{{ teacher.nameUser }}</div>

        <div class="teacher-card__country">{{ TeachersHelpers.country[teacher.countryUser].title }}</div>
      </div>

      <div class="teacher-card__info">
        <div class="teacher-card__label">Язык обучения</div>

        <div class="teacher-card__text">{{ TeachersHelpers.langeuages[teacher.langTeacher].title }}</div>
      </div>

      <div class="teacher-card__info">
        <div class="teacher-card__label">Языки общения</div>

        <div class="teacher-card__text">{{ TeachersHelpers.langeuages[teacher.langTeacher].title }}</div>
      </div>

      <div class="teacher-card__info">
        <div class="teacher-card__label">Кол-во учеников</div>

        <div class="teacher-card__text">{{ teacher.students }}</div>
      </div>

      <div class="teacher-card__info">
        <div class="teacher-card__label">Кол-во проведенных уроков</div>

        <div class="teacher-card__text">{{ teacher.isLessons }}</div>
      </div>
    </div>

    <div class="teacher-card__column">
      <div class="teacher-card__tabs">
        <div
            class="teacher-card__tab"
            :class="{ 'teacher-card__tab--active': tab === activeTab }"
            v-for="(tab, i) in tabs" :key="i"
            @click="switchTab(tab)"
        >
          {{ tab }}
        </div>
      </div>

      <div class="teacher-card__video" v-if="activeTab === 'Видеоприветствие'">
        <iframe width="277" height="166" :src="teacher.youtbeIframe" title="YouTube video player"
                frameborder="0" allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>

      <div class="teacher-card__description" v-if="activeTab === 'Описание'">
        {{ teacher.description }}
      </div>

      <TheCalendar v-else-if="activeTab === 'Календарь'" mini-calendar/>

      <div class="teacher-card__buttons">
        <Button
            :width="161"
            :padding="16"
            v-if="!isCompany"
        >
          Пробный урок
        </Button>

        <Button
            :width="161"
            :padding="16"
            v-else
        >
          Исключить
        </Button>

        <RouterLink :to="`/teachers/${teacher.id}`">
          <Button
              :width="226"
              :padding="16"
              is-courses
          >
            Профиль преподавателя
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import TheCalendar from '@/components/UI/Calendar/TheCalendar.vue'
import Button from '@/components/UI/Buttons/Button.vue'
import TheStars from '@/components/UI/Stars/TheStars.vue'
import Heart from '@/assets/icons/Heart.vue'
import TeachersHelpers from '../../../mixins/TeachersHelpers'


defineProps({
  teacher: {
    type: Object,
    default: () => {
    }
  },
  isCompany: {
    type: Boolean,
    default: false
  }
})

const tabs = ['Видеоприветствие', 'Описание', 'Календарь']
const activeTab = ref('Видеоприветствие')

function switchTab(tab) {
  activeTab.value = tab
}
</script>

<style scoped lang="scss">
.teacher-card {
  width: 1030px;
  height: 370px;
  display: flex;
  align-items: flex-start;
  padding: 37px 35px 35px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
  margin-bottom: 20px;

  &__column {
    display: flex;
    flex-direction: column;
    margin-right: 33px;
    max-width: 403px;
    height: 100%;

    &:nth-last-child(1) {
      margin-right: 8px;
      margin-left: auto;
    }
  }

  &__pfp {
    width: 155px;
    height: 155px;
    position: relative;
    margin-bottom: 20px;

    img {
      border-radius: 100px;
    }
  }

  &__fav {
    position: absolute;
    top: 0;
    right: -5px;
    width: 46px;
    height: 46px;
    display: flex;
    background: #FFFFFF;
    border-radius: 100px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
    justify-content: center;
    align-items: center;
  }

  &__recommended {
    width: 144px;
    height: 36px;
    border-radius: 20px;
    background: #28DA9A;
    margin: 0 auto;
  }

  &__info {
    margin-bottom: 19px;
  }

  &__name {
    color: #292C32;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 7px;
  }

  &__country {
    opacity: 0.7;
    color: #454B58;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 6px;
  }

  &__label {
    color: #8B919E;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
  }

  &__text {
    color: #292C32;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
  }

  &__tabs {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 15px;
  }

  &__tab {
    cursor: pointer;
    opacity: 0.6;
    color: #454B58;
    margin-right: 25px;
    transition: all 0.3s ease;

    &:nth-last-child(1) {
      margin-right: 0;
    }

    &:hover,
    &--active {
      opacity: 1;
      color: #F04973;
      text-shadow: 0 0 1px #F04973;
    }
  }

  &__description {
    color: #454B58;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px
  }

  &__buttons {
    display: flex;
    margin-top: auto;
    margin-bottom: 7px;

    .ui-button_courses {
      margin-left: 16px;
    }
  }

}
</style>
