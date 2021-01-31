<template>
  <v-container>
    <v-row class="justify-center pt-10 ">
      <h1>Login</h1>
    </v-row>
    <v-row class="justify-center pt-10">
      <v-card elevation="13" loading shaped height="300" width="450"> 
        <v-card-title class="justify-center">Ingrese Usuario</v-card-title>
        <v-row class="pt-5">
          <v-card-subtitle class="pt-5">Nombre de Usuario</v-card-subtitle>
          <v-text-field :rules="rules" class="pr-8"></v-text-field>
        </v-row>
        <v-row>
          <v-card-subtitle class="pt-5">Contraseña</v-card-subtitle>
          <v-text-field :rules="rules" class="pr-8" type="password"></v-text-field>
        </v-row>
        <v-row class="justify-center pt-10">
          <v-btn elevation="2" color="primary" router-link to="/Inicio">Ingresar</v-btn>
        </v-row>
      </v-card>
    </v-row> 
  </v-container>
  
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    rules: [
      (value) => !!value || "Requerido.",
      (value) => (value || "").length <= 20 || "Max 20 characters",
    ],
  }),
};
</script>
