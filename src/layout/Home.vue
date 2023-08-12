<template>
    <div class="banner__top">
        <div class="contaner">
            <div class="banner__content">
                <div class="banner__content__top">
                    <div class="banner__content__top__item color__blue">
                        <p>Courses à faire</p>
                        <h1>{{ courses.length }}</h1>
                    </div>
                    <div class="banner__content__top__item color__blue__white">
                        <p>Courses completées</p>
                        <h1>{{ courseCompleted.length }}</h1>
                    </div>
                    <div class="banner__content__top__item color__red">
                        <p>Courses restantes</p>
                        <h1>{{ courseRest }}</h1>
                    </div>
                    <div class="banner__content__top__item color__gold">
                        <p>Courses importantes</p>
                        <h1>{{ courseImportant.length }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner__bottom">
        <div class="banner__bottom__left">
            <div class="banner__bottom__left__img">
                <img src="../../public/order.jpg" alt="">
            </div>
        </div>
        <div class="banner__bottom__right">
            <div class="banner__bottom__right__top">
                <div class="banner__bottom__right__top__img">
                    <img src="../../public/deliver.png" alt="">
                </div>
            </div>
            <div class="banner__bottom__right__bottom">
            
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from '@/stores/courses';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const {courses, courseCompleted, courseImportant, courseRest} = storeToRefs(useCoursesStore())
const {initialise, initialiseCompleted, initialiseImportant} = useCoursesStore()

onMounted(async ()=>{
    await initialise()
    await initialiseCompleted()
    await initialiseImportant()
})

</script>

<style scoped>
.banner__content {
    padding: 1rem 0;
}

.banner__content__top {
    display: grid;
    grid-template-columns: repeat(4, 220px);
    justify-content: space-between;
}

.banner__content__top__item {
    height: 6rem;
    padding-left: 1rem;
    border-radius: 5px;
    color: white;
}

.banner__content__top__item h1 {
    padding: .5rem;
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    background-color: white;
}

.color__blue {
    background-color: rgb(81, 81, 244);
}
.color__blue h1{
    color: rgb(81, 81, 244);
}

.color__blue__white {
    background-color: rgb(151, 189, 250);
}
.color__blue__white h1{
    color: rgb(151, 189, 250);
}
.color__red {
    background-color: rgb(245, 68, 68);
}
.color__red h1{
    color: rgb(245, 68, 68);   
}

.color__gold {
    background-color: rgb(249, 220, 54);
}
.color__gold h1{
    color: rgb(249, 220, 54);
}
.banner__bottom{
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
}
.banner__bottom__left{
    width: calc(100% - 35rem);
    height: 22rem;
    display: flex;
    justify-content: center;
}
.banner__bottom__left__img{
    width: 18rem;
}
.banner__bottom__right{
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.banner__bottom__right__top,
.banner__bottom__right__bottom{
    height: 10rem;
    display: flex;
    justify-content: center;
}
.banner__bottom__right__top__img{
    width: 20rem;
}
/* .banner__bottom__right__bottom{
    
} */
</style>