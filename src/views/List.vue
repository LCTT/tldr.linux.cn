<template>
  <div class="list">
    <v-skeleton-loader
    v-if="isLoaded"
    type="card,article,card,article"
    min-height="800"
    ></v-skeleton-loader>
    <div v-if="loaded">
      <v-container>
        <v-row>
          <v-col>
            <h1 class='display-3 font-weight-black '>{{noResult?"您搜索的命令没有结果":"搜索结果如下"}}</h1>
          </v-col>
        </v-row>
        <v-row v-for="item in commands" v-bind:key="item._id">
          <v-col>
           <v-card
            dark
          >
            <v-card-title class="headline">{{item.name}} <v-chip class="ml-2"  small>{{item.platform}}</v-chip></v-card-title>

            <v-card-subtitle>{{item.description[0]}}</v-card-subtitle>

            <v-card-actions>
              <v-btn @click="view(item._id)" text>查看</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    name:"list",
    props: ['cmd'],
    data:function(){
      return {
        loaded: false,
        noResult: false,
        commands:[]
      }
    },
    methods:{
      view(id){
        this.$router.push({
          name:"command",
          params:{
            cmd:this.cmd,
            id:id
          }
        })
      }
    },
    created:function(){
      const db = this.$tcb.database();
      const cmd = db.collection('command');
      const name = this.$route.params.cmd
      cmd.where({
        name: name
      }).get().then(res => {

       
        if(res.data.length == 0){
          this.noResult = true;
          this.loaded = true;
          
        }else{
          this.commands = res.data
          this.loaded = true;
        }
      }).catch((err) => {
        alert("命令查询出错，请联系微信 ixiqin_com")
        // eslint-disable-next-line
        console.error(err)
      })
      
      
    },
    computed:{
      isLoaded:function(){
        return !this.loaded
      }
    }
  }
</script>