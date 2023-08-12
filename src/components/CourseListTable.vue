<template>
    <table>
        <thead>
            <th></th>
            <th>N</th>
            <th>Titre</th>
            <th>Nom du Client</th>
            <th>Localisation</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <tr  v-for="element in courses" :class="element.is_finished ? 'active' : ''">
                <td><input type="checkbox" v-model="element.is_finished" :checked="element.is_finished" @input="change(element)">
                </td>
                <td v-if="element.idCourse">{{ element.idCourse }}</td>
                <td>{{ element.title }}</td>
                <td>{{ element.client_name }}</td>
                <td>{{ element.localisation }}</td>
                <td class="last_td">
                    <div>
                        <button> <RouterLink :to="`/user/course${element.idCourse}`"> &plus; </RouterLink></button>
                    </div>
                    <starIcon class="star" @click="importantCourse(element)" :is_important="element.is_important"
                        :course="element" />
                    <trashIcon class="trash" @click="deleteBtn(element)" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import starIcon from './starIcon.vue';
import trashIcon from '@/components/trashIcon.vue'
import { useCoursesStore } from '@/stores/courses';
import { storeToRefs } from 'pinia'
import type { Course } from '@/types/courses'
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { RouterLink } from 'vue-router';

const { initialise } = useCoursesStore();
const { courses } = storeToRefs(useCoursesStore());

const courseData = ref<Course>(
    {
        title: '',
        description: '',
        localisation: '',
        client_name: '',
        is_finished: false,
        is_important: false
    }
)
onMounted(async () => {
    await initialise()
})

defineProps(['course'])

function importantCourse(element:Course) {

    async function updateCourse() {      
        const { error } = await supabase
        .from('Courses')
        .update({ is_important : !element.is_important })
        .eq('idCourse', element.idCourse)
    }
    updateCourse()
    element.is_important = !element.is_important
}

function change(element:Course){
    
    async function updateCourse() {
        const { error } = await supabase
        .from('Courses')
        .update({ is_finished : !element.is_finished })
        .eq('idCourse', element.idCourse)
    }

    updateCourse()
}

function deleteBtn(element:Course){
    
   async function deleteCourse(){
    const { error } = await supabase
    .from('Courses')
    .delete()
    .eq('idCourse', element.idCourse)
   } 

   /* deleteCourse() */
    
}

</script>

<style scoped>
table th,
table td{
    padding: .5rem 1rem;
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
table tr:nth-child(even) .last_td button{
    background-color: rgb(224, 224, 249);
}

.active {
    color: gray;
    text-decoration: line-through;
}

.star {
    width: 1rem;
    cursor: pointer;
}

.last_td {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.trash {
    color: red;
    cursor: pointer;
}

.last_td button {
    cursor: pointer;
    background-color: white;
    border: none;
    padding: .1rem;
    color: #e7c57d;
    font-size: 2rem;
}
</style>