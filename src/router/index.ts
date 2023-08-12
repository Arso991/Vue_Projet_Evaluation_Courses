import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/layout_home/IndexLayout.vue'
import IndexHome from '@/layout_home/IndexHome.vue'
import SignUp from '@/layout_home/SignUp.vue'
import LogIn from '@/layout_home/LogIn.vue'
import User from '@/layout/UserLayout.vue'
import Home from '@/layout/Home.vue'
import CourseList from '@/layout/CourseList.vue'
import CompleteCourse from '@/layout/CompleteCourse.vue'
import RemoveCourse from '@/layout/RemoveCourse.vue'
import CourseDetails from '@/layout/CourseDetails.vue'
/* import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia' */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:Index,
      children : [
        {
          path:'/',
          name:'indexhome',
          component:IndexHome,
        },
        {
          path:'/signup',
          name:'sign',
          component:SignUp,
        },
        {
          path:'/login',
          name:'login',
          component:LogIn,
        }
      ]
    },
    {
      path:'/user',
      name:'user',
      component:User,
      children : [
        {
          path:'/user',
          name:'user_home',
          component:Home
        },
        {
          path:'/user/course',
          name:'course',
          component:CourseList
        },
        {
          path:'/user/course:id',
          name:'coursedetail',
          component:CourseDetails
        },
        {
          path:'/user/complete',
          name:'complete',
          component:CompleteCourse
        },
        {
          path:'/user/remove',
          name:'remove',
          component:RemoveCourse
        }
      ]
    }
  ]
})

export default router
