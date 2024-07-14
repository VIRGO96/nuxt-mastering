export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        isActive: true,
    }),

    getters: {
        doubleCount: (state) => state.count * 2,
    },

    actions: {
        increment() {
            this.count++;
        },
    },

    persist: {
        storage: persistedState.localStorage,
    },
});
