import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { computed, ref } from "vue";
import type { User } from "@/types/users";



export const useUsersStore = defineStore("courses", () => {
    const users = ref<User[]>([])
    const user= ref()
   
    async function initialiseUser(){
      const {data}= await supabase.auth.getSession()
      user.value = data.session?.user
    }

    async function initialise() {
        const {data, error} = await supabase.from('Users').select('*');
        if(data){
            users.value = data
        }
    }

    async function addUsers (user:User){
        const {data, error} = await supabase.from('Users').insert(user)
        if(data){
            users.value.push(data[0])
        }
    }

   

    /* return {users, user, initialise, initialiseUser, addUsers} */
})