import { defineStore } from 'pinia'

export const useModalsStore = defineStore({
    id: 'modals',
    state: () => ({
        currentModal: undefined,
    }),
    actions: {
        closeModal() {
            this.currentModal = undefined
        }
    }
})
