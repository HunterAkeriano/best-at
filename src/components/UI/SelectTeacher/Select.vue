<template>
  <div class="select"
  :class="{ active: isActive }"
  >
    <input type="text"
    v-model="searchText"
    @focus="toggleActive(true)"
    >
    <Add/>

    <div class="select__teachers" >
      <div class="item" 
      v-for="(item, idx) in filteredTeachers"
      @click="addElement(item.nameUser)"
      >
        <img :src="item.photo" alt="">
        <p>{{ item.nameUser }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed, onMounted, onUnmounted } from 'vue'
import Add from '@/assets/icons/course/Add.vue';

import {stateCourse} from "@/stores/StateCourse";
const course = stateCourse();


const searchText = ref('');
const filteredTeachers = computed(() => {
  const normalizedSearchText = searchText.value.toLowerCase();
  return course.teacher.filter(teacher => {
    return teacher.nameUser.toLowerCase().includes(normalizedSearchText);
  });
});


function addElement(name){
  searchText.value = name;
  toggleActive(false);
}

const isActive = ref(false);
function toggleActive(value) {
  isActive.value = value;
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

function handleClickOutside(event) {
  if (!event.target.closest('.select')) {
    toggleActive(false);
  }
}
</script>

<style lang="scss" scoped>
.select{
  position: relative;
  input{
    margin-top: 5px;
    border-radius: 20px;
    background: #F2F5FA;
    width: 100%;
    outline: 0;
    border: 0;
    padding: 5px 15px;
    padding-right: 50px;

  }

  svg{
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  &__teachers{
    position: absolute;
    left: 0;
    width: 100%;
    top: 39px;
    background: #F2F5FA;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;

    .item{
      padding: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;

      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 40px;
      }

      p{
        color: #454B58;
        font-weight: 500;
        line-height: 24px;
        font-size: 13px;
      }

      &:hover{
        background: #fdfeff;

      }
    }

    &::-webkit-scrollbar {
      width: 5px;   
    }

    &::-webkit-scrollbar-track {
      background: #4f4c4c;   
    }

    &::-webkit-scrollbar-thumb {
      background-color: blue;   
      border: 3px solid white;  
    }
  }
}

.select.active{
  input{
    border-radius: 20px 20px 0 0;
  }
  .select__teachers{
    max-height: 200px;
    opacity: 1;
    overflow-y: scroll;
    pointer-events: visible;
  }
}
</style>