import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import projects from "../components/projects.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/projects",
            name: "projects",
            component: projects  
        }
        
    ],

    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
