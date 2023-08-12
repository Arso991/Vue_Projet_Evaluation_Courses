<template>
    <main>
        {{ courseData.title }}
    </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCoursesStore } from "@/stores/courses";
import { ref } from "vue";

const {courses} = useCoursesStore()
const route = useRoute()
const id = route.params.id

const courseData = ref()
const details = courses.find((item)=> item.idCourse == Number(id))
courseData.value = details
</script>