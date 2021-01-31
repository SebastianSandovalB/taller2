<template>
  <v-container>
    <v-row class="justify-center pt-15 align-items-center mx-3">
      <v-col>
        <h2>Nombre Tarea:</h2>
      </v-col>
      <v-col>
        <input
          @change="TaskTextChange"
          v-bind:value="TaskText"
          :rules="rules"
          class="col form-control mr-2"
          placeholder="Crear una nota....."
        />
      </v-col>
      <v-col>
        <button class="btn btn-primary" @click="addTaskI">
          Agregar Tarea
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  name: "Inicio",

  methods: {
    ...mapActions(["addTask"]),

    TaskTextChange(e){
        this.TaskText = e.target.value;
    },

    addTaskI() {
      this.addTask({
        id: v1(),
        title: this.TaskText
      });
      this.TaskText = "";
    }
  },
  data: () => ({
    rules: [
      (value) => !!value || "Requerido.",
      (value) => (value || "").length <= 200 || "Max 200 characters",
    ],
    TaskText: "",
  }),
};
</script>