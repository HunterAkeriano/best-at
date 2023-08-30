<template>
<div class="range"
:style="{'width': `${props.width}px`}"
>
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
</template>

<script setup>
import {ref} from 'vue'
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.scss"

const props = defineProps({
  value:{
    type: Array,
    default:  () => ([]),
  },
  lowestPriceProps:{
    type: Number,
    default: 0,
  },
  highestPriceProps: {
    type: Number,
    default: 1000000,
  },
  width: {
    type: Number,
    default: 260,
  },
  
})


const value = ref(props.value)
const lowestPrice = ref(props.lowestPriceProps)
const highestPrice = ref(props.highestPriceProps)

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

</script>

<style lang="scss">
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