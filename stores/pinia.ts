import { createPinia, Pinia } from 'pinia'

let piniaInstance: Pinia|null = null

export const pinia = ((): Pinia => {
    if (piniaInstance !== null) return piniaInstance

    piniaInstance = createPinia()

    return piniaInstance
})()