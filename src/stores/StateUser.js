import { defineStore } from 'pinia';
import { auth} from "@/firebase/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";

export const stateUser = defineStore({
  id: 'stateUser',
  state: () => ({
    user: null,
  }),
  actions: {
    async checkAuth() {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user))
          } else {
              localStorage.setItem('user', null)
          }
          
      })
      // signOut(auth)
     
     
    },
  }
})