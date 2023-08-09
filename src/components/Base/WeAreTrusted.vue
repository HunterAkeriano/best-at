<template>
  <div class="we-are-trusted">
    <div class="container">
      <h2>Нам доверяют</h2>

      <div class="we-are-trusted__wrapper">
        <img
            class="we-are-trusted__img"
            src="../../assets/img/main/we-are-trusted-1.png"
            alt="" width="254" height="89"
        >

        <img
            class="we-are-trusted__img"
            src="../../assets/img/main/we-are-trusted-1.png"
            alt="" width="254" height="89"
        >

        <img
            class="we-are-trusted__img"
            src="../../assets/img/main/we-are-trusted-1.png"
            alt="" width="254" height="89"
        >

        <img
            class="we-are-trusted__img"
            src="../../assets/img/main/we-are-trusted-1.png"
            alt="" width="254" height="89"
        >
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.we-are-trusted {

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 70px;
  }

  &__img {
    width: 254px;
    height: 89px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
