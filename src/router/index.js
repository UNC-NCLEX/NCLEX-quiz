import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StudentDashboard from '../views/StudentDashboard.vue'
import InstructorDash from '../views/InstructorDash.vue'
import Roster from '../views/Roster.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/login',
        beforeEnter() {
            window.location.href = "https://shibboleth-dept-nclex-interactive-quiz.apps.cloudapps.unc.edu";
        }
    },
    {
        path: '/StudentDashboard',
        name: 'Student Dashboard',
        component: StudentDashboard
    },
    {
        path: '/InstructorDashboard',
        name: 'Instructor Dashboard',
        component: InstructorDash
    },
    {
        path: '/Roster',
        name: 'Roster',
        component: Roster
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router