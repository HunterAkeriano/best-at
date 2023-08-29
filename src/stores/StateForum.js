import { defineStore } from 'pinia';
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const stateForum = defineStore({
  id: 'stateForum',
  state: () => ({
    forum: [],
    idForum: null,
    idTheme: null, 
  }),
})