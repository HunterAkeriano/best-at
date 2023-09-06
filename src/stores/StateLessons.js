import { defineStore } from 'pinia';

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
})