import { defineStore } from "pinia";

export const myStore = defineStore({
    id: "myStore",
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        }
    }
})