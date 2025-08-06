<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter conteudo">
      <SidebarMenu  @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormMenu @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TaskMenu v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxMenu v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </BoxMenu>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarMenu from './components/SidebarMenu.vue';
import TaskMenu from './components/TaskMenu.vue';
import BoxMenu from './components/BoxMenu.vue'
import ITask from './interfaces/ITask';
import FormMenu from './components/FormMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarMenu,
    FormMenu,
    TaskMenu,
    BoxMenu
  },
  data () {
    return {
      tarefas: [] as ITask[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITask) {
      this.tarefas.push(tarefa)
    },
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>