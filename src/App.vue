<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title @click="goHome()" class="display-2 font-weight-black"
        >TLDR</v-toolbar-title
      >

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
    </v-main>
    <v-footer>
      <v-spacer></v-spacer>
      <div>
        &copy; <a href="https://linux.cn" target="_blank">Linux.cn</a>
        {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),

  created: function() {},
  methods: {
    goHome() {
      if(this.$router.currentRoute.fullPath === "/"){
        return
      }
      this.$router.replace("/");
    },
  },
};
</script>
