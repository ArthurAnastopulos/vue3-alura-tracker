import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Task from "@/views/Task.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Task
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjectsView
    },
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;