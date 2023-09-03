<template>
 <div class="base-info">
  <div class="base-info__input">
    <p>Название курса</p>
    <input
    v-model="data.name" 
    style="margin-top: 6px;"
    type="text" name="" id="">
  </div>

  <div class="base-info__wrapper"
  style="margin-top: 19px;">
    <div class="base-info__wrapper-left">
      <div class="base-info__input" style="width: 330px;">
        <p>Дата начала курса</p>
        <input
        class="date"
        v-model="data.date" 
        style="margin-top: 6px;"
        type="date" name="" id="">
      </div>

      <div class="base-info__input"
       style="width: 330px; margin-top: 15px;">
        <p>Время начала первого урока</p>
        
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          :items="TeachersHelpers.timeStart"
          @setActiveSelect="newTime"
          :idx="data.time"
          />
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 15px;">
        <p>Кол-во часов на онлайн-уроки</p>
        <input
        v-model="data.timeLessons"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 18px;">
        <p>Кол-во часов на самостоятельную работу</p>
        <input
        v-model="data.timeOut"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 18px;">
        <p>Кол-во часов на выполнение тестов</p>
        <input
        v-model="data.timeTest"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>

      <div class="base-info__input" 
      style="width: 330px; margin-top: 18px;">
        <p>Стоимость урока</p>
        <input
        v-model="data.pricelessons"
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
          :idx="data.lvl"
          />
      </div>
      <div class="base-info__input"
       style="width: 330px; margin-top: 13px;">
        <p>Возраст учеников</p>
        <TheSelect
          style="margin-top: 6px; width: 330px;"
          :items="TeachersHelpers.years"
          @setActiveSelect="newYear"
          :idx="data.years"
          />
      </div>
      <div class="base-info__input" 
      style="width: 330px; margin-top: 13px;">
        <p>Максимальное кол-во учеников</p>
        <input
        v-model="data.maxStudent"
        style="margin-top: 6px;"
        type="text" name="" id="">
      </div>
      <div class="base-info__input" 
      style="width: 330px; margin-top: 19px;">
        <p>Описание курса</p>
        <textarea  v-model="data.about" name="" id="" cols="30" rows="10"></textarea>
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
  }
})

function newTime(idx){
  props.data.time = idx;
}

function addLvl(idx){
  props.data.lvl = idx;
}

function newYear(idx){
  props.data.years = idx;
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
  height: 615px;

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