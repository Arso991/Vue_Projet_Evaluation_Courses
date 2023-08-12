<template>
    <form action="" @submit.prevent="connect">
        <p class="login__title">Connexion</p>
        <div class="form__item">
            
            <input type="email" placeholder="Adresse Email" v-model="connectData.email">
        </div>
        <div class="form__item">
            
            <input type="password" placeholder="Mot de passe" v-model="connectData.password">
        </div>
        <button type="submit">Valider</button>
    </form>
</template>

<script setup lang="ts">
import type {User} from '@/types/users'
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

const router = useRouter()
const connectData = ref<User>(
    {
        password: '',
        name: '',
        email: ''
    }
)

async function connect() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: connectData.value.email,
        password: connectData.value.password,
    })
    if (error) {
        console.log('Vous avez entré un mot de passe invalide');
        
    }else{
        router.replace('/user')
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: center;
    gap: .5rem;
    flex-direction: column;
    background-color: #31374f;
    width: 20rem;
    padding: 1.5rem;
    border-radius: 10px;
}
.login__title {
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