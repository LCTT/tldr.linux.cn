<template>
  <div class="result">
    <v-skeleton-loader
      v-if="isLoaded"
      type="card,article,card,article"
      min-height="800"
    ></v-skeleton-loader>
    <!-- 下方为正常显示的内容 -->
    <div v-if="loaded">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="display-3 font-weight-black ">{{ command.name }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span
              class="display-1"
              v-bind:key="item"
              v-for="item in command.description"
              >{{ item }}</span
            >
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row v-bind:key="item.description" v-for="item in command.examples">
          <v-col>
            <h1 class="headline">
              <code>{{ item.command }}</code>
            </h1>
            <h2>{{ item.description }}</h2>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "result",
  props: ["cmd", "id"],
  data: function() {
    return {
      loaded: false,
    };
  },
  created: function() {
    const db = this.$tcb.database();
    const cmd = db.collection("command");
    let name = this.$route.params.cmd.toLowerCase();
    if (this.id) {
      cmd
        .doc(this.id)
        .get()
        .then((res) => {
          this.command = res.data[0];
          this.loaded = true;
        });
    } else {
      cmd
        .where({
          name: name,
        })
        .limit(1)
        .get()
        .then((res) => {
          if (res.data.length === 0) {
            this.$router.replace({
              name: "home",
            });
          }
          this.command = res.data[0];
          this.loaded = true;
        })
        .catch((err) => {
          alert("命令查询出错，请联系微信 ixiqin_com");
          // eslint-disable-next-line
          console.error(err);
        });
    }
  },
  computed: {
    isLoaded: function() {
      return !this.loaded;
    },
  },
};
</script>
