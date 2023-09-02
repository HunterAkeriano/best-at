<template>
  <div class="teacher">
    <div class="teacher__select">
      <p>Назначить учителя</p>
      <Select @activeElement="elem"/>
    </div>
    <div class="teacher__students">
      <p>Тут будет отображаться список учеников, которые оплатили и зарегистрировались на курс.</p>
    </div>
  </div>
</template>

<script setup>
import Select from '@/components/UI/SelectTeacher/Select.vue';

const emits = defineEmits(['activeTeacher', 'click',]);
function elem(idx){
  emits('activeTeacher', idx);
}


</script>

<style scoped lang="scss">
.teacher{
  margin-left: 40px;
  height: 615px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  max-width: 560px;
  width: 100%;
  padding: 40px 45px;

  &__select{
   
    p{
      color: #8B919E;
      font-family: Montserrat;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 23px; /* 176.923% */
    }
  }

  &__students{
    margin-top: 20px;
    p{
      color: #454B58;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 182.85%; 
    }
  }

}
</style>