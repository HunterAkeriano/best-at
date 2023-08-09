<template>
  <div class="popular-courses">
    <div class="container">
      <h2>Популярные курсы</h2>

      <div class="popular-courses__wrapper">
        <div class="popular-courses__card">
          <div class="popular-courses__card-img" />

          <div class="popular-courses__card-content">
            <div class="popular-courses__card-title">Курс создания программного обеспечения</div>

            <Button
                :width="130"
                :padding="10"
            >
              Начать
            </Button>
          </div>
        </div>

        <div class="popular-courses__card">
          <div class="popular-courses__card-img" />

          <div class="popular-courses__card-content">
            <div class="popular-courses__card-title">Курс создания программного обеспечения</div>

            <Button
                :width="130"
                :padding="10"
            >
              Начать
            </Button>
          </div>
        </div>

        <div class="popular-courses__card">
          <div class="popular-courses__card-img" />

          <div class="popular-courses__card-content">
            <div class="popular-courses__card-title">Базовые навыки разговорного испанского языка</div>

            <Button
                :width="130"
                :padding="10"
            >
              Начать
            </Button>
          </div>
        </div>

        <div class="popular-courses__card">
          <div class="popular-courses__card-img" />

          <div class="popular-courses__card-content">
            <div class="popular-courses__card-title">Базовые навыки разговорного испанского языка</div>

            <Button
                :width="130"
                :padding="10"
            >
              Начать
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/UI/Buttons/Button.vue'
</script>

<style scoped lang="scss">
.popular-courses {
  margin-top: 95px;
  margin-bottom: 124px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
  }

  &__card {
    max-width: 315px;
    background: #FFF;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 60px 0 rgba(42, 102, 193, 0.15);

    &-img {
      width: 315px;
      height: 240px;
      background: #8B919E;
    }

    &-content {
      padding: 26px 22px 35px 23px;
    }

    &-title {
      color: #292C32;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      margin-bottom: 24px;
    }
  }
}
</style>
