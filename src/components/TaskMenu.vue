<template>
  <BoxMenu>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <StopWatch :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </BoxMenu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopWatch from './StopWatch.vue';
import BoxMenu from './BoxMenu.vue';
import ITask from '@/interfaces/ITask';

export default defineComponent({
  name: 'TaskMenu',
  components: {
    StopWatch,
    BoxMenu
  },
  props: {
    tarefa: {
      type: Object as PropType<ITask>,
      required: true
    }
  },
  computed: {
    tempoGasto () : string {
      return new Date(this.tarefa.duracaoEmSegundos * 1000)
        .toISOString()
        .substr(11, 8)
    }
  }
});
</script>