<template>
  <div class="wrapper">
    <TheHeader v-if="is404Page"/>
    <div class="main" >
      <RouterView />
    </div>
    <TheFooter v-if="is404Page"/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import {ref, watch} from 'vue'

import TheHeader from '@/components/Base/TheHeader.vue'
import TheFooter from '@/components/Base/TheFooter.vue'


const route = useRoute();

const is404Page = ref(null);
watch(route, () => {
  if (route.name === 'Not Found') {
    is404Page.value = false;
  } else {
    is404Page.value = true;
  }
});

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
    height: 100vh;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
h5,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'EB Garamond', serif;
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
a{
  text-decoration: none;
  color: inherit;
}
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.main{
  flex: 1 1 auto;
  margin-top: 68px;
}
.container{
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

</style>