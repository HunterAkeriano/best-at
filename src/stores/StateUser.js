import { defineStore } from 'pinia';
import { auth} from "@/firebase/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";

export const stateUser = defineStore({
  id: 'stateUser',
  state: () => ({
    user: [],
    auth: null,
    userId: null,
  }),
  actions: {
    async checkAuth() {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            this.auth = user;
            localStorage.setItem('user', JSON.stringify(user))
          } else {
              localStorage.setItem('user', null)
          }
          
      })
      // 
    },
    async logout(){
      signOut(auth);
      localStorage.setItem('user', null);
      this.user = [];
      this.userId = null;
    }
  }
})