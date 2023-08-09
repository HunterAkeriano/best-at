<template>
  <div class="stars-rating">
    <div class="stars-rating__bg" />

    <div class="stars-rating__wrapper">
      <Star v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
import Star from '@/assets/icons/Star.vue'
import {computed} from "vue";

const props = defineProps({
  rating: {
    type: Number,
    default: 5
  }
})

const fillStars = computed(() => {
  return (props.rating * 100) / 5 + '%'
})
</script>

<style scoped lang="scss">
.stars-rating {
  width: 85px;
  height: 13px;
  position: relative;
  background: #CCCCCC;
  margin: 0 auto 23px;

  &__bg {
    width: v-bind(fillStars);
    height: 100%;
    position: absolute;
    background: #FFC452;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
}
</style>
