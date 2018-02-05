<template>
  <div class="g-bd" style="margin-top: 75px;margin-bottom: 141px;">
    <div class="g-wrap" id="baseBox">
      <div class="u-title f-cb">
        <h3><span class="f-ff2">个人设置</span></h3>
      </div>


      <ul class="m-tabs f-cb">
        <todo-list v-for="(item,index) in list" :item="item" :key="index" :index="index"></todo-list>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  const Event = new Vue();
  export default{
    data(){
        return {
          list:['基本设置','绑定设置','隐私设置']
        }
    },
    components:{
      'todo-list':{
          template:'<li :class="fst"  @mouseover="over" @mouseout="out"><a :class="cls" @click.stop.prevent="change(det)"><em>{{item}}</em></a></li>',
          data(){
              return {
                fst:'',
                cls:'',
                det:''
              }
          },
        props:['item','index'],
        created(){
              if(this.index === 0){
                this.fst = 'fst';
                this.cls = 'z-slt';
                this.det = '/update/baseSetting';
              }else if(this.index === 2){
                this.det = '/update/privateSetting';
              }else if(this.index === 1){
                  this.det = 'javascript:;';
              }
        },
        mounted(){
          Event.$on('do',(msg)=>{
              this.fst = '';
              this.cls = '';
              if(this.index === msg){
                  this.fst = 'fst';
                  this.cls = 'z-slt';
              }
          })
        },
        methods:{
              over(){
                  if(this.cls === 'z-slt'){

                  }else{
                      this.cls = 's-slt'
                  }
              },
              out(){
                  if(this.cls !== 'z-slt'){
                         this.cls = ''
                  }
              },
              change(des){
                  if(this.fst === 'fst'){

                  }else{
                      Event.$emit("do",this.index);
                      this.$router.push(des);
                  }
              },
        }
      }
    }
  }
</script>


<style>
  .g-bd {
    width: 980px;
    min-height: 700px;
    _height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .g-wrap {
    padding: 40px;
  }
  .u-title{
    height: 40px;
  }
  .u-title h3{
    float: left;
    font-size: 24px;
    font-weight:normal;
  }
  .m-tabs, .m-tabs a, .m-tabs em{
    background: url("../assets/img/personalSetting/tab.png") no-repeat 0 9999px;
  }
  .m-tabs {
    height: 39px;
    border-width:0 1px;
    border-style:solid;
    border-color: #CCCCCC;
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .m-tabs li {
    position:relative;
    left: -1px;
  }
  .m-tabs li, .m-tabs a, .m-tabs em{
    float: left;
    height: 39px;
    font-size: 14px;
  }
  .m-tabs a.z-slt{
    background-position: left -90px;
  }
  .m-tabs a.s-slt{
    background-position: -1px -45px;
  }
  .m-tabs a{
    padding-left: 2px;
  }
  .m-tabs a.z-slt em{
    background-position: right -90px;
  }
  .m-tabs em{
    height: 37px;
    width: 134px;
    padding: 2px 2px 0 0;
    line-height: 37px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
  }
</style>
