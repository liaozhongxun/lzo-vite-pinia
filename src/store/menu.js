import { defineStore } from 'pinia';

const useMenu = defineStore('menu', {
    state: () => ({
        name: 'menuStore',
    }),
})

export default useMenu;