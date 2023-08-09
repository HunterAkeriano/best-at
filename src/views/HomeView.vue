<template>
  <div class="main" >
    <TeachersSwiper />

    <PopularCourses />

    <HowWeWork />

    <OurAdvantages />

    <div class="teachers" />

    <div class="reviews" />

    <WeAreTrusted />

    <TrialLesson />
  </div>
</template>


<script setup>
import TeachersSwiper from '@/components/Base/TeachersSwiper.vue'
import PopularCourses from '@/components/Base/PopularCourses.vue'
import HowWeWork from '@/components/Base/HowWeWork.vue'
import OurAdvantages from '@/components/Base/OurAdvantages.vue'
import WeAreTrusted from '@/components/Base/WeAreTrusted.vue'
import TrialLesson from '@/components/Base/TrialLesson.vue'
</script>


<style lang="scss">
.teachers {
  height: 854px;
}

.reviews {
  height: 571px;
}
</style>

