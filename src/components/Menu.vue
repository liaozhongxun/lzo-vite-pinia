<script setup>
import useHome from "../store/home";
const homeStore = useHome();

</script>

<template>
    <div>{{ homeStore.count }}</div>
    <div>{{ homeStore.countDouble(8) }}</div>
</template>

<style scoped></style>
