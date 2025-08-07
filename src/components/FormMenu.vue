<template>
  <div class="box">
    <div class="columns">
      <div class="column is-7" role="form" aria-label="Formulário para iniciar uma nova tarefa">
        <input
          class="input"
          type="text"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <TimerMenu @aoFinalizarTarefa="salvarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerMenu from "./TimerMenu.vue";

export default defineComponent({
  name: "FormMenu",
  emits: ['aoSalvarTarefa'],
  components: {
    TimerMenu,
  },
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    salvarTarefa (tempoEmSegundos: number) : void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoEmSegundos,
        descricao: this.descricao
      })
      this.descricao = ''
    }
  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>