import { defineStore } from 'pinia';

export const stateForum = defineStore({
  id: 'stateForum',
  state: () => ({
    forum: [],
    idForum: null,
    idTheme: null,
    idChat: null, 
  }),
})