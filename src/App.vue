<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
            <SidebarMenu />
        </div>
        <div class="column is-three-quarter">
            <FormMenu />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarMenu from './components/SidebarMenu.vue';
import FormMenu from './components/FormMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarMenu,
    FormMenu
  }
});
</script>

<style>

</style>
