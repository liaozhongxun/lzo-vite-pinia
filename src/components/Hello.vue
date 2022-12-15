<script setup>
import useHome from "../store/home";
const homeStore = useHome();
console.log(homeStore.name);

let countA = ()=>{
  homeStore.addCount();
}
</script>

<template>
    <button @click="countA">+1</button>
    <div>{{ homeStore.name }}</div>
    <div>{{ homeStore.connName }}</div>
    <div>{{ homeStore.count }}</div>
    <div>{{ homeStore.countDouble(8) }}</div>
</template>

<style scoped></style>
