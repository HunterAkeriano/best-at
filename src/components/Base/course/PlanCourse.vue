<template>
  <div class="plan-course">
    <div class="plan-course__title">
      <h4>Добавить план обучения</h4>
    </div>

    <div class="plan-course__head">
      <p>Вид деятельности</p>
      <p>Тема</p>
      <p>Кол-во часов</p>
      <p>Дата</p>
    </div>

    <div class="plan-course__content">
      <div class="plan-course__content-item" v-for="(item, idx) in course.plan">
        <TheSelect
        style="width: 298px;"
        :items="TeachersHelpers.type"
        @setActiveSelect="activeElem(idx, $event)"
        :idx="item.type"
        />
        <input 
        style="width: 470px; margin-left: 20px;"
        type="text" name="" id=""
        v-model="item.title"
        >
        <input 
        style="width: 200px; margin-left: 20px;"
        type="text" name="" id=""
        v-model="item.time"
        >
        <input
        class="date" 
        style="width: 200px; margin-left: 20px;"
        type="date" name="" id=""
        v-model="item.date">
        <Close @click="deleteItem(idx)" style="margin-left: 5px; cursor: pointer;"/>
      </div>    
    </div>

    <div class="plan-course__add" style="cursor: pointer; width: 188px;" @click="addItem">
      <IconAdd/>
      <p>Добавить поле</p>
    </div>
  </div>
</template>

<script setup>
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TeachersHelpers from '../../../mixins/TeachersHelpers'
import Close from '@/assets/icons/course/Close.vue'
import IconAdd from '@/assets/icons/profile/AddIcon.vue'

import {ref} from 'vue';


import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();

function deleteItem(idx){
  if(course.plan.length == 1) return
  course.plan.splice(idx, 1)
}

function addItem(){
  course.plan.push({
    type: 0,
    title: '',
    time: '',
    date: '',
  })
}

function activeElem(idx, value){
  course.plan[idx].type = value 
}
</script>

<style lang="scss" scoped>
.plan-course{
  margin-top: 26px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  padding-top: 34px;
  padding-left: 50px;
  margin-bottom: 50px;
  padding-right: 45px;
  padding-bottom: 48px;

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

  &__head{
    display: flex;
    margin-top: 23px;
    background: #FDE4EA;
    padding: 15px 0;
    p{
      color: #292C32;
      font-family: Montserrat;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 22.5px */
    }

    p:nth-child(1){
      margin-left: 20px;
      margin-right: 169px;
    }
    p:nth-child(2){
      margin-right: 447px;
    }
    p:nth-child(3){
      margin-right: 110px;
    }
  }

  &__content{
    padding-left: 21px;
    
    padding-bottom: 7px;
    border: 1px solid #EEE;
    background: #FFF;

    &-item{
      display: flex;
      align-items: center;
      margin-top: 5px;
    }

    input{
      border-radius: 20px;
      background: #F2F5FA;
      padding: 6px 20px;
      border: 0;
    }

    .date::-webkit-calendar-picker-indicator {
        color: transparent;
        opacity: 1;
        background: url('../../../assets/icons/course/Calendar.svg') no-repeat center;
        background-size: contain;
      }
  }

  &__add{
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 6px;

    p{
      color: #F04973;
      font-family: Montserrat;
      font-size: 11px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%; /* 14.3px */
    }
  }

}
</style>