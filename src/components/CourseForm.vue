<template>
    <div class="wrapper">
        <form action="" @submit.prevent="addCourse(courseData)">
            <h1>Commande</h1>
            <input type="text" placeholder="Titre" v-model="courseData.title">
            <input type="text" placeholder="Nom du Client" v-model="courseData.client_name">
            <input type="text" placeholder="Adresse de livraison" v-model="courseData.localisation">
            <textarea rows="4" placeholder="Description de la livraison" v-model="courseData.description"></textarea>
            <button type="submit">&plus;</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from '@/stores/courses';
import type { Course } from '@/types/courses';
import {ref, onMounted} from 'vue' 

const courseData = ref<Course>(
    {
        title : '',
        description : '',
        localisation:'',
        client_name : '',
        is_finished: false,
        is_important: false 
    }
)

const {addCourse} = useCoursesStore()

</script>

<style scoped>
    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        width: 20rem;
        padding: 1.5rem;
        background-color: #252538;
        border-radius: 10px;
    }

    form h1{
        color: white;
        text-align: center;
    }

    form input,
    form textarea{
        padding: 1rem;
        font-size: 1rem;
        color: #252538;
    }
    
    ::placeholder{
        color: #252538;
        font-size: 1rem;
    }
    form button{
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
        background-color: #e7c57d;
        border: none;
        cursor: pointer;
    }
</style>