
import { createRouter, createWebHistory } from 'vue-router'
import ContactBook from "../components/ContactBook.vue"
import Notfound from "../components/Notfound.vue"

const routes = [
    { path: "/", component: ContactBook },

    { path: '/:pathMatch(.*)*', component: Notfound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;