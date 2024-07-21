import SecureLS from 'secure-ls';

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
        storage: {
            getItem: (key) => {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '@#987asdui@',
                }).get(key);
            },
            setItem: (key, value) => {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '@#987asdui@',
                }).set(key, value);
            },
        },
    },
});
