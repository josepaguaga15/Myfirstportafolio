import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: Home  // Replace with About.vue when ready
        },
        {
            path: "/projects",
            name: "Projects",
            component: Home  // Replace with Projects.vue when ready
        },
    ],

    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
