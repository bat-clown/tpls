<template>
  <div class="g-bd" style="margin-top: 75px;margin-bottom: 141px;">
    <div class="g-wrap" id="baseBox">
      <div class="u-title f-cb">
        <h3><span class="f-ff2">个人设置</span></h3>
      </div>


      <ul class="m-tabs f-cb" @click="handle" @mouseover="add" @mouseout="remove">
        <li :class="fst"><a :class="clf" href="http://127.0.0.1:8080/#/update/baseSetting"><em>基本设置</em></a></li>
        <li><a :class="cls" href=""><em>绑定设置</em></a></li>
        <li><a :class="clt" href="http://127.0.0.1:8080/#/update/privateSetting"><em>隐私设置</em></a></li>
        <!--<todo-list></todo-list>-->
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
        return {
          fst:'fst',
          clf:'z-slt',
          cls:'',
          clt:''
//            msg:'123'
        }
    },
//    components:{
//      'todo-list':{
//          template:'<li>{{msg}}</li>'
//      }
//    },
    methods:{
        handle(e){
          if(e.target.parentNode.parentNode.className === 'fst'){
            e.target.parentNode.parentNode.className += ''
          }else{
            let ele = document.querySelector('.m-tabs').childNodes;
            for(let i = 0;i<ele.length;i++){
                ele[i].className = '';
//                console.log(ele[i].firstChild);
              if(ele[i].firstChild !== null){
                ele[i].firstChild.className = ''
              }
            }
            e.target.parentNode.parentNode.className += 'fst';
//            console.log(e.target.parentNode.parentNode);
            e.target.parentNode.className += 'z-slt'
          }
        },
        add(e){
            if (e.target.parentNode.className === 'z-slt'){

            }else{
              e.target.parentNode.className += 's-slt';
            }
        },
        remove(e){
            if(e.target.parentNode.className !== 'z-slt'){
              e.target.parentNode.className = ''
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
