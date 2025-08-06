<template>
  <BoxMenu>
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
      <div class="column">
        <StopWatch :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </BoxMenu>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StopWatch from "./StopWatch.vue";
import ITask from '../interfaces/ITask'
import BoxMenu from "./BoxMenu.vue";

export default defineComponent({
  name: "TaskMenu",
  components: {
    StopWatch,
    BoxMenu
  },
  props: {
    tarefa: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
});
</script>