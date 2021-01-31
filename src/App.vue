<template>
  <v-app>
    <v-app-bar dark app>
    <v-toolbar>
      <v-toolbar-title>Registro de Tareas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success" to="/">
        Login
      </v-btn>
      <v-btn class="error" to="/Inicio">
        Inicio
      </v-btn>
    </v-toolbar>
</v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Login', path: '/', icon: '' },
          { title: 'Inicio', path: '/Inicio', icon: '' },
     ]
    }
  },
};
</script>
<style>

</style>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
