<template>
    <table>
        <thead>
            <th>N</th>
            <th>Titre</th>
            <th>Nom du Client</th>
            <th>Localisation</th>
            <th>Actions</th>
        </thead>
        <tbody v-if="courseCompleted">
            <tr v-for="element in courseCompleted">
                <td>{{ element.idCourse }}</td>
                <td>{{ element.title }}</td>
                <td>{{ element.client_name }}</td>
                <td>{{ element.localisation }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useCoursesStore } from '@/stores/courses';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const {initialiseCompleted} = useCoursesStore()
const {courseCompleted} = storeToRefs(useCoursesStore())

onMounted(async () => {
    await initialiseCompleted()
})
</script>

<style scoped>
.complete__list{
    display: grid;
    grid-template-columns: repeat(4, 200px);
}
</style>