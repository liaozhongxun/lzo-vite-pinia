import { defineStore } from 'pinia';
import useMenu from './menu';

const useHome = defineStore('home', {
    state: () => ({
        name: 'homeStore',
        count: 0,
    }),
    getters: {
        countDouble(state) {
            return (num) => {
                return state.count * num;
            }
        },
        connName(state){
            let menuStore = useMenu();
            return state.name +'-'+ menuStore.name
        },
    },
    actions:{
        addCount(){
            this.count++
        }
    }
})

export default useHome;