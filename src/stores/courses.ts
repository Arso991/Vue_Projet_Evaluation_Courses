import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { computed, defineComponent, ref } from "vue";
import type { Course } from "@/types/courses";



export const useCoursesStore = defineStore("courses", () => {
    const courses = ref<Course[]>([])
    const courseCompleted = ref<Course[]>([])
    const courseImportant = ref<Course[]>([])

    const courseRest = computed(()=> courses.value.length - courseCompleted.value.length)

    async function initialise() {
        const {data, error} = await supabase.from('Courses').select('*');
        if(data){
            courses.value = data
        }
    }

    async function initialiseCompleted() {
        const {data, error} = await supabase.from('Courses').select('*').eq('is_finished','true')
        if(data){
            
            courseCompleted.value = data
        }
    }

    async function initialiseImportant() {
        const {data, error} = await supabase.from('Courses').select('*').eq('is_important','true')
        if(data){
            
            courseImportant.value = data
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

    return {courses, courseCompleted,courseImportant,courseRest ,initialise, addCourse, initialiseCompleted, initialiseImportant}
} )