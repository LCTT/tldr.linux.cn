<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      
    >
      <v-toolbar-title class="display-2 font-weight-black">TLDR</v-toolbar-title>


      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

     
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer>
    <v-spacer></v-spacer>
      <div>&copy; <a href="https://linux.cn" target="_blank">Linux.cn</a> {{ new Date().getFullYear() }}</div>
    </v-footer>
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
