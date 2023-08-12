<template>
    <form action="" @submit.prevent="createUser">
        <p class="sign__title">Inscription</p>
        <div class="form__item">
            <!-- <p>Ico</p> -->
            <input type="text" placeholder="Name" v-model="userData.name">
        </div>
        <div class="form__item">
            <!-- <p>Ico</p> -->
            <input type="email" placeholder="Adresse mail" v-model="userData.email">
        </div>
        <div class="form__item">
            <!-- <p>Ico</p> -->
            <input type="password" placeholder="Mot de passe" v-model="userData.password">
        </div>
        <button type="submit">Valider</button>
    </form>
</template>

<script setup lang="ts">

import type { User } from '@/types/users';
import { ref } from 'vue'
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

const router = useRouter()
const userData = ref<User>(
    {
        password: '',
        name: '',
        email: ''
    }
)



async function createUser() {
    const { data, error } = await supabase.auth.signUp({
        email: userData.value.email,
        password: userData.value.password,
    })
    if (error) {
        console.log('Vous avez entré un email invalide');
        
    }else{
        router.replace('/user')
    }
}

</script>

<style scoped>
.sign__title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
}

.form__item {
    display: flex;
    align-items: center;
}

.form__item p {
    background-color: #e7c57d;
    padding: .5rem;
    color: #fff;
}

.form__item input {
    padding: .5rem;
}

form button {
    padding: .5rem 0;
    font-size: 1rem;
    font-weight: 600;
    background-color: #e7c57d;
    border: none;
    color: #fff;
    cursor: pointer;
}

::placeholder {
    color: #31374f;
}
</style>@/lib/supabase