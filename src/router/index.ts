import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Task from "@/views/Task.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import FormView from "@/views/Projects/FormView.vue";
import ListView from "@/views/Projects/ListView.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Task
    },
    {
        path: '/projetos',
        component: ProjectsView,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: ListView
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: FormView
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: FormView,
                props: true
            },
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;