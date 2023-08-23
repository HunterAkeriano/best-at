<template>
  <div class="account" v-if="usersStore.userId !== null">
    <h4>Аккаунт</h4>
    <div class="delete" @click="modals.currentModal = 1">
      <DeleteIcon/>
      <p>Удалить аккаунт</p>
    </div>
    <div class="account__inputs">
      <div class="account__inputs-input">
        <p>ФИО</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].newName">
      </div>

      <div class="account__inputs-input" style="margin-top: 19px;">
        <p>Пароль</p>
        <input :type="!SHOW_PASSWORD ? 'password' : 'text'" v-model="usersStore.user[usersStore.userId].passwordNew">
        <IconShowPassOneState @click="SHOW_PASSWORD = !SHOW_PASSWORD" v-if="SHOW_PASSWORD"/>
        <IconShowPassTwoState  @click="SHOW_PASSWORD = !SHOW_PASSWORD" v-else/>
      </div>

      <div class="account__inputs-input"  style="margin-top: 16px;">
        <p>E-mail</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].emailNew">
      </div>

      <div class="account__inputs-input"  style="margin-top: 16px;">
        <p>Телефон</p>
        <input type="text" v-model="usersStore.user[usersStore.userId].phone">
      </div>

      <TheButton
      :width="239"
      :padding="15"
      style="margin-top: 28px;"
      @click="editUser()"
      >Сохранить изменения</TheButton>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

import TheButton from '@/components/UI/Buttons/Button.vue'
import IconShowPassOneState from '@/assets/icons/registration/ShowPassOne.vue'
import IconShowPassTwoState from '@/assets/icons/registration/ShowPassTwo.vue'
import DeleteIcon from '@/assets/icons/profile/DeleteIcon.vue'

import {stateUser} from "@/stores/StateUser";
import {useModalsStore} from "@/stores/modals";

const modals = useModalsStore();

// firebase
import {  doc, updateDoc  } from "firebase/firestore";
import { db,  auth } from "@/firebase/firebase";
import { updatePassword, updateEmail, signInWithEmailAndPassword} from "firebase/auth";

const usersStore = stateUser();

const SHOW_PASSWORD = ref(true);


async function editUser() {
  signInWithEmailAndPassword(auth, usersStore.user[usersStore.userId].email, usersStore.user[usersStore.userId].password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      if (user.email !== usersStore.user[usersStore.userId].emailNew) {
        usersStore.user[usersStore.userId].email = usersStore.user[usersStore.userId].emailNew;
        updateEmail(user, usersStore.user[usersStore.userId].emailNew)
        .then(async () => {
          const data = await signInWithEmailAndPassword(auth, usersStore.user[usersStore.userId].email, usersStore.user[usersStore.userId].password);
          usersStore.auth = data.user;
          localStorage.setItem('user', JSON.stringify(data.user));
        })
        .catch((error) => {
          console.log(error);
        });
      }
      if (usersStore.user[usersStore.userId].passwordNew !==  usersStore.user[usersStore.userId].password ) {
        usersStore.user[usersStore.userId].password = usersStore.user[usersStore.userId].passwordNew;
        updatePassword(user, usersStore.user[usersStore.userId].password)
        .then(async () => {
          const data = await signInWithEmailAndPassword(auth, usersStore.user[usersStore.userId].email, usersStore.user[usersStore.userId].password);
          usersStore.auth = data.user;
          localStorage.setItem('user', JSON.stringify(data.user));
        })
        .catch((error) => {
          console.log(error);
        });
      }
      usersStore.user[usersStore.userId].name = usersStore.user[usersStore.userId].newName;
      const userData = {
        email: usersStore.user[usersStore.userId].email,
        password: usersStore.user[usersStore.userId].password,
        name: usersStore.user[usersStore.userId].name,
        phone: usersStore.user[usersStore.userId].phone,
      };
      await updateDoc(doc(db, "allUser", usersStore.user[usersStore.userId].docName), userData);
    });
}
</script>

<style lang="scss">
.account{
  font-family: Montserrat;

  .delete{
    position: absolute;
    right: 20px;
    top: 200px;
    display: flex;
    align-items: center;
    cursor: pointer;

    p{
      color: #8B919E;
      font-family: Montserrat;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 182.85%; /* 23.771px */
      text-decoration-line: underline;
      margin-left: 6.35px;
    }
  }

  h4{
    color: #292C32;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 110% */
    font-family: Montserrat;
  }

  &__inputs{
    margin-top: 24px;
    &-input{
      position: relative;
      p{
        color: #8B919E;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px; 
        margin-bottom: 7px;
      }

      input{
        border-radius: 20px;
        background: #F2F5FA;
        border: 0;
        width: 330px;
        font-size: 13px;
        color: #454B58;
        line-height: 24px;
        padding: 3px 22px;
        padding-right: 50px;
      }

      svg{
        position: absolute;
        right: 16px;
        bottom: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>