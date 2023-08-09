import { defineStore } from 'pinia'

export const useModalsStore = defineStore({
    id: 'modals',
    state: () => ({
        currentModal: '',
    }),
    actions: {
        closeModal() {
            this.currentModal = ''
        }
    }
})
