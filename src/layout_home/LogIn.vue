<template>
    <div class="banner">
        <div class="container">
            <div class="banner__content">
                <div class="banner__content__left">
                    <LogInForm/>
                </div>
                <div class="banner__content__right">
                    <img src="../assets/list_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LogInForm from '@/components/LogInForm.vue';


</script>

<style scoped>
input {
    outline: none;
    width: 100%;
    border: 1px solid #e7c57d;
    color: #31374f;
}

img {
    height: auto;
    width: 100%;
}
.banner{
    width: 72rem;
}

.banner__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.banner__content__left {
    width: calc(100% - 30rem);
}

.banner__content__right {
    width: 25rem;
}

.container {
    padding: 0 5rem;
    margin: 0 auto;
}
.banner__content__right {
    width: 25rem;
}
</style>