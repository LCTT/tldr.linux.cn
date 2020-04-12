<template>
  <div class="home">
		<v-layout row wrap  align-center justify-center fill-height >
			<v-container class="fill-height" fluid>
        <v-row>
          <v-col>
            <h1 style="min-height:100px;line-height: 100px" class="display-1 text-center">简单好用的 Linux 命令速查工具</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols=2></v-col>
           <v-col>
            <v-text-field
            outlined
        v-model="cmd"
        @keydown="onKeyDown"
        label="请输入你需要查询的命令"
        placeholder="输入 vim ，按下回车试试看？"
        required
        autofocus
        append-icon="mdi-magnify"
        ></v-text-field>
          </v-col>
          <v-col cols=2></v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1 style="min-height:100px;line-height: 100px    font-size: 20px;" class="text-center">在微信中搜索「Linux」，也可以找到我们哦～</h1>
          </v-col>
        </v-row>
				</v-container>
		</v-layout>


  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data:function(){
    return {
      cmd:""
    }
  },
  components: {

  },
  methods:{
    onKeyDown: function(e)  {
      let cmd = this.cmd.toLowerCase();
      if(e.keyCode === 13){
        const db = this.$tcb.database();
        const cmds = db.collection('command');
        cmds.where({
          name: cmd
        }).count().then(res => {
          if(res.total === 1){
            this.$router.push({
              name:"command",
              params:{
                cmd:cmd
              }
            })
          }else{
            this.$router.push({
              name:"list",
              params:{
                cmd:cmd
              }
            })
          }
        }).catch(() => {
          alert("系统出错，请联系微信 ixiqin_com")
        })
        // this.$router.push({
        //   name:"list",
        //   params:{
        //     cmd:this.cmd
        //   }
        // })
      }
    }
  }
}
</script>
