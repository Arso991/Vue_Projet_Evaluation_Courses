<template>
    <div class="banner">
        <div class="container">
            <div class="banner__content">
                <div class="banner__content__left">
                    <SignUpForm/>
                </div>
                <div class="banner__content__right">
                    <img src="../assets/list_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SignUpForm from '@/components/SignUpForm.vue';

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

form {
    display: flex;
    justify-content: center;
    gap: .5rem;
    flex-direction: column;
    background-color: #31374f;
    width: 20rem;
    padding: 1.5rem;
    border-radius: 10px;
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