import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { ref } from "vue";
import type { Course } from "@/types/courses";



export const useCoursesStore = defineStore("courses", () => {
    const courses = ref<Course[]>([])

    async function initialise() {
        const {data, error} = await supabase.from('Courses').select('*');
        if(data){
            courses.value = data
        }
    }

    async function addCourse (course:Course){
        const {data, error} = await supabase.from('Courses').insert(course).select('*')
        if(data){
            courses.value.push(data[0])
        }
    }

    async function updateCourse(course:Course){
        const{error} = await supabase.from('Courses').update({is_finished:!'is_finished'}).eq('id', course.idCourse)
    }

    return {courses ,initialise, addCourse}
} )