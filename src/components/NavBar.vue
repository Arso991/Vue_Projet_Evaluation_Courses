<template>
    <nav class="header">
        <div class="header__content">
            <p class="header__content__left">Bienvenue </p>
            <p class="header__content__right"><button @click="signOut">Deconnexion</button></p>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

/* const {initialiseUser} = useUsersStore()
const { user } = storeToRefs(useUsersStore()) */
const router = useRouter()


/* onMounted(() =>{
    initialiseUser()
}) */

async function signOut() {
    const { error } = await supabase.auth.signOut()
    if(error){
        console.log('Vous voulez vous deconnectez')
    }else{
        router.replace('/index')
    }
}

</script>

<style scoped>
.header {
    padding: 1.5rem 1rem;
    background-color: rgb(247, 244, 244);
}

.header__content {
    display: flex;
    justify-content: space-between;
}

.header__content__left {
    font-size: 1.2rem;
    color: #252538;
}

.header__content__right button{
    padding: .5rem;
    color: white;
    background-color: #e7c57d;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
</style>@/lib/supabase