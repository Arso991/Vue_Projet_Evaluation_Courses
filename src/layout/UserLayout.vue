<template>
    <div class="wrapper">
        <SideBar/>
        <main>
            <NavBar/>
            <div class="container">
                

                <RouterView/>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

import NavBar from '@/components/NavBar.vue';
import { RouterView, RouterLink } from 'vue-router';
import SideBar from '@/components/SideBar.vue';

</script>

<style scoped>
.wrapper{
    display: flex;
}
a{
    text-decoration: none;
}
main{
    width: calc(100% - 15rem);
}
.container{
    padding: 0 2rem;
    margin: 0 auto;
}
</style>
