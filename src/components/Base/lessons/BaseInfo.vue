<template>
 <div class="base-info">
  <div class="base-info__input">
    <p>Название урока</p>
    <input
    v-model="data.name" 
    style="margin-top: 6px;"
    type="text" name="" id="">
  </div>

  <div class="base-info__input" style="margin-top: 19px;">
    <p>Назначить преподавателя</p>
    <TheSelect
      style="margin-top: 4px; width: 100%;"
      :items="teached"
      @setActiveSelect="newTeacher"
      :idx="data.teachers"
    />
  </div>

  <div class="base-info__wrapper"
  style="margin-top: 14px;">
    <div class="base-info__wrapper-left">
      <div class="base-info__input" style="width: 330px;">
        <p>Дата урока</p>
        <input
        class="date"
        v-model="data.dateLessons" 
        style="margin-top: 6px;"
        type="date" name="" id="">
      </div>

      <div class="base-info__input" style="width: 330px; margin-top: 18px;">
       <p>Период набора участников</p>
       <div class="flex" style="display: flex; align-items: center; justify-content: space-between;">
          <div class="item">
            <input
            class="date"
            v-model="data.datePeriod[0]" 
            style="margin-top: 6px; width: 154px;"
            type="date" name="" id="">
          </div>
          <span>-</span>
          <div class="item">
            <input
            class="date"
            v-model="data.datePeriod[1]" 
            style="margin-top: 6px; width: 154px;"
            type="date" name="" id="">
          </div>
       </div>
       
      </div>

      <div class="base-info__input"
       style="width: 330px; margin-top: 15px;">
        <p>Время начала урока</p>
        
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          :items="TeachersHelpers.timeStart"
          @setActiveSelect="newTime"
          :idx="data.lessonsStart"
          />
      </div>

      <div class="base-info__input"
       style="width: 330px; margin-top: 15px;">
        <p>Длительность урока</p>
        
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          :items="TeachersHelpers.timed"
          @setActiveSelect="lessTimed"
          :idx="data.lessonsTime"
          />
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 11px;">
        <p>Стоимость урока</p>
        <input
        v-model="data.priceLessons"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 18px;">
        <p>Минимальное кол-во участников</p>
        <input
        v-model="data.minStudent"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>     
    </div>

    <div class="base-info__wrapper-right">
      <div class="base-info__input"
       style="width: 330px; ">
        <p>Уровень учеников</p>
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          :items="TeachersHelpers.typed"
          @setActiveSelect="addLvl"
          :idx="data.lvlStudent"
          />
      </div>
      <div class="base-info__input"
       style="width: 330px; margin-top: 13px;">
        <p>Возраст учеников</p>
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          @setActiveSelect="addYear"
          :items="TeachersHelpers.years"
          :idx="data.yearsStudent"
          />
      </div>
      <div class="base-info__input" 
      style="width: 330px; margin-top: 14px;">
        <p>Описание урока</p>
        <textarea  v-model="data.about" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="base-info__input" 
      style="width: 330px; margin-top: 10px;">
        <p>Максимальное кол-во учеников</p>
        <input
        v-model="data.maxStudent"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>
      
    </div>
  </div>
 </div>
</template>

<script setup>

import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TeachersHelpers from '../../../mixins/TeachersHelpers'

const props = defineProps({
  data:{
    type: Object,
    default: {},
  },
  teached: {
    type: Array,
    default: [],
  }
})

function newTeacher(idx){
  props.data.teachers = idx;
}

function newTime(idx){
  props.data.lessonsStart = idx;
}

function lessTimed(idx){
  props.data.lessonsTime = idx;
}

function addLvl(idx){
  props.data.lvlStudent = idx;
}

function addYear(idx){
  props.data.yearsStudent = idx;
}



</script>

<style lang="scss" scoped>
.base-info{
  margin-bottom: 10px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  max-width: 782px;
  width: 100%;
  padding: 40px 45px;

  &__input{
    position: relative;
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
        width: 100%;
        margin-top: 3px;
        padding: 5px 10px;
        font-size: 13px;
      }

      textarea{
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        width: 100%;
        margin-top: 3px;
        padding: 5px 10px;
        font-size: 13px;
        resize: none;
        height: 189px;
      }

     .date::-webkit-calendar-picker-indicator {
        color: transparent;
        opacity: 1;
        background: url('../../../assets/icons/course/Calendar.svg') no-repeat center;
        background-size: contain;
      }
  }

  &__wrapper{
    display: flex;

    &-left{
      margin-right: 29px;
    }
  }

}
</style>