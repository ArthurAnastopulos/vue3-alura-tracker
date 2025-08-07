/* eslint-disable */

<template>
    <FormMenu @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <BoxMenu v-if="semTarefas">
            Você não está muito produtivo hoje <span class="has-text-weight-bold">:(</span>
        </BoxMenu>
        <TaskMenu v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormMenu from "@/components/FormMenu.vue";
import TaskMenu from "@/components/TaskMenu.vue";
import BoxMenu from "@/components/BoxMenu.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "App",
  components: {
    FormMenu,
    TaskMenu,
    BoxMenu
  },
  data () {
    return {
      tarefas: [] as ITask[]
    }
  },
  methods: {
    salvarTarefa (tarefa:ITask) : void {
      this.tarefas.push(tarefa)
    }
  },
  computed: {
    semTarefas () :boolean {
      return this.tarefas.length == 0
    }
  }
});
</script>