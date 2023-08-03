<template>
  <div class="page">
    <div class="page__bg">

    </div>

    <div class="container">
      <div class="page__navigation">
        <a class="page__navigation-link">
          Главная
        </a>

        <p class="page__navigation-current">
          <span>/</span> Список преподавателей
        </p>
      </div>

      <h1 class="page__title">Список преподавателей</h1>

      <div class="page__content">
        <!--    Component?    -->
        <div class="page__content-filter">
          <div class="filter__title">Фильтры</div>

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__range">
            <div class="filter__label">Язык преподавания</div>
            <div class="filter__item" />
          </div>

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__label">Язык преподавания</div>
          <div class="filter__item" />

          <div class="filter__button" />

          <div class="filter__reset">Сбросить фильтр</div>
        </div>

        <div class="page__content-wrapper">
          <TeacherCard
              v-for="card in 6" :key="card"
          />

          <div class="page__content-pagination" />
        </div>
      </div>
    </div>

    <div class="page__section">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<script setup>
import TeacherCard from '@/components/Base/TeachersCatalogCard.vue'

function getActiveTab (tab, id) {
  console.log(tab, id)
}
</script>

<style scoped lang="scss">

.page__navigation {
  display: flex;
  margin: 23px 0 24px;
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

.page__title {
  color: #292C32;
  font-family: EB Garamond, serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2;
}

.page__content {
  display: flex;
  align-items: flex-start;
  padding: 27px 0 30px;

  &-filter {
    //
    min-width: 280px;
    height: 965px;
    //
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);
    margin-right: 70px;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-pagination {
    //
    width: 245px;
    height: 40px;
    background: #F04973;
    //
    display: flex;
    margin-top: 10px;
  }
}

.filter {

  &__title {
    color: #292C32;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 11px;
  }

  &__label {
    color: #8B919E;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    margin-bottom: 2px;
  }

  &__item {
    //
    width: 100%;
    height: 35px;
    //
    border-radius: 20px;
    background: #F2F5FA;
    margin-bottom: 15px;
  }

  &__range {
    margin: 25px 0 60px;
  }

  &__button {
    //
    width: 100%;
    height: 50px;
    //
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
    box-shadow: 0 15px 25px 0 rgba(193, 42, 61, 0.20);
    margin-top: 17px;

    &:hover {
      background: linear-gradient(90deg, #00D2FF 0%, #2596FF 100%);
    }
  }

  &__reset {
    cursor: pointer;
    margin-top: 14px;
    color: #F04973;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    text-decoration-line: underline;
  }
}

</style>
