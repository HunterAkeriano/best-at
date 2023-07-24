<template>
  <button
   class="ui-button"
   :style="{
      width: width + 'px',
      paddingTop: padding + 'px',
      paddingBottom: padding + 'px',
      fontSize: fontSize + 'px',
      lineHeight: lineHeight + 'px',
      textTransform: uppercaseText ? 'uppercase' : 'none',
    }"
    @click="emitsPressed">
  <slot/>
  </button>
</template>

<script setup>
defineProps({
  width:{
    type: Number,
    default: 0,
  },
  padding:{
    type: Number,
    default: 0,
  },
  fontSize: {
    type: Number,
    default: 14,
  },
  lineHeight: {
    type: Number,
    default: 18,
  },
  uppercaseText: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['pressed']);
function emitsPressed(){
  emits('pressed');
}
</script>

<style scoped>
.ui-button{
  display: block;
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  border: none;
  border-radius: 7px;
  background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.20);
}
</style>