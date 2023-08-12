<template>
    <div class="wrapper">
        <table>
        <thead>
            <th>N</th>
            <th>Titre</th>
            <th>Nom du Client</th>
            <th>Localisation</th>
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
    </div>
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
.wrapper{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
table th,
table td{
    padding: 1rem 1.5rem;
    text-transform: uppercase;
}

table thead th {
    font-size: 1rem;
    font-weight: 600;
    background-color: #e7c57d;
    text-align: start;
    text-transform: capitalize;
    color: white;
}

table tr:nth-child(even) td{
    background-color:  rgb(224, 224, 249);
}
</style>