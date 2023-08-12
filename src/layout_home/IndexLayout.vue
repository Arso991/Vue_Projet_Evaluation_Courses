<template>
    <div class="wrapper">
        <div class="wrapper__content">
            <IndexNavBar/>
            <RouterView/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import IndexNavBar from '@/components/IndexNavBar.vue';
</script>

<style scoped>
img{
    width: 100%;
    height: auto;
}
.wrapper__content{
    height: 30rem;
    background-color:white;
    box-shadow: 0 0 10px gray;
}

.wrapper {
    height: 100vh;
    width: 100%;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    background-color: #252538;
}
</style>