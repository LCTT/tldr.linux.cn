<template>
  <v-app>
    <v-app-bar
      app
      color="primary"

    >
      <v-toolbar-title class="display-2 font-weight-black">TLDR</v-toolbar-title>


      <v-spacer></v-spacer>
     <!--  <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->


    </v-app-bar>

    <v-content>
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
    <v-footer>
    <v-spacer></v-spacer>
      <div>&copy; <a href="https://linux.cn" target="_blank">Linux.cn</a> {{ new Date().getFullYear() }} & <a href="https://cloud.tencent.com/product/wh?from=12331">Hosted BY 云开发 Cloudbase </a></div>
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
