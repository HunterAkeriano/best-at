import { defineStore } from 'pinia';

import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const stateLessons = defineStore({
  id: 'stateLessons',
  state: () => ({
    student: [],
    students: [],
    idStudent: null,
    idTeacher: null,
    lessons: [],
    idLess: null,
  }),
  actions:{
    async newDateTime(){
      this.lessons[this.idLess].lessonsStart = this.lessons[this.idLess].lessonsStartCopy;
      this.lessons[this.idLess].dateLessons = this.lessons[this.idLess].dateLessonsCopy;
      const newData = {
        dateLessons: this.lessons[this.idLess].dateLessons,
        lessonsStart: this.lessons[this.idLess].lessonsStart,
      }
      await updateDoc(doc(db, "lessons",  this.lessons[this.idLess].id), newData);

    },
    async deleteLessons(){
      await deleteDoc(doc(db, "lessons", this.lessons[this.idLess].id));
    }
  }
})