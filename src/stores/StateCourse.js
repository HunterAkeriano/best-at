import { defineStore } from 'pinia';

export const stateCourse = defineStore({
  id: 'stateCourse',
  state: () => ({
    teacher: [],
    idTeacher: null,
  }),
})