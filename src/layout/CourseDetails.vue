<template>
    <main>
        <div class="container" v-if="courseData">
            <div class="main__content">
                <div class="main__content__letf">
                    <p v-if="courseData.is_important == true">IMPORTANT</p>
                    <div class="main__content__left__img">
                        <img src="../../public/maps.png" alt="">
                    </div>
                    <p>{{ courseData?.localisation }}</p>
                </div>
                <div class="main__content__right">
                    <h1>{{ courseData.title }}</h1>
                    <p class="main__content__right__description">{{ courseData.description }}</p>
                    <p class="main__content__right__name">Nom du client: <span>{{ courseData.client_name }}</span></p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCoursesStore } from "@/stores/courses";
import { ref } from "vue";
import type { Course } from "@/types/courses";

const {courses} = useCoursesStore()
const route = useRoute()
const id = route.params.id

const courseData = ref<Course>()
const details = courses.find((item)=> item.idCourse == Number(id))
courseData.value = details
</script>

<style scoped>
main{
    width: 100%;
}
.main__content{
    display: flex;
}
.main__content__letf{
    width: calc(100% - 30rem);
}
.main__content__letf p{
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: #252538;
}
.main__content__left__img{
    width: 25rem;
}
.main__content__right{
    display: flex;
    flex-direction: column;
}
.main__content__right h1{
    text-transform: uppercase;
    color: #252538;
}
.main__content__right p{
    margin-top: 1rem;
}
.main__content__right__description{
    font-size: 1.2rem;
}
.main__content__right__name{
    font-size: 2rem;
    color: #252538;
}
.main__content__right__name span{
    text-transform: uppercase;
    font-size: 1.5rem;
}

</style>