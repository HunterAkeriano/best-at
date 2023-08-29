<template>
  <div class="pagination">
    <div class="pagination__page"
         v-for="page in totalPages" :key="page"
         :class="{'pagination__page--current': page === currentPage}"
         @click="emits('changePage', page)"
    >
      <span>
        {{ page }}
      </span>
    </div>

    <div class="pagination__page" @click="nextPage">
      <Next/>
    </div>
  </div>
</template>

<script setup>
import Next from '@/assets/icons/pagination/Next.vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['changePage'])

function nextPage() {
  if (props.currentPage < props.totalPages) {
    let page = props.currentPage + 1
    emits('changePage', page)
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  margin-top: 10px;

  &__page {
    width: 40px;
    height: 40px;
    display: flex;
    color: #8B919E;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    background: #F2F5FA;
    transition: all 0.3s ease;
    justify-content: center;
    align-items: center;
    margin-right: 1px;

    &--current {
      color: #FFF;
      font-weight: 800;
      background: #F04973;
    }
  }
}
</style>
