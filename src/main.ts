import "./assets/main.css";

import { createApp } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useUsersStore } from "./stores/users";
import { supabase } from "./lib/supabase";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

/* router.beforeEach( (to, from) => {

    const is_login = localStorage.getItem('is_login')
  
    if( is_login == 'false' ){

        return '/index/login'
    }
  
    
  }); */

app.use(router);

app.mount("#app");
