<template>
  <div class="teacher">
    <div class="teacher__select">
      <p>Добавить учеников</p>
      <Select/>
    </div>
    <div class="teacher__students">
      <!-- <p v-if="lessons.students.length == 0">Тут будет отображаться список учеников, которые оплатили и зарегистрировались на урок. Также вы можете выслать приглашение самостоятельно, введя ФИО конкретного человека и нажав на знак «плюс».</p> -->
      <div class="teacher__students-element">
        <div class="hed">
          <p>Список учеников</p>
          <span>{{ lessons.students.length }} участников</span>
        </div>
        <div class="bod">
          <div class="bod__item" v-for="(item, idx)  in lessons.students">
            <p>{{ item.name }}</p>
            <div class="bod__item-del" @click="delUser(idx)">
              <DeleteIcon/>
              <span>Исключить</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import DeleteIcon from '@/assets/icons/lessons/Delete.vue'
import Select from '@/components/UI/SelectLessons/Select.vue';
import {stateLessons} from "@/stores/stateLessons";
const lessons = stateLessons();


function delUser(idx){
  lessons.students.splice(idx, 1)
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

    &-element{
      .hed{
        display: flex;
        justify-content: space-between;
        p{
          color: #8B919E;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 500;
          line-height: 23px; /* 176.923% */
        }

        span{
          color: #454B58;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 500;
          line-height: 23px; /* 176.923% */
        }
      }

      .bod{
        &__item{
          display: flex;
          justify-content: space-between;
          border: 1px solid #DCE3E8;
          padding: 0 10px;
          p{
            color: #454B58;
            font-family: Montserrat;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px; /* 230.769% */
          }

          &-del{
            display: flex;
            align-items: center;
            cursor: pointer;

            span{
              margin-left: 5px;
              color: #F04973;
              font-family: Montserrat;
              font-size: 12px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 18px */
              text-decoration-line: underline;
            }
          }
        }
      }
     
    }
  }

}
</style>