<template>
  <div class="main page article">
    <div class="container">
      <div class="page__navigation">
        <a class="page__navigation-link">
          Главная
        </a>

        <p class="page__navigation-current">
          <span>/</span> Страница текстовая
        </p>
      </div>

      <h2 class="article__title">Текстовая страница</h2>

      <div class="article__content">
        <div class="article__date">28 июня 2021</div>

        <p class="article__text">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
          абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код
          речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет
          сделать текст более привлекательным и живым для визуально-слухового восприятия.
        </p>

        <p class="article__text">
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который
          вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба
          на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. По
          своей сути рыбатекст является альтернативой традиционному lorem ipsum.
        </p>

        <div class="article__quote">
          <Quotemarks/>

          <p class="article__quote-text">
            Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров,
            соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий способствует
            подготовки и реализации модели развития. Идейные соображения высшего порядка, а также консультация с широким
            активом способствует подготовки и реализации модели развития.
          </p>
        </div>

        <div class="article__subtitle">Создание группового урока</div>

        <div class="article__name">Дэн Миллман</div>

        <p class="article__text">
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
          недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
          любой макет непонятным смыслом и придаст неповторимый колорит советских времен. По своей сути рыбатекст
          является альтернативой традиционному lorem ipsum.
        </p>

        <div class="article__h3">Курс создания программного обеспечения</div>

        <div class="article__section">
          <div class="article__section-content">
            <div class="article__section-title">Образование</div>

            <p class="article__text">
              По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
              людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке
              наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. По своей сути
              рыбатекст является альтернативой традиционному lorem ipsum.
            </p>

            <p class="article__text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
              домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
              генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать
              текст более привлекательным и живым для визуально-слухового восприятия.
            </p>
          </div>

          <img class="article__section-img" src="../assets/img/article/article-img.jpg" alt="" width="448" height="400">
        </div>

        <div class="how-we-work__wrapper">
          <div class="how-we-work__step" v-for="(step, index) in steps" :key="index">
            <component :is="step.icon"/>

            <div class="how-we-work__step-title">{{ step.title }}</div>

            <p class="how-we-work__step-text">{{ step.text }}</p>
          </div>
        </div>

        <div class="article__block">
          <div class="article__block-tabs">
            <div class="article__block-tab">
              <Info/>

              <p>Информация</p>
            </div>

            <div class="article__block-tab">
              <Chat/>

              <p>Чат урока</p>
            </div>
          </div>

          <div class="article__block-content">
            <p>
              Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров,
              соответствует насущным потребностям. По своей сути рыбатекст является альтернативой традиционному lorem
              ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem
              ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит
              советских времен. По своей сути рыбатекст является альтернативой традиционному lorem ipsum.
            </p>
          </div>
        </div>

        <div class="article__tabs">
          <p>Видеоприветствие</p>

          <p>Описание</p>

          <p>Календарь</p>
        </div>

        <p class="article__text">
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
          недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
          любой макет непонятным смыслом и придаст неповторимый колорит советских времен. По своей сути рыбатекст
          является альтернативой традиционному lorem ipsum.
        </p>

        <div class="article__cards">
          <div class="article__card" v-for="item in arrayCourse">
            <div class="article__card-img">
              <img :src="item.img" alt="" width="350" height="200">
            </div>

            <div class="article__card-content">
              <div class="article__card-title">{{ item.title }}</div>

              <div class="article__card-description">
                Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы...
              </div>

              <Button
                  :width="140"
                  :padding="11"
              >
                Детальнее
              </Button>
            </div>
          </div>
        </div>

        <div class="article__list">
          <div class="article__list-item">
            <span class="article__list-number">1.</span>

            <p class="article__text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
              домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
            </p>
          </div>

          <div class="article__list-item">
            <span class="article__list-number">2.</span>

            <p class="article__text">
              Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет
              сделать текст более привлекательным и живым для визуально-слухового восприятия:
            </p>
          </div>

          <ul>
            <li>cайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру</li>
            <li>сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,</li>
            <li>при создании генератора мы использовали небезизвестный универсальный код речей.</li>
          </ul>

          <div class="article__list-item">
            <span class="article__list-number">3.</span>

            <p class="article__text">
              При создании генератора мы использовали небезизвестный универсальный код речей.
            </p>
          </div>
        </div>

        <div class="article__columns">
          <div class="article__columns-item">
            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
            недоумение при попытках прочитать рыбу текст. Сайт рыбатекст поможет дизайнеру, верстальщику
          </div>

          <div class="article__columns-item">
            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст
            неповторимый колорит советских времен.
          </div>

          <div class="article__columns-item">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
            осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {db} from "@/firebase/firebase";
import {collection, getDocs} from "firebase/firestore";
import Quotemarks from '@/assets/icons/Quotemarks.vue'
import StepOne from "@/assets/icons/main/how-we-work/StepOne.vue";
import StepTwo from "@/assets/icons/main/how-we-work/StepTwo.vue";
import StepThree from "@/assets/icons/main/how-we-work/StepThree.vue";
import Info from "@/assets/icons/article/Info.vue";
import Chat from "@/assets/icons/article/Chat.vue";
import Button from '@/components/UI/Buttons/Button.vue'


const steps = [
  {
    number: '01',
    icon: StepOne,
    title: 'Найдите преподавателя',
    text: 'Независимо от бюджета и предпочтений, вы точно сможете найти подходящего для себя учителя.'
  },
  {
    number: '02',
    icon: StepTwo,
    title: 'Пройдите урок',
    text: 'Уроки проходят прямо в вашем браузере. Никаких дополнительных загрузок и регистраций на сторонних сервисах.'
  },
  {
    number: '03',
    icon: StepThree,
    title: 'Учитесь каждый день и добивайтесь прогресса',
    text: 'Планы уроков, отчеты, сертификаты по окончании каждого этапа позволят вам с легкостью отслеживать прогресс'
  }
]

const arrayCourse = ref([]);

async function getCourse() {
  const querySnapshot = await getDocs(collection(db, "homeCousrse"));
  querySnapshot.forEach((doc) => {
    arrayCourse.value.push(doc.data());
  });
}

onMounted(() => {
  getCourse().then(() => {
    arrayCourse.value.pop()
  })
})
</script>

<style scoped lang="scss">
.page__navigation {
  display: flex;
  margin: 23px 0 16px;
  font-size: 14px;
  line-height: 16px;

  &-link {
    cursor: pointer;
    color: #454B58;
  }

  &-current {
    margin-left: 12px;
    color: #7D7F83;

    span {
      margin-right: 4px;
    }
  }
}

.article {

  &__title {
    text-align: left;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 117px;
    max-width: 1148px;
    padding-top: 20px;
  }

  &__date {
    width: 100%;
    color: #8B919E;
    font-size: 13px;
    text-align: left;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 16px;
  }

  &__text {
    color: #292C32;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 10px;
  }

  &__quote {
    display: flex;
    padding: 22px 0 46px;
    margin-left: 93px;

    svg {
      width: 42px;
      height: 29px;
      flex-shrink: 0;
      margin-top: 5px;
    }

    &-text {
      color: #454B58;
      font-size: 14px;
      font-weight: 400;
      max-width: 897px;
      margin-left: 18px;
      line-height: 182.85%;
    }
  }

  &__subtitle {
    color: #292C32;
    font-size: 25px;
    font-weight: 700;
    line-height: 28px;
  }

  &__name {
    color: #292C32;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 23px;
    margin-bottom: 15px;
  }

  &__h3 {
    color: #292C32;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    margin-top: 5px;
    margin-bottom: 19px;
  }

  &__section {
    display: flex;
    justify-content: space-between;

    &-content {
      max-width: 660px;
    }

    &-title {
      color: #292C32;
      font-size: 15px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 15px;
    }

    &-img {
      width: 448px;
      height: 400px;
    }
  }

  .how-we-work {

    &__wrapper {
      display: flex;
      margin-top: 47px;
      justify-content: space-between;
    }

    &__step {
      max-width: 330px;

      &-title {
        color: #292C32;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        margin-top: 14px;
        max-width: 300px;
      }

      &-text {
        color: #454B58;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        margin-top: 11px;
      }
    }
  }

  &__block {
    margin: 53px 0;
    background: #FFF;
    border-radius: 10px;
    box-shadow: 0 10px 40px 0 rgba(42, 102, 193, 0.10);

    &-tabs {
      display: flex;
    }

    &-tab {
      height: 50px;
      display: flex;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      padding: 15px 25px;
      align-items: center;

      p {
        margin-left: 6px;
      }
    }

    &-tab:nth-child(1) {
      width: 165px;
      color: #F04973;
      border-right: 1px solid #DCE3E8;
    }

    &-tab:nth-last-child(1) {
      width: 985px;
      background: #F2F5FA;
      border-radius: 0 10px 0 0;
      border-bottom: 1px solid #DCE3E8;
    }

    &-content {
      padding: 25px 26px 36px;
      color: #454B58;
      font-size: 13px;
      font-weight: 400;
      line-height: 25px;
    }
  }

  &__tabs {
    display: flex;
    margin-bottom: 20px;

    p {
      opacity: 0.6;
      color: #454B58;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.5;
      margin-left: 27px;

      &:nth-child(1) {
        opacity: 1;
        margin-left: 0;
        color: #F04973;
        font-weight: 600;
      }
    }
  }

  &__cards {
    display: flex;
    padding: 39px 0;
    max-width: 1146px;
    justify-content: space-between;
  }

  &__card {
    height: 449px;
    max-width: 350px;
    background: #FFF;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-img {
      width: 350px;
      height: 200px;
      border-radius: 0 0 10px 10px;

      img {
        object-fit: cover;
      }
    }

    &-content {
      height: 249px;
      display: flex;
      flex-direction: column;
      padding: 26px 22px 29px 23px;
    }

    &-title {
      height: 46px;
      color: #292C32;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      margin-bottom: 12px;
    }

    &-description {
      color: #454B58;
      font-size: 14px;
      line-height: 25px;
      margin-bottom: auto;
    }
  }

  &__list {
    margin-top: 100px;

    &-item {
      display: flex;

      span {
        display: block;
        color: #292C32;
        font-size: 15px;
        font-weight: 600;
        line-height: 30px;
        margin-right: 21px;
      }
    }

    ul {
      margin: -12px 0 6px 50px;
      list-style-type: circle;
      color: #292C32;
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
    }
  }

  &__columns {
    display: flex;
    margin-top: 36px;
    min-width: 1166px;
    margin-bottom: 90px;
    justify-content: space-between;

    &-item {
      width: 350px;
      color: #292C32;
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
    }
  }
}
</style>
