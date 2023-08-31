<template>
<footer class="footer">
  <div class="container">
    <div class="footer__row">
      <div class="footer__row-one">
        <div class="footer__logo">
          <p>GuruLMS</p>
        </div>
        <div class="footer__social">
          <div class="footer__social-one">
            <IconsFacebook/>
            <IconsInstagram/>
            <IconsTwiter/>
          </div>
        </div>
        <div class="footer__row-copyright">
          <p>Unsounded ©  2021</p>
        </div>
      </div>
      <div class="footer__row-two">
        <h5>О портале</h5>
        <ul>
          <li>О нас</li>
          <li>Статьи</li>
          <li>Сообщество</li>
          <li>Поддержка</li>
        </ul>
      </div>
      <div class="footer__row-three">
        <h5>Категории обучения</h5>
        <ul>
          <li v-for="item in categoryLink">{{ item.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script setup>
import IconsFacebook from '@/assets/icons/social/Facebook.vue'
import IconsInstagram from '@/assets/icons/social/Instagram.vue'
import IconsTwiter from '@/assets/icons/social/Twiter.vue'
import IconsViber from '@/assets/icons/social/Viber.vue'
import IconsTelegram from '@/assets/icons/social/Telegram.vue'

const categoryLink = [
  {
    title: 'Английский язык'
  },
  {
    title: 'Испанский язык'
  },
  {
    title: 'Немецкий язык'
  },
  {
    title: 'Курсы HTML'
  },
  {
    title: 'Курсы php'
  },
  {
    title: 'Курсы SMM'
  },
]
</script>

<style lang="scss">
.footer{
  background: #fff;
  font-family: Montserrat;
  height: 280px;
  &__logo{
    display: flex;
    align-items: center;
    p{
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      background: linear-gradient(90deg, #F04973 0%, #FA6655 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 4px 9px;
      border: 1px solid rgba(241, 74, 115, 1);
      border-radius: 12px;
    }
    span{
      color: #454B58;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-left: 6px;
    }
  }
  &__social{
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: 40px;
    &-one{
      display: flex;
      gap: 17.32px;
    }
  }
  &__row{
    display: flex;
    padding-left: 117px;
    padding-top: 46px;
    &-copyright{
      margin-top: 27px;
      p{
        color: #454B58;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    &-two{
      margin-left: 298px;
      h5{
        color: #454B58;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 146.667% */
        text-transform: uppercase;
      }
      ul{
        margin-top: 10px;
        li{
          color: #454B58;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 27px */
        }
      }
    }
    &-three{
      margin-left: 205px;
      h5{
        color: #454B58;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 146.667% */
        text-transform: uppercase;
      }
      ul{
        margin-top: 10px;
        li{
          color: #454B58;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 27px */
        }
      }
    }
  }
}
ul{
  padding: 0;
  list-style-type: none;
  margin: 0;
  li{
    cursor: pointer;
  }
}
</style>