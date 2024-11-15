<template>
  <v-app>
    <!-- Barra de navegación superior -->
    <v-app-bar app color="default" dark>
      <v-toolbar-title>
        <nuxt-link to="/" style="text-decoration: none; color: inherit;">
          {{ title }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="/income">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-btn icon to="/scan">
        <v-icon>mdi-barcode-scan</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <v-footer app color="default" dark>
      <v-container class="text-center">
        <span>&copy; {{ new Date().getFullYear() }} - {{ title }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>
  
<script>
export default {
  data() {
    return {
      title: "PATIENT ID SYSTEM",
    };
  },
};
</script>