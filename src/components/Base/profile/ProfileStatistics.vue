<template>
  <div class="statistics">
    <div class="statistics__title">Статистика</div>

    <div class="statistics__student" v-if="usersStore.user[usersStore.userId].type.student">
      <div class="statistics__student-title">Список преподавателей</div>

      <div class="statistics__student-wrapper">
        <div class="statistics__card" v-for="i in 4" :key="i">
          <img class="statistics__card-img" src="" alt="">

          <div>
            <div class="statistics__card-name">Алексей Кузьменко Андреевич</div>

            <div class="statistics__card-row">
              <div style="margin-right: 24px">
                <p>Количество проведенных уроков</p>
                <span>23</span>
              </div>

              <div>
                <p>Количество запланированных уроков</p>
                <span>5</span>
              </div>
            </div>

            <p>Кол-во уроков, которые нужно запланировать</p>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>

    <div class="statistics__teacher" v-else-if="usersStore.user[usersStore.userId].type.teachers">
      <div class="statistics__teacher-card">
        <p>Кол-во учеников:</p>

        <span>200</span>
      </div>

      <div class="statistics__teacher-card">
        <p>Кол-во проведенных уроков:</p>

        <span>126</span>
      </div>

      <div class="statistics__teacher-card">
        <p>Сумма заработанных денег за все время</p>

        <span>20 500 $</span>
      </div>

      <div class="statistics__teacher-card">
        <p>Кол-во отзывов:</p>

        <span>34</span>
      </div>

      <div class="statistics__teacher-title">Мои ученики</div>

      <div class="statistics__teacher-students">
        <div>
          <img src="../../../assets/img/people/pfp-1.png" alt="">
          <p>Арнаева Алина</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-2.png" alt="">
          <p>Константинов Анатолий</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-3.png" alt="">
          <p>Дуняева Инна</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-4.png" alt="">
          <p>Арнаева Алина</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-5.png" alt="">
          <p>Константинов Анатолий</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-6.png" alt="">
          <p>Дуняева Инна</p>
        </div>
      </div>

      <div class="statistics__teacher-title">Оценки учеников</div>

      <div class="teacher__awards">
        <div class="teacher__award-wrapper" v-for="award in awards" :key="award.id">
          <div class="teacher__award-counter">{{ award.counter }}</div>

          <div class="teacher__award-icon">
            <component :is="award.icon"/>
          </div>

          <div class="teacher__award-name">{{ award.title }}</div>
        </div>
      </div>

      <div class="statistics__teacher-title" style="margin-top: 18px">Статистика по курсам</div>

      <div class="forum__el">
        <p>Наименование курса</p>
        <p>Кол-во проведенных курсов</p>
        <p>Кол-во учеников на курсе</p>
        <p>Заработанные деньги</p>
      </div>

      <div class="forum__theme">
        <div class="forum__theme-item">
          <p>Английский язык</p>
          <p>200</p>
          <p>200</p>
          <p>20 000 $</p>
        </div>

        <div class="forum__theme-item">
          <p>Программирование</p>
          <p>126</p>
          <p>126</p>
          <p>5 420 $</p>
        </div>

        <div class="forum__theme-item">
          <p>Испанский язык</p>
          <p>54</p>
          <p>54</p>
          <p>6 500 $</p>
        </div>

        <div class="forum__theme-item">
          <p>Английский язык</p>
          <p>29</p>
          <p>29</p>
          <p>5 500 $</p>
        </div>

        <div class="forum__theme-item">
          <p>Программирование</p>
          <p>167</p>
          <p>167</p>
          <p>1 670 $</p>
        </div>
      </div>
    </div>

    <div class="statistics__company" v-else-if="usersStore.user[usersStore.userId].type.company">
      <div class="statistics__company-table">
        <div class="forum__el">
          <p>ФИО преподавателя</p>
          <p>Кол-во учеников</p>
          <p>Проведенные уроки</p>
          <p>Заработанные деньги</p>
          <p>Кол-во отзывов</p>
        </div>

        <div class="forum__theme">
          <div class="forum__theme-item">
            <p>Коц Серьгей Юрьевич</p>
            <p>200</p>
            <p>200</p>
            <p>20 000 $</p>
            <p>200</p>
          </div>

          <div class="forum__theme-item">
            <p>Суровская Александрина Георгиевна</p>
            <p>126</p>
            <p>126</p>
            <p>5 420 $</p>
            <p>126</p>
          </div>

          <div class="forum__theme-item">
            <p>Комаров Вячеслав Александрович</p>
            <p>54</p>
            <p>54</p>
            <p>6 500 $</p>
            <p>54</p>
          </div>

          <div class="forum__theme-item">
            <p>Коц Серьгей Юрьевич</p>
            <p>29</p>
            <p>29</p>
            <p>5 500 $</p>
            <p>29</p>
          </div>

          <div class="forum__theme-item">
            <p>Суровская Александрина Георгиевна</p>
            <p>167</p>
            <p>167</p>
            <p>1 670 $</p>
            <p>167</p>
          </div>
        </div>
      </div>

      <div class="statistics__company-title">Мои ученики</div>

      <div class="statistics__company-students">
        <div>
          <img src="../../../assets/img/people/pfp-1.png" alt="">
          <p>Арнаева Алина</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-2.png" alt="">
          <p>Константинов Анатолий</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-3.png" alt="">
          <p>Дуняева Инна</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-4.png" alt="">
          <p>Арнаева Алина</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-5.png" alt="">
          <p>Константинов Анатолий</p>
        </div>

        <div>
          <img src="../../../assets/img/people/pfp-6.png" alt="">
          <p>Дуняева Инна</p>
        </div>
      </div>

      <div class="statistics__company-title">Статистика по курсам</div>

      <div class="statistics__company-courses">
        <div class="forum__el">
          <p>Наименование курса</p>
          <p>Кол-во проведенных курсов</p>
          <p>Кол-во учеников на курсе</p>
          <p>Заработанные деньги</p>
        </div>

        <div class="forum__theme">
          <div class="forum__theme-item">
            <p>Английский язык</p>
            <p>200</p>
            <p>200</p>
            <p>20 000 $</p>
          </div>

          <div class="forum__theme-item">
            <p>Программирование</p>
            <p>126</p>
            <p>126</p>
            <p>5 420 $</p>
          </div>

          <div class="forum__theme-item">
            <p>Испанский язык</p>
            <p>54</p>
            <p>54</p>
            <p>6 500 $</p>
          </div>

          <div class="forum__theme-item">
            <p>Английский язык</p>
            <p>29</p>
            <p>29</p>
            <p>5 500 $</p>
          </div>

          <div class="forum__theme-item">
            <p>Программирование</p>
            <p>167</p>
            <p>167</p>
            <p>1 670 $</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {stateUser} from "@/stores/StateUser";
import OneStar from "@/assets/icons/teacher/OneStar.vue";
import TwoStars from "@/assets/icons/teacher/TwoStars.vue";
import Brain from "@/assets/icons/teacher/Brain.vue";
import Student from "@/assets/icons/teacher/Student.vue";
import Message from "@/assets/icons/teacher/Message.vue";
import Books from "@/assets/icons/teacher/Books.vue";
import Thinking from "@/assets/icons/teacher/Thinking.vue";
import Book from "@/assets/icons/teacher/Book.vue";
import Rewards from "@/assets/icons/teacher/Rewards.vue";

const usersStore = stateUser();


const awards = [
  {
    id: 0,
    icon: OneStar,
    title: 'Великолепен(-а) для начинающих',
    counter: 45
  },
  {
    id: 1,
    icon: TwoStars,
    title: 'Великолепен(-а) для учеников среднего уровня',
    counter: 156
  },
  {
    id: 2,
    icon: Brain,
    title: 'Великолепен(-а) для учеников продвинутого уровня',
    counter: 95
  },
  {
    id: 3,
    icon: Student,
    title: 'Великолепно ладит с детьми',
    counter: 849
  },
  {
    id: 4,
    icon: Message,
    title: 'Великолепное общение',
    counter: 1885
  },
  {
    id: 5,
    icon: Books,
    title: 'Отличные материалы',
    counter: 34
  },
  {
    id: 6,
    icon: Thinking,
    title: 'Превосходит ожидания',
    counter: 258
  },
  {
    id: 7,
    icon: Book,
    title: 'Подробные сведения в теме',
    counter: 684
  },
  {
    id: 8,
    icon: Rewards,
    title: 'Гуру мотивации',
    counter: 213
  }
]
</script>

<style scoped lang="scss">
.statistics {

  &__title {
    color: #292C32;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 25px;
  }

  &__student {

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 19px;
      margin-bottom: 16px;
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  &__card {
    width: 447px;
    height: 245px;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    margin: 0 20px 20px 0;
    border: 1px solid #DCE3E8;
    padding: 15px 27px 25px 23px;
    background: rgba(242, 245, 250, 0.60);
    transition: all 0.3s ease;

    &:hover {
      background: #FFF;
      box-shadow: 0 10px 40px 0 rgba(42, 102, 193, 0.12);
    }

    &:nth-child(2n) {
      margin-right: 0;
    }

    &-img {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      margin-right: 19px;
      background: #DFE3E7;
      border-radius: 100px;
    }

    &-name {
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      margin-bottom: 21px;
    }

    p {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
    }

    span {
      display: block;
      color: #292C32;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
    }

    &-row {
      display: flex;
      margin-bottom: 17px;

      p {
        max-width: 138px;
      }
    }
  }

  &__teacher {

    &-card {
      width: 470px;
      height: 50px;
      display: flex;
      flex-shrink: 0;
      padding: 15px 20px;
      margin-bottom: 10px;
      align-items: center;
      border: 1px solid #DCE3E8;
      justify-content: space-between;
      background: rgba(242, 245, 250, 0.60);

      p {
        color: #454B58;
        font-size: 15px;
        font-weight: 400;
        line-height: 150%;
      }

      span {
        display: block;
        color: #292C32;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
      }
    }

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 19px;
      margin-top: 46px;
      margin-bottom: 24px;
    }

    &-students {
      display: flex;
      margin-left: 4px;

      img {
        width: 104px;
        height: 104px;
        flex-shrink: 0;
        margin-right: 30px;
        margin-bottom: 13px;
        border-radius: 100px;
      }

      p {
        color: #454B58;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        max-width: 104px;
      }
    }

    .forum {

      &__el {
        width: 1030px;
        margin-top: 24px;
        display: flex;
        align-items: center;
        background: #FDE4EA;
        padding: 10px 0 8px 21px;

        p {
          color: #292C32;
          font-size: 13px;
          font-weight: 700;
          line-height: 17px;
          text-align: center;
          margin-right: 100px;
        }

        p:nth-child(1) {
          width: 170px;
          margin-right: 195px;
        }

        p:nth-child(2) {
          width: 153px;
        }

        p:nth-child(3) {
          width: 129px;
        }

        p:nth-child(4) {
          width: 119px;
          margin-right: 0;
        }
      }

      &__theme {
        max-width: 1030px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;

        &-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          height: 40px;
          padding-left: 29px;
          border-bottom: 1px solid #ccc;

          p {
            color: #292C32;
            font-size: 14px;
            font-weight: 400;
            line-height: 40px;
            text-align: center;
          }

          p:nth-child(1) {
            width: 290px;
            margin-right: 104px;
            text-align: left;
          }

          p:nth-child(2) {
            width: 77px;
            margin-right: 149px;
          }

          p:nth-child(3) {
            width: 107px;
            margin-right: 119px;
          }

          p:nth-child(4) {
            width: 103px;
          }
        }
      }
    }
  }

  .teacher {

    &__awards {
      display: flex;
      flex-wrap: wrap;
      max-width: 900px;
    }

    &__award {

      &-wrapper {
        position: relative;
        margin-right: 24px;
        margin-bottom: 30px;
      }

      &-counter {
        width: 36px;
        height: 36px;
        position: absolute;
        right: -2px;
        background: #F04973;
        border-radius: 100px;
        color: #FFF;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        line-height: 36px;
      }

      &-icon {
        width: 104px;
        height: 104px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
      }

      &-name {
        color: #454B58;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        max-width: 110px;
      }
    }
  }

  &__company {

    &-table {
      .forum {
        &__el {
          width: 1030px;
          margin-top: 24px;
          display: flex;
          align-items: center;
          background: #FDE4EA;
          padding: 8px 0 8px 18px;

          p {
            color: #292C32;
            font-size: 13px;
            font-weight: 700;
            line-height: 17px;
            text-align: center;
            margin-right: 56px;
          }

          p:nth-child(1) {
            width: 170px;
            margin-right: 249px;
          }

          p:nth-child(2) {
            width: 77px;
          }

          p:nth-child(3) {
            width: 119px;
          }

          p:nth-child(4) {
            width: 119px;
          }

          p:nth-child(5) {
            width: 75px;
            margin-right: 0;
          }
        }

        &__theme {
          max-width: 1030px;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;

          &-item {
            display: flex;
            align-items: center;
            cursor: pointer;
            height: 40px;
            padding-left: 29px;
            border-bottom: 1px solid #ccc;

            p {
              color: #292C32;
              font-size: 14px;
              font-weight: 400;
              line-height: 40px;
              text-align: center;
            }

            p:nth-child(1) {
              width: 290px;
              margin-right: 118px;
              text-align: left;
            }

            p:nth-child(2) {
              width: 77px;
              margin-right: 62px;
            }

            p:nth-child(3) {
              width: 107px;
              margin-right: 70px;
            }

            p:nth-child(4) {
              width: 103px;
              margin-right: 70px;
            }

            p:nth-child(5) {
              width: 63px;
            }
          }
        }
      }
    }

    &-students {
      display: flex;
      margin-left: 4px;

      img {
        width: 104px;
        height: 104px;
        flex-shrink: 0;
        margin-right: 30px;
        margin-bottom: 13px;
        border-radius: 100px;
      }

      p {
        color: #454B58;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        max-width: 104px;
      }
    }

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 19px;
      margin-top: 46px;
      margin-bottom: 24px;
    }

    &-courses {
      .forum {

        &__el {
          width: 1030px;
          margin-top: 24px;
          display: flex;
          align-items: center;
          background: #FDE4EA;
          padding: 10px 0 8px 21px;

          p {
            color: #292C32;
            font-size: 13px;
            font-weight: 700;
            line-height: 17px;
            text-align: center;
            margin-right: 100px;
          }

          p:nth-child(1) {
            width: 170px;
            margin-right: 195px;
          }

          p:nth-child(2) {
            width: 153px;
          }

          p:nth-child(3) {
            width: 129px;
          }

          p:nth-child(4) {
            width: 119px;
            margin-right: 0;
          }
        }

        &__theme {
          max-width: 1030px;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;

          &-item {
            display: flex;
            align-items: center;
            cursor: pointer;
            height: 40px;
            padding-left: 29px;
            border-bottom: 1px solid #ccc;

            p {
              color: #292C32;
              font-size: 14px;
              font-weight: 400;
              line-height: 40px;
              text-align: center;
            }

            p:nth-child(1) {
              width: 290px;
              margin-right: 104px;
              text-align: left;
            }

            p:nth-child(2) {
              width: 77px;
              margin-right: 149px;
            }

            p:nth-child(3) {
              width: 107px;
              margin-right: 119px;
            }

            p:nth-child(4) {
              width: 103px;
            }
          }
        }
      }
    }
  }
}
</style>
