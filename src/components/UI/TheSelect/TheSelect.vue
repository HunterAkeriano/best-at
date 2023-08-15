<template>
  <div class="select-comp" :class="{'select-comp_opened': stateMenu}" ref="selectComp">
    <div class="select-comp__selected" @click="openMenu">
      <p>{{ SELECTED_ELEMENT.title }}</p>
      <IconArrow/>
    </div>
    <div class="select-comp__item">
      <p v-for="(item, idx) in items" @click="selectedItem(idx)">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconArrow from '@/assets/icons/header/Arrow.vue'


const SELECTED_ELEMENT = ref(props.items[0])

const stateMenu = ref(false)
function openMenu(){
  stateMenu.value = !stateMenu.value;
}

const emits = defineEmits(['setActiveSelect', 'click',]);
function selectedItem(idx){
  stateMenu.value = false;
  SELECTED_ELEMENT.value = props.items[idx];
  emits('setActiveSelect', idx);
}


const props = defineProps({
  items: {
    type: Array,
    default: () => ([]),
    required: true,
  },
})

onMounted(() => {
  window.addEventListener('click', closeOnOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener('click', closeOnOutsideClick);
});

const selectComp = ref(null);
function closeOnOutsideClick(event) {
  if (stateMenu.value && !selectComp.value.contains(event.target)) {
    stateMenu.value = false;
  }
}

</script>

<style lang="scss">
.select-comp{
  font-family: Montserrat;
  position: relative;
  cursor: pointer;

  &__selected{
    border-radius: 20px;
    background: #F2F5FA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 13px;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 6px;
    height: 35px;

    p{
      color: #454B58;
      font-weight: 500;
      line-height: 24px;
      font-size: 13px;
    }

    svg{
      transition: all .25s;
    }
  }

  &__item{
    overflow: hidden;
    position: absolute;
    opacity: 0;
    left: 0;
    top: 33px;
    width: 100%;
    border-radius: 0 0 0px 20px;
    background: #F2F5FA;
    transition: all .25s;
    max-height: 0;

    p{
      color: #454B58;
      font-weight: 500;
      line-height: 24px;
      font-size: 13px;
      padding-left: 20px;
    }
  }

  &_opened{
    svg{
      transform: rotate(180deg);
    }
    .select-comp__selected{
      border-radius: 0;
      border-radius: 20px 20px 0 0;
    }
    .select-comp__item{
      max-height: 180px;
      opacity: 1;
      overflow: auto;
      z-index: 10;

      p:hover{
        background-color: rgb(242, 241, 241);
      }
    }

    .select-comp__item::-webkit-scrollbar{
      width: 5px;
    }

    .select-comp__item::-webkit-scrollbar-track{
      background: rgb(164, 163, 163);
    }

    .select-comp__item::-webkit-scrollbar-thumb{
      background: rgb(99, 98, 98);
    }
  }
}
</style>