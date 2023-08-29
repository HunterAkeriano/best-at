<template>
  <div class="input-components">
    <p>Дата урока</p>
    <input 
    type="text"
    :style="{'width': `${width}px`}"
    v-model="propsText" 
    @input="newValue(propsText)">
  </div>
</template>

<script setup>
import {ref} from 'vue';

const propsText = ref(props.text)

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 220,
  }
})

const emits = defineEmits(['changeText']);

function newValue(text){
  emits('changeText', text)
}
</script>


<style lang="scss" scoped>
.input-components{
  p{
    color: #8B919E;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px; /* 176.923% */
    margin: 0;
    margin-bottom: 10px;

  }

  input{
    border-radius: 20px;
    background: #F2F5FA;
    outline: 0;
    border: 0;
    padding: 6px 20px;
    height: 35px;
    color: #454B58;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 184.615% */
  }
}
</style>