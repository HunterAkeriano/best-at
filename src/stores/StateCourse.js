import { defineStore } from 'pinia';

export const stateCourse = defineStore({
  id: 'stateCourse',
  state: () => ({
    teacher: [],
    idTeacher: null,
    plan: [
      {
        type: 0,
        title: '',
        time: '',
        date: '',
      },
    ],
    idTeacher: null,
  }),
})