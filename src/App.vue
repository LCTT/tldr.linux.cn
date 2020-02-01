<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      
    >
      <v-toolbar-title class="display-2">TLDR</v-toolbar-title>


      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

     
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),

  created: function(){
    
  }
};
</script>
