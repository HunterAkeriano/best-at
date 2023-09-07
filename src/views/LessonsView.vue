<template>
  <div class="main page">
    <div class="container">
      <div class="page__navigation">
        <a class="page__navigation-link">
          Главная
        </a>

        <p class="page__navigation-current">
          <span>/</span> Список уроков
        </p>
      </div>

      <h1 class="page__title">Список групповых занятий</h1>

      <div class="page__content">
        <div class="page__content-filter">
          <div class="filter__title">Фильтры</div>

          <div class="filter__label">Язык преподавания</div>
          <TheSelect
              :items="TeachersHelpers.langeuages"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Время преподавания</div>
          <TheSelect
              @setActiveSelect="setLessonTime"
              :items="TeachersHelpers.times"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Страна преподавателя</div>
          <TheSelect
              :items="TeachersHelpers.country"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Язык общения</div>
          <TheSelect
              :items="TeachersHelpers.langeuages"
              style="margin-bottom: 15px;"
          />

          <div class="filter__range">
            <div class="filter__label">Цена</div>
            <div class="range">
              <div class="range__input">
                <div class="range__input-one">
                  <input
                      type="text"
                      v-model="value[0]"
                      @input="handleMaxInput"
                  />
                </div>
                <span>-</span>
                <div class="range__input-two">
                  <input
                      type="text"
                      :max="highestPrice"
                      v-model="value[1]"
                      @input="handleMinInput"
                  />
                </div>
              </div>
              <div class="range__slider">
                <Slider
                    v-model="value"
                    :min="lowestPrice"
                    :max="highestPrice"
                    :step="100"
                />
              </div>
            </div>
          </div>

          <div class="filter__label">Пол</div>
          <TheSelect
              :items="TeachersHelpers.gender"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Подготовка к тестам</div>
          <TheSelect
              :items="TeachersHelpers.timeLessons"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Аспекты обучения</div>
          <TheSelect
              :items="TeachersHelpers.asspects"
              style="margin-bottom: 15px;"
          />

          <div class="filter__label">Возраст обучения</div>
          <TheSelect
              @setActiveSelect="setTeachYear"
              :items="TeachersHelpers.years"
              style="margin-bottom: 15px;"
          />

          <Button
              :width="220"
              :padding="16"
              uppercase-text
              class="filter__button"
              @click="applyFilters"
          >
            Применить
          </Button>

          <div class="filter__reset" @click="resetFilters">Сбросить фильтр</div>
        </div>

        <div class="page__content-wrapper" v-if="paginateUsers().length > 0">
          <div class="page__content-lessons">
            <LessonCard
                v-for="lesson in lessonsArray" :key="lesson.idx"
                :card="lesson" :teacher="getTeacher(lesson.teachers)"
            />
          </div>

          <ThePagination
              v-if="pages>1"
              :total-pages="pages"
              :current-page="currentPage"
              @changePage="changePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeMount, ref} from 'vue'
import {db} from '@/firebase/firebase'
import {collection, getDocs} from 'firebase/firestore'
import TeachersHelpers from '../mixins/TeachersHelpers'
import LessonCard from '@/components/Base/lessons/LessonCard.vue'
import ThePagination from '@/components/UI/pagination/ThePagination.vue'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import Button from '@/components/UI/Buttons/Button.vue'
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.scss"


const lessonsArray = ref([])
const teachersArray = ref([])

async function getTeachers() {
  const querySnapshot = await getDocs(collection(db, "publishedTeachers"));
  querySnapshot.forEach((doc) => {
    teachersArray.value.push(doc.data())
  })
}

async function getLessons() {
  const querySnapshot = await getDocs(collection(db, "lessons"));
  querySnapshot.forEach((doc) => {
    lessonsArray.value.push(doc.data())
  })
}

function getTeacher(idx) {
  const photo = teachersArray.value[idx].photo
  const name = teachersArray.value[idx].nameUser
  return { photo, name }
}

const value = ref([0, 1000000])
const lowestPrice = ref(0)
const highestPrice = ref(1000000)

function calculateRange() {
  let lowest = Number.POSITIVE_INFINITY
  let highest = Number.NEGATIVE_INFINITY
  let tmp
  for (let i = lessonsArray.value.length - 1; i >= 0; i--) {
    tmp = Number(lessonsArray.value[i].priceLessons)
    if (tmp < lowest) lowest = tmp
    if (tmp > highest) highest = tmp
  }
  value.value[0] = lowestPrice.value = lowest
  value.value[1] = highestPrice.value = highest
}

onBeforeMount(() => {
  getTeachers()
  getLessons().then(() => {
    calculateRange()
    paginateUsers()
  })
})

const isApplied = ref(false)

const lessonTime = ref(undefined)

function setLessonTime(idx) {
  lessonTime.value = idx
}

function handleMaxInput(event) {
  const inputValue = event.target.value.replace(/[^0-9]/g, "")
  value.value[0] = inputValue !== "" ? parseInt(inputValue) : 0
  if (value.value[0] > highestPrice.value) {
    value.value[0] = highestPrice.value
  }
}

function handleMinInput(event) {
  const inputValue = event.target.value.replace(/[^0-9]/g, "")
  value.value[1] = inputValue !== "" ? parseInt(inputValue) : 0
  if (value.value[1] > highestPrice.value) {
    value.value[1] = highestPrice.value
  }
}

const teachYear = ref(undefined)

function setTeachYear(idx) {
  teachYear.value = idx
}


function filteredByLessonTime() {
  if (lessonTime.value !== undefined) {
    return lessonsArray.value.filter(lesson => lesson.lessonsStart === lessonTime.value)
  } else {
    return lessonsArray.value
  }
}

function filteredByPrice() {
  return filteredByLessonTime().filter(lesson => +(lesson.priceLessons) >= value.value[0] && +(lesson.priceLessons) <= value.value[1])
}

function filteredByTeachYear() {
  if (teachYear.value !== undefined) {
    return filteredByPrice().filter(lesson => lesson.yearsStudent === teachYear.value)
  } else {
    return filteredByPrice()
  }
}

const currentPage = ref(1)
const pages = computed(() => {
  if (isApplied.value) {
    return Math.ceil(filteredByTeachYear().length / 6)
  } else {
    return Math.ceil(lessonsArray.value.length / 6)
  }
})

function changePage(page) {
  currentPage.value = page
}

function paginateUsers() {
  let from = (currentPage.value - 1) * 6
  let to = from + 6
  if (isApplied.value) {
    return filteredByTeachYear().slice(from, to)
  } else {
    return lessonsArray.value.slice(from, to)
  }
}

function applyFilters() {
  paginateUsers()
  isApplied.value = true
  currentPage.value = 1
}

function resetFilters() {
  lessonTime.value = undefined
  teachYear.value = undefined
  isApplied.value = false
  currentPage.value = 1
}
</script>

<style scoped lang="scss">
.page__navigation {
  display: flex;
  margin: 23px 0 24px;
  font-size: 14px;
  line-height: 16px;

  &-link {
    cursor: pointer;
    color: #454B58;
  }

  &-current {
    margin-left: 10px;
    color: #7D7F83;

    span {
      margin-right: 4px;
    }
  }
}

.page__title {
  color: #292C32;
  font-family: EB Garamond, serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2;
}

.page__content {
  display: flex;
  align-items: flex-start;
  padding: 27px 0 30px;

  &-filter {
    min-width: 280px;
    height: 965px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
    margin-right: 70px;
  }

  &-wrapper {
    width: 100%;
    display: flex;
    background: #FFF;
    flex-direction: column;
    border-radius: 10px;
    padding: 40px 45px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
  }

  &-lessons {
    display: flex;
    flex-wrap: wrap;
  }
}

.filter {

  &__title {
    color: #292C32;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 11px;
  }

  &__label {
    color: #8B919E;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    margin-bottom: 2px;
  }

  &__item {
    width: 100%;
    height: 35px;
    border-radius: 20px;
    background: #F2F5FA;
    margin-bottom: 15px;
  }

  &__range {
    margin: 25px 0 45px;
  }

  &__button {
    margin-top: 17px;
  }

  &__reset {
    cursor: pointer;
    margin-top: 15px;
    color: #F04973;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    text-decoration-line: underline;
  }
}

.range {

  &__input {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      border-radius: 20px;
      background: #F2F5FA;
      max-width: 100px;
      border: 0;
      padding-left: 20px;
      padding-top: 6px;
      padding-bottom: 5px;
      font-family: Montserrat, sans-serif;
      font-size: 13px;
      color: #454B58;

      &:focus {
        border: 0;
        outline: 0;
      }
    }
  }

  &__slider {
    margin-top: 30px;
    padding-left: 6px;
    padding-right: 9px;
  }
}

.slider-tooltip {
  display: none;
}

.slider-horizontal {
  height: 2px;
}

.slider-horizontal .slider-handle {
  width: 14px;
  height: 14px;
  top: -5px;
  right: calc(18px / 2 * (-1));
}

.slider-base {
  background-color: #D7D7D7;
  border-radius: 2px;
}

.slider-connects {
  border-radius: 2px;
}

.slider-connect {
  background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
  cursor: pointer;
}

.slider-handle {
  overflow: visible;
  width: 10px;
  height: 10px;
  border: 2px solid #FA6655;
  background: white;
  border-radius: 100%;
  cursor: grab;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
