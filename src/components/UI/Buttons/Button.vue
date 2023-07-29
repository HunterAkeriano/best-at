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
    :class="{'ui-button_courses': isCourses, 'ui-button_disabled': isDisabled}"
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
  isCourses:{
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['pressed']);
function emitsPressed(){
  emits('pressed');
}
</script>

<style lang="scss">
.ui-button{
  display: block;
  cursor: pointer;
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  border: none;
  border-radius: 7px;
  background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.20);
  transition: background 0.55s;

  &:hover{
    background: linear-gradient(90deg, #00D2FF 0%, #2596FF 100%);
  }
}
.ui-button.ui-button_courses{
  color: #F04973;
  outline: 2px solid rgba(240, 73, 115, 1);
  background: none;
  box-shadow: none;
}

.ui-button.ui-button_disabled{
 pointer-events: none;
 opacity: 0.5;
}
</style>