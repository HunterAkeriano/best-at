<template>
  <div class="main page company">
    <div class="container" v-if="company">
      <div class="page__navigation">
        <a class="page__navigation-link">
          Главная
        </a>

        <p class="page__navigation-current">
          <span>/</span> {{ company.nameUser }}
        </p>
      </div>

      <div class="page__content">
        <div class="page__content-company">
          <div class="company__card">
            <div class="company__card-intro">
              <iframe width="883" height="450" :src="company.youtbeIframe" title="YouTube video player"
                      frameborder="0" allowfullscreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>

            <div class="company__card-content">
              <div class="company__card-left">
                <img class="company__card-pfp" :src="company.photo" alt="">

                <TheStars :rating="company.rate"/>

                <div class="company__card-top">Рекомендуем</div>
              </div>

              <div class="company__card-right">
                <div class="row">
                  <div class="company__card-tag company__card-tag--time">12:35 pm</div>

                  <div class="company__card-tag company__card-tag--exp"><span>Стаж:</span> 2 года</div>
                </div>

                <div class="company__card-name">{{ company.nameUser }}</div>

                <div class="company__card-country">{{ teachersHelpers.country[company.countryUser].title }}</div>

                <div class="company__card-column">
                  <div class="company__card-info">
                    <div class="company__card-label">Язык обучения</div>

                    <div class="company__card-text">{{ teachersHelpers.langeuages[company.langTeacher].title }}</div>
                  </div>

                  <div class="company__card-info">
                    <div class="company__card-label">Языки общения</div>

                    <div class="company__card-text">{{ teachersHelpers.langeuages[company.langTeacher].title }}</div>
                  </div>

                  <div class="company__card-info">
                    <div class="company__card-label">Кол-во учеников</div>

                    <div class="company__card-text">{{ company.students }}</div>
                  </div>

                  <div class="company__card-info">
                    <div class="company__card-label">Кол-во проведенных уроков</div>

                    <div class="company__card-text">{{ company.isLessons }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="company__section">
            <div class="company__section-title">Отзывы</div>
          </div>

          <div class="company__section">
            <div class="company__section-title">Команда</div>

            <div class="company__team">
              <div class="company__team-item" v-for="item in 5" :key="item">
                <img class="company__team-pfp" src="" alt="">

                <div>
                  <div class="company__team-name">Алексей Кузьменко Андреевич</div>

                  <div class="company__team-lang">Язык обучения: <span>английский</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="company__section">
            <div class="company__section-title">О нашей команде</div>

            <div class="company__description-wrapper">
              <Quotemarks/>

              <p class="company__description">{{ company.description }}</p>
            </div>
          </div>

          <div class="company__section">
            <div class="company__section-title">Расписание</div>

            <TheCalendar/>
          </div>

          <div class="company__section">
            <div class="company__section-title">Возможности преподователя</div>

            <div class="company__section-subtitle">Акценты</div>

            <div class="company__possibilities">
              <div class="company__possibilities-item">British english</div>
            </div>

            <div class="company__section-subtitle">Возраст</div>

            <div class="company__possibilities">
              <div class="company__possibilities-item">Adults (18+)</div>
            </div>

            <div class="company__section-subtitle">Аспекты обучения</div>

            <div class="company__possibilities">
              <div class="company__possibilities-item">Accent Reduction</div>

              <div class="company__possibilities-item">Business english</div>

              <div class="company__possibilities-item">Grammar Development</div>

              <div class="company__possibilities-item">Phonetics</div>

              <div class="company__possibilities-item">Grammar Development</div>

              <div class="company__possibilities-item">Accent Reduction</div>
            </div>
          </div>

          <div class="company__section">
            <div class="company__section-title">Резюме преподователя</div>

            <div class="company__section-wrapper">
              <Education/>

              <span>Образование</span>
            </div>

            <div class="company__cv">
              <div class="company__cv-year">2015-2017</div>

              <div class="company__cv-info">
                <div class="company__cv-title">Online company</div>

                <div class="company__cv-sub">Verbling – England</div>

                <div class="company__cv-sub">ELT/TESOL</div>

                <p class="company__cv-text">Укрепление и развитие структуры позволяет выполнять важные задания по
                  разработке системы обучения кадров, соответствует насущным потребностям. </p>
              </div>
            </div>

            <div class="company__cv">
              <div class="company__cv-year">2015-2017</div>

              <div class="company__cv-info">
                <div class="company__cv-title">Online company</div>

                <div class="company__cv-sub">Verbling – England</div>

                <div class="company__cv-sub">ELT/TESOL</div>

                <p class="company__cv-text">Укрепление и развитие структуры позволяет выполнять важные задания по
                  разработке системы обучения кадров, соответствует насущным потребностям. </p>
              </div>
            </div>

            <div class="company__section-wrapper">
              <Certificates/>

              <span>Сертификаты</span>
            </div>

            <div class="company__cv">
              <div class="company__cv-year">2015-2017</div>

              <div class="company__cv-info">
                <div class="company__cv-title">Online company</div>

                <div class="company__cv-sub">Verbling – England</div>

                <div class="company__cv-sub">ELT/TESOL</div>

                <p class="company__cv-text">Укрепление и развитие структуры позволяет выполнять важные задания по
                  разработке системы обучения кадров, соответствует насущным потребностям. </p>
              </div>
            </div>

            <div class="company__cv">
              <div class="company__cv-year">2015-2017</div>

              <div class="company__cv-info">
                <div class="company__cv-title">Online company</div>

                <div class="company__cv-sub">Verbling – England</div>

                <div class="company__cv-sub">ELT/TESOL</div>

                <p class="company__cv-text">Укрепление и развитие структуры позволяет выполнять важные задания по
                  разработке системы обучения кадров, соответствует насущным потребностям. </p>
              </div>
            </div>
          </div>

          <div class="company__section">
            <div class="company__section-title">Оценки учеников</div>

            <div class="company__awards">
              <div class="company__award-wrapper" v-for="award in awards" :key="award.id">
                <div class="company__award-counter">{{ award.counter }}</div>

                <div class="company__award-icon">
                  <component :is="award.icon"/>
                </div>

                <div class="company__award-name">{{ award.title }}</div>
              </div>


            </div>
          </div>

        </div>

        <div class="page__content-lessons">
          <div class="company__lessons-wrapper">
            <div class="company__lessons-title">Пробный урок</div>

            <div class="company__lessons-row">
              <p>Длительность урока</p>

              <span>1,5 часа</span>
            </div>

            <div class="company__lessons-row">
              <p>Стоимость курса</p>

              <span>1000 $</span>
            </div>

            <Button
                :width="365"
                :padding="16"
                uppercase-text
            >
              Забронировать
            </Button>
          </div>

          <div class="company__lessons-wrapper">
            <div class="company__lessons-title">Индивидуальный урок</div>

            <p class="company__lessons-amount">Количество уроков</p>

            <div class="company__lessons-options">
              <TheRadio :option="1"/>

              <TheRadio :option="2"/>

              <TheRadio :option="5"/>

              <TheRadio :option="10"/>
            </div>

            <hr>

            <div class="company__lessons-row">
              <p>Стоимость курса</p>

              <span>1000 $</span>
            </div>

            <Button
                :width="365"
                :padding="16"
                uppercase-text
            >
              Забронировать
            </Button>
          </div>

          <div class="company__lessons-wrapper">
            <div class="company__lessons-title">Групповые уроки</div>

            <div class="company__lesson">
              <div class="company__lesson-date">28 июня 2021</div>

              <div class="company__lesson-title">Базовые навыки испанского языка</div>

              <div class="company__lesson-tags">
                <div class="company__card-tag company__card-tag--mini company__card-tag--time">1 час</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--lvl">Beginners</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--years">10-15 лет</div>
              </div>

              <div class="company__lesson-row">
                <div style="margin-right: 40px">
                  <div class="company__lesson-label">Зарегистрировались</div>

                  <div class="company__lesson-value">10 человек</div>
                </div>

                <div>
                  <div class="company__lesson-label">Максимум:</div>

                  <div class="company__lesson-value">15 человек</div>
                </div>
              </div>

              <hr>

              <div class="company__lessons-row">
                <p>Стоимость курса</p>

                <span>1000 $</span>
              </div>

              <Button
                  :width="315"
                  :padding="16"
                  uppercase-text
              >
                Забронировать
              </Button>
            </div>

            <div class="company__lesson">
              <div class="company__lesson-date">28 июня 2021</div>

              <div class="company__lesson-title">Базовые навыки испанского языка</div>

              <div class="company__lesson-tags">
                <div class="company__card-tag company__card-tag--mini company__card-tag--time">1 час</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--lvl">Beginners</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--years">10-15 лет</div>
              </div>

              <div class="company__lesson-row">
                <div style="margin-right: 40px">
                  <div class="company__lesson-label">Зарегистрировались</div>

                  <div class="company__lesson-value">10 человек</div>
                </div>

                <div>
                  <div class="company__lesson-label">Максимум:</div>

                  <div class="company__lesson-value">15 человек</div>
                </div>
              </div>

              <hr>

              <div class="company__lessons-row">
                <p>Стоимость курса</p>

                <span>1000 $</span>
              </div>

              <Button
                  :width="315"
                  :padding="16"
                  uppercase-text
              >
                Забронировать
              </Button>
            </div>
          </div>

          <div class="company__lessons-wrapper">
            <div class="company__lessons-title">Учебные курсы</div>

            <div class="company__lesson">
              <div class="company__lesson-date">28 июня 2021</div>

              <div class="company__lesson-title">Базовые навыки испанского языка</div>

              <div class="company__lesson-tags">
                <div class="company__card-tag company__card-tag--mini company__card-tag--time">1 час</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--lvl">Beginners</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--years">10-15 лет</div>
              </div>

              <div class="company__lesson-row">
                <div style="margin-right: 40px">
                  <div class="company__lesson-label">Зарегистрировались</div>

                  <div class="company__lesson-value">10 человек</div>
                </div>

                <div>
                  <div class="company__lesson-label">Максимум:</div>

                  <div class="company__lesson-value">15 человек</div>
                </div>
              </div>

              <hr>

              <div class="company__lessons-row">
                <p>Стоимость курса</p>

                <span>1000 $</span>
              </div>

              <Button
                  :width="315"
                  :padding="16"
                  uppercase-text
              >
                Забронировать
              </Button>
            </div>

            <div class="company__lesson">
              <div class="company__lesson-date">28 июня 2021</div>

              <div class="company__lesson-title">Базовые навыки испанского языка</div>

              <div class="company__lesson-tags">
                <div class="company__card-tag company__card-tag--mini company__card-tag--time">1 час</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--lvl">Beginners</div>

                <div class="company__card-tag company__card-tag--mini company__card-tag--years">10-15 лет</div>
              </div>

              <div class="company__lesson-row">
                <div style="margin-right: 40px">
                  <div class="company__lesson-label">Зарегистрировались</div>

                  <div class="company__lesson-value">10 человек</div>
                </div>

                <div>
                  <div class="company__lesson-label">Максимум:</div>

                  <div class="company__lesson-value">15 человек</div>
                </div>
              </div>

              <hr>

              <div class="company__lessons-row">
                <p>Стоимость курса</p>

                <span>1000 $</span>
              </div>

              <Button
                  :width="315"
                  :padding="16"
                  uppercase-text
              >
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {db} from '@/firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'
import {onBeforeMount, ref} from 'vue'
import TheCalendar from '@/components/UI/Calendar/TheCalendar.vue'
import TheStars from '@/components/UI/Stars/TheStars.vue'
import teachersHelpers from '../mixins/teachersHelpers'
import Quotemarks from '@/assets/icons/Quotemarks.vue'
import Button from '@/components/UI/Buttons/Button.vue'
import TheRadio from '@/components/UI/Radio/TheRadio.vue'
import Education from '@/assets/icons/teacher/Education.vue'
import Certificates from '@/assets/icons/teacher/Certificates.vue'
import OneStar from "@/assets/icons/teacher/OneStar.vue";
import TwoStars from "@/assets/icons/teacher/TwoStars.vue";
import Brain from "@/assets/icons/teacher/Brain.vue";
import Student from "@/assets/icons/teacher/Student.vue";
import Message from "@/assets/icons/teacher/Message.vue";
import Books from "@/assets/icons/teacher/Books.vue";
import Thinking from "@/assets/icons/teacher/Thinking.vue";
import Book from "@/assets/icons/teacher/Book.vue";
import Rewards from "@/assets/icons/teacher/Rewards.vue";


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const company = ref({})

onBeforeMount(async () => {
  const companyRef = doc(db, "publishedTeachers", props.id)
  const docSnap = await getDoc(companyRef);

  if (docSnap.exists()) {
    company.value = docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
})

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
.page__navigation {
  display: flex;
  margin: 23px 0 22px;
  font-size: 14px;
  line-height: 16px;

  &-link {
    cursor: pointer;
    color: #454B58;
  }

  &-current {
    margin-left: 10px;
    color: #7D7F83;

    span {
      margin-right: 4px;
    }
  }
}

.page__content {
  display: flex;
  justify-content: space-between;
  padding: 0 0 30px;
}

.company {

  &__card {
    background: #FFF;
    max-width: 883px;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-intro {
      width: 883px;
      height: 450px;
    }

    &-content {
      display: flex;
      padding: 44px 33px 53px;
    }

    &-left {
      width: 144px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-right: 33px;
    }

    &-pfp {
      width: 130px;
      height: 130px;
      border-radius: 100px;
      margin-bottom: 18px;
    }

    &-top {
      color: #FFF;
      height: 36px;
      width: 144px;
      padding: 8px 0;
      font-size: 15px;
      font-weight: 600;
      line-height: 150%;
      text-align: center;
      border-radius: 20px;
      background: #28DA9A;
      margin: -7px 0 17px 1px;
    }

    .row {
      display: flex;
      margin-bottom: 25px;
    }

    &-tag {
      height: 36px;
      display: flex;
      color: #292C32;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      margin-left: 16px;
      align-items: center;
      border-radius: 20px;
      padding: 8px 14px 8px 16px;

      span {
        font-weight: 400;
        margin-right: 4px;
      }

      &:nth-child(1) {
        margin-left: 0;
      }

      &--mini {
        height: 25px;
        font-size: 12px;
        margin-left: 10px;
        padding: 6px 8px 6px 11px;

        &:nth-child(1) {
          margin-left: 0;
        }
      }

      &--time {
        background: #FFDEE4;
      }

      &--exp {
        background: #FDECC8;
      }

      &--lvl {
        background: #E1DAFF;
      }

      &--years {
        background: #D0EEFB;
      }
    }

    &-name {
      color: #292C32;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
    }

    &-country {
      color: #454B58;
      font-size: 14px;
      font-weight: 600;
      line-height: 182.85%;
      opacity: 0.7;
    }

    &-column {
      display: flex;
      flex-wrap: wrap;
      margin-top: 17px;
    }

    &-info {
      width: 50%;
      margin-bottom: 17px;
    }

    &-label {
      color: #8B919E;
      font-size: 14px;
      font-weight: 500;
      line-height: 23px;
    }

    &-text {
      color: #292C32;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  &__section {
    padding: 40px;
    margin-top: 30px;
    background: #FFF;
    max-width: 883px;
    border-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-title {
      color: #292C32;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
      margin-bottom: 25px;
    }

    &-subtitle {
      color: #292C32;
      font-size: 15px;
      font-weight: 600;
      line-height: 19px;
      margin-bottom: 14px;
    }

    &-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      span {
        display: block;
        color: #292C32;
        font-size: 15px;
        font-weight: 700;
        line-height: 20px;
        margin-left: 11px;
      }
    }
  }

  &__description {
    color: #454B58;
    font-size: 14px;
    font-weight: 400;
    line-height: 182.85%;
    margin-left: 22px;

    &-wrapper {
      display: flex;
      justify-content: space-between;

      svg {
        flex-shrink: 0;
      }
    }
  }

  &__team {
    display: flex;
    flex-wrap: wrap;

    &-item {
      width: calc(50% - 12px);
      display: flex;
      padding: 15px 23px;
      align-items: center;
      margin-bottom: 15px;
      margin-right: 24px;
      border: 1px solid #DCE3E8;
      background: rgba(242, 245, 250, 0.60);

      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    &-pfp {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      margin-right: 17px;
      border-radius: 100px;
    }

    &-name {
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 600;
      line-height: 19px;
      margin-bottom: 3px;
    }

    &-lang {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: normal;

      span {
        color: #292C32;
      }
    }
  }

  &__lessons {

    &-wrapper {
      background: #FFF;
      padding: 35px 40px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

      hr {
        background: #DCE3E8;
        margin: 29px 0 16px 0;
      }
    }

    &-title {
      color: #292C32;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
      margin-bottom: 15px;
    }

    &-row {
      display: flex;
      margin-bottom: 14px;
      align-items: flex-end;
      justify-content: space-between;

      span {
        display: block;
        color: #292C32;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
      }

      p {
        color: #454B58;
        font-size: 15px;
        font-weight: 400;
        line-height: 150%;
      }
    }

    &-amount {
      color: #8B919E;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 10px;
    }

    &-options {
      display: flex;
      max-width: 250px;
      justify-content: space-between;
    }
  }

  &__lesson {
    margin-bottom: 15px;
    padding: 22px 26px 34px;
    border: 1px solid #DCE3E8;
    background: rgba(242, 245, 250, 0.60);

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    &-date {
      color: #8B919E;
      font-size: 13px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 7px;
    }

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 19px;
      margin-bottom: 14px;
    }

    &-tags {
      display: flex;
      margin-bottom: 22px;
    }

    &-row {
      display: flex;
    }

    &-label {
      color: #8B919E;
      font-size: 14px;
      font-weight: 500;
      line-height: 23px; /* 164.286% */
    }

    &-value {
      color: #292C32;
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  &__possibilities {
    display: flex;
    flex-wrap: wrap;

    &-item {
      color: #454B58;
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      padding: 8px 22px;
      margin-right: 15px;
      margin-bottom: 15px;
      border-radius: 20px;
      background: #F0F4F8;
    }
  }

  &__cv {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    &-year {
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;
      padding: 8px 12px;
      margin-right: 28px;
      border-radius: 20px;
      background: #55ABFA;
      flex-shrink: 0;
    }

    &-title {
      color: #292C32;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
    }

    &-sub {
      color: #454B58;
      font-size: 14px;
      font-weight: 500;
      line-height: 182.85%;
    }

    &-text {
      color: #454B58;
      font-size: 14px;
      font-weight: 400;
      line-height: 182.85%;
    }
  }

  &__awards {
    display: flex;
    flex-wrap: wrap;
  }

  &__award {

    &-wrapper {
      position: relative;
      margin-left: 20px;
      margin-bottom: 30px;
    }

    &-counter {
      width: 36px;
      height: 36px;
      position: absolute;
      right: 5px;
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

.tag {
  height: 36px;
}
</style>
