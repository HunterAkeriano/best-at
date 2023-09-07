<template>
  <div class="fav-teachers">
    <div class="fav-teachers__title" v-if="isCompany">Команда компании</div>
    <div class="fav-teachers__title" v-else>Список избранных преподавателей</div>

    <TeacherCard
        v-for="teacher in teachersArray" :key="teacher.id"
        :teacher="teacher" :is-company="isCompany"
    />

    <Button
        v-if="isCompany"
        :width="320"
        :padding="16"
    >
      Пригласить учителя в команду
    </Button>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {db} from "@/firebase/firebase";
import {collection, getDocs} from "firebase/firestore";
import TeacherCard from '@/components/Base/TeachersCatalog/TeachersCatalogCard.vue'
import Button from '@/components/UI/Buttons/Button.vue'

defineProps({
  isCompany: {
    type: Boolean,
    default: false
  }
})

const teachersArray = ref([])

async function getTeachers() {
  const querySnapshot = await getDocs(collection(db, "publishedTeachers"));
  querySnapshot.forEach((doc) => {
    teachersArray.value.push(doc.data())
  })
}

function removeRandomObjectsFromArray(array, minCount, maxCount) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

  while (array.length > count) {
    const randomIndex = Math.floor(Math.random() * array.length);
    array.splice(randomIndex, 1);
  }
}

onBeforeMount(() => {
  getTeachers().then(() => {
    removeRandomObjectsFromArray(teachersArray.value, 1, 4);
  })
})
</script>

<style scoped lang="scss">
.fav-teachers {

  &__title {
    color: #292C32;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 20px;
  }
}
</style>
