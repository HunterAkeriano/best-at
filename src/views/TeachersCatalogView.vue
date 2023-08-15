<template>
  <div class="main page">
    <div class="page__bg">

    </div>

    <div class="container">
      <div class="page__navigation">
        <a class="page__navigation-link">
          Главная
        </a>

        <p class="page__navigation-current">
          <span>/</span> Список преподавателей
        </p>
      </div>

      <h1 class="page__title">Список преподавателей</h1>

      <div class="page__content">
        <!--    Component?    -->
        <div class="page__content-filter">
          <div class="filter__title">Фильтры</div>

          <div class="filter__label">Язык преподавания</div>
          <TheSelect 
          :items="TeachersHelpers.langeuages"
          style="margin-bottom: 15px;"
          />

          <div class="filter__label">Время преподавания</div>
          <TheSelect 
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
            <div class="filter__label" @click="el">Цена</div>
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
                  max="1000000"
                  v-model="value[1]" 
                  @input="handleMinInput"
                  />
                </div>
              </div>
              <div class="range__slider">
                <Slider
                v-model="value"
                :min="0"
                :max="1000000"
                :step="500"
                />
              </div>
            </div>
          </div>

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__button" />

          <div class="filter__reset">Сбросить фильтр</div>
        </div>

        <div class="page__content-wrapper">
          <TeacherCard
              v-for="card in 6" :key="card"
          />

          <div class="page__content-pagination" />
        </div>
      </div>
    </div>

    <div class="page__section">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import TeachersHelpers from '../mixins/TeachersHelpers';
import TeacherCard from '@/components/Base/TeachersCatalogCard.vue'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'

import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.scss"

const value = ref([0, 1000000])

function handleMaxInput(event) {
  const inputValue = event.target.value.replace(/[^0-9]/g, "")
  value.value[0] = inputValue !== "" ? parseInt(inputValue) : 0
  if (value.value[0] > 1000000) {
    value.value[0] = 1000000
  }
}

function handleMinInput(event) {
  const inputValue = event.target.value.replace(/[^0-9]/g, "")
  value.value[1] = inputValue !== "" ? parseInt(inputValue) : 0
  if (value.value[1] > 1000000) {
    value.value[1] = 1000000
  }
}


function getActiveTab (tab, id) {
  console.log(tab, id)
}



</script>

<style lang="scss">

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
    //
    min-width: 280px;
    height: 965px;
    //
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
    margin-right: 70px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-pagination {
    //
    width: 245px;
    height: 40px;
    background: #F04973;
    //
    display: flex;
    margin-top: 10px;
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
    //
    width: 100%;
    height: 35px;
    //
    border-radius: 20px;
    background: #F2F5FA;
    margin-bottom: 15px;
  }

  &__range {
    margin: 25px 0 60px;
  }

  &__button {
    //
    width: 100%;
    height: 50px;
    //
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
    box-shadow: 0 15px 25px 0 rgba(193, 42, 61, 0.20);
    margin-top: 17px;

    &:hover {
      background: linear-gradient(90deg, #00D2FF 0%, #2596FF 100%);
    }
  }

  &__reset {
    cursor: pointer;
    margin-top: 14px;
    color: #F04973;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    text-decoration-line: underline;
  }
}


.range{

  &__input{
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
      border-radius: 20px;
      background: #F2F5FA;
      max-width: 100px;
      border: 0;
      padding-left: 20px;
      padding-top: 6px;
      padding-bottom: 5px;
      font-family: Montserrat;
      font-size: 13px;
      color: #454B58;

      &:focus{
        border: 0;
        outline: 0;
      }
    }
  }
  &__slider{
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
  border-radius: 2px;
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
