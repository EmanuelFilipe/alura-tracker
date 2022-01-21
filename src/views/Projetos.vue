<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      /*const projeto: IProjeto = {
        id: new Date().toLocaleString(),
        nome: this.nomeDoProjeto,
      };

      this.projetos.push(projeto);*/
      this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
      this.nomeDoProjeto = "";
    },
  },
  setup() {
    const store = useStore();
    console.log("store", store);
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
