<template>
  <form onsubmit="return false;" id="update_form">
    <div class="n-base f-cb">
      <div class="frm m-frm">
        <div class="itm">
          <label class="lab">昵称：</label>
          <input type="text" class="u-txt txt" v-model="value" id="nickname" maxlength="30">
          <div class="u-err" style="display:none;" id="err"><i
            class="u-icn u-icn-25"></i><span>昵称已存在！</span>
          </div>
        </div>
        <div class="itm f-cb">
          <label class="lab">介绍：</label>
          <div class="u-txtwrap f-pr">
            <textarea class="u-txt area" id="signature" v-model="text"></textarea>
            <span class="zs s-fc2" id="remain">140</span>
          </div>
        </div>
        <div class="itm f-cb">
          <label class="lab">性别：</label>
          <div class="f-cb">
            <label class="check"><input name="gender" type="radio" class="u-rdi" checked="true"
                                        value="1" v-model="gender"> 男</label>
            <label class="check"><input name="gender" type="radio" class="u-rdi" value="2" v-model="gender">
              女</label>
            <label class="check"><input name="gender" type="radio" class="u-rdi" value="0" v-model="gender">
              保密</label>
          </div>
        </div>
        <div class="itm f-cb" style="z-index:11;">
          <label class="lab">生日：</label>
          <div class="u-slt u-slt-1 f-pr" id="yselect">
            <span class="curr">{{msgY}}</span>
            <i class="btn" @click="open" id="auto-id-IphrWSdVyNeLfKiI"></i>
            <ul style="display: none;" @click.stop.prevent="selectY"><!-- ie6下，高超过150px就设_height:150px; -->
              <li class="f-thide" id="auto-id-XXJLKIkZ51i1AyIU"><a href="#">2018</a></li>
              <li class="f-thide" id="auto-id-bHPcTNFK8PcrZPnb"><a href="#">2017</a></li>
              <li class="f-thide" id="auto-id-iOuQWqWQXXwmScmm"><a href="#">2016</a></li>
              <li class="f-thide" id="auto-id-64uQJ0uHfsecsPuS"><a href="#">2015</a></li>
              <li class="f-thide" id="auto-id-ILI4wTbOtCy8DkvO"><a href="#">2014</a></li>
              <li class="f-thide" id="auto-id-FiEnpmse8WPdeuZQ"><a href="#">2013</a></li>
              <li class="f-thide" id="auto-id-slto2pcvhBsGg7nH"><a href="#">2012</a></li>
              <li class="f-thide" id="auto-id-8DeOc5SchV96u9fs"><a href="#">2011</a></li>
              <li class="f-thide" id="auto-id-oMhFex8snFQ9CcwG"><a href="#">2010</a></li>
              <li class="f-thide" id="auto-id-nXXV2UEeWHkL7fc9"><a href="#">2009</a></li>
              <li class="f-thide" id="auto-id-VTLtetapod5gWELX"><a href="#">2008</a></li>
              <li class="f-thide" id="auto-id-aG7SG3TXwwI0GpnX"><a href="#">2007</a></li>
              <li class="f-thide" id="auto-id-lW66Oy6v3g8zeTmz"><a href="#">2006</a></li>
              <li class="f-thide" id="auto-id-yN3cMkiaQw3zXUex"><a href="#">2005</a></li>
              <li class="f-thide" id="auto-id-q5SVZ395cwiypK3J"><a href="#">2004</a></li>
              <li class="f-thide" id="auto-id-ucvMFT0kFqd10nR9"><a href="#">2003</a></li>
              <li class="f-thide" id="auto-id-EzHdowxR19ZVkW2I"><a href="#">2002</a></li>
              <li class="f-thide" id="auto-id-TE0eBdkxJlJzy3Uw"><a href="#">2001</a></li>
              <li class="f-thide" id="auto-id-OC3mrTqAv4ffxAq5"><a href="#">2000</a></li>
              <li class="f-thide" id="auto-id-NfdTOHfol2yQGI05"><a href="#">1999</a></li>
              <li class="f-thide" id="auto-id-LdcbB79g5Mg9m8Ia"><a href="#">1998</a></li>
              <li class="f-thide" id="auto-id-b66r9E9RTig0AJH6"><a href="#">1997</a></li>
              <li class="f-thide" id="auto-id-wmJn4dyfssEiePky"><a href="#">1996</a></li>
              <li class="f-thide" id="auto-id-Fn9MU2ehv7xNqgbw"><a href="#">1995</a></li>
              <li class="f-thide" id="auto-id-UtSHs3I8omg1mF05"><a href="#">1994</a></li>
              <li class="f-thide" id="auto-id-SoJg049BSTLsU37m"><a href="#">1993</a></li>
              <li class="f-thide" id="auto-id-rEnmzw3u9FvbvlUM"><a href="#">1992</a></li>
              <li class="f-thide" id="auto-id-AJLFFzE9W23N0KWQ"><a href="#">1991</a></li>
              <li class="f-thide" id="auto-id-axDQJ40dMANfL8sn"><a href="#">1990</a></li>
              <li class="f-thide" id="auto-id-BffheUTh7UX08fBL"><a href="#">1989</a></li>
              <li class="f-thide" id="auto-id-Kcrg3OwG6O1fsxt5"><a href="#">1988</a></li>
              <li class="f-thide" id="auto-id-ZWsB2hHSbb0ivm1w"><a href="#">1987</a></li>
              <li class="f-thide" id="auto-id-f5o3tSCZ3zTrEUTh"><a href="#">1986</a></li>
              <li class="f-thide" id="auto-id-VQHa5UDS81NAgkUU"><a href="#">1985</a></li>
              <li class="f-thide" id="auto-id-bp0xBa1aKi40PrF2"><a href="#">1984</a></li>
              <li class="f-thide" id="auto-id-ntfepzSwkMHqoddr"><a href="#">1983</a></li>
              <li class="f-thide" id="auto-id-DygFEg2SBT9FFDWa"><a href="#">1982</a></li>
              <li class="f-thide" id="auto-id-PMR37DTBycaNNSrf"><a href="#">1981</a></li>
              <li class="f-thide" id="auto-id-3E7gVNeupO6UaIHV"><a href="#">1980</a></li>
              <li class="f-thide" id="auto-id-COJHO1yKnBlhiPeT"><a href="#">1979</a></li>
              <li class="f-thide" id="auto-id-2MiBxw7rltuhD2VB"><a href="#">1978</a></li>
              <li class="f-thide" id="auto-id-CHfOrX593Bf14xsT"><a href="#">1977</a></li>
              <li class="f-thide" id="auto-id-4tJOhwFkLW0gNv6x"><a href="#">1976</a></li>
              <li class="f-thide" id="auto-id-NA7HrFzGNzGpkMqX"><a href="#">1975</a></li>
              <li class="f-thide" id="auto-id-FsW92X3zWsUOhutp"><a href="#">1974</a></li>
              <li class="f-thide" id="auto-id-LeNGUUJZrrkit3LT"><a href="#">1973</a></li>
              <li class="f-thide" id="auto-id-JPWNwpDEFa40gXnW"><a href="#">1972</a></li>
              <li class="f-thide" id="auto-id-5QSfOE76u1zlQtwZ"><a href="#">1971</a></li>
              <li class="f-thide" id="auto-id-WXUiUdxwgqZUp2vU"><a href="#">1970</a></li>
              <li class="f-thide" id="auto-id-4T0llzRkSRqbQN9i"><a href="#">1969</a></li>
              <li class="f-thide" id="auto-id-tiX4HdVaTUfbwDOP"><a href="#">1968</a></li>
              <li class="f-thide" id="auto-id-51InbbbLrxghi7Kb"><a href="#">1967</a></li>
              <li class="f-thide" id="auto-id-pWIpc66TUzahhoLz"><a href="#">1966</a></li>
              <li class="f-thide" id="auto-id-58gVoNNqLHxqI7y7"><a href="#">1965</a></li>
              <li class="f-thide" id="auto-id-g9Eh2qN6eUBPkAhL"><a href="#">1964</a></li>
              <li class="f-thide" id="auto-id-12JeHOgt4SE1BfPS"><a href="#">1963</a></li>
              <li class="f-thide" id="auto-id-kWC2FPxAzR7oHrd0"><a href="#">1962</a></li>
              <li class="f-thide" id="auto-id-pTHSZpCg9HxHOwDC"><a href="#">1961</a></li>
              <li class="f-thide" id="auto-id-kRdWUJ3yzGThuAgJ"><a href="#">1960</a></li>
              <li class="f-thide" id="auto-id-amWvqqTumvMFsrPi"><a href="#">1959</a></li>
              <li class="f-thide" id="auto-id-oM8I3P7XWr1fxrhw"><a href="#">1958</a></li>
              <li class="f-thide" id="auto-id-pqvT02UmC4FqTdKI"><a href="#">1957</a></li>
              <li class="f-thide" id="auto-id-zPl5fFuyA3eZhVCu"><a href="#">1956</a></li>
              <li class="f-thide" id="auto-id-RzDERA33BPQEb2MU"><a href="#">1955</a></li>
              <li class="f-thide" id="auto-id-Zqny7Nxdv5bRilES"><a href="#">1954</a></li>
              <li class="f-thide" id="auto-id-1vpVvuTgrlRaP6bA"><a href="#">1953</a></li>
              <li class="f-thide" id="auto-id-dOIMFbbCviPfsMhq"><a href="#">1952</a></li>
              <li class="f-thide" id="auto-id-Zr2eFvzD5nPBEiF4"><a href="#">1951</a></li>
              <li class="f-thide" id="auto-id-9UDzvsXw73MhdfZJ"><a href="#">1950</a></li>
              <li class="f-thide" id="auto-id-gurf68ISldseRQWw"><a href="#">1949</a></li>
              <li class="f-thide" id="auto-id-THzMccPbUe8I1rcW"><a href="#">1948</a></li>
              <li class="f-thide" id="auto-id-OGm6xNhw5ORdNQoh"><a href="#">1947</a></li>
              <li class="f-thide" id="auto-id-1QB97uyGvFARUEV6"><a href="#">1946</a></li>
              <li class="f-thide" id="auto-id-guHgIT8LT11gLIH4"><a href="#">1945</a></li>
              <li class="f-thide" id="auto-id-ywn6G7WBldPixSE2"><a href="#">1944</a></li>
              <li class="f-thide" id="auto-id-CKPe3hLiqHMcOzIw"><a href="#">1943</a></li>
              <li class="f-thide" id="auto-id-2y4S5P5FpPv2nyFA"><a href="#">1942</a></li>
              <li class="f-thide" id="auto-id-5f2sc2TlVRBRgue7"><a href="#">1941</a></li>
              <li class="f-thide" id="auto-id-DgxyqTb3fkAXkm01"><a href="#">1940</a></li>
              <li class="f-thide" id="auto-id-PmXcUA4S5bTALEzT"><a href="#">1939</a></li>
              <li class="f-thide" id="auto-id-RIgP9fz8T52un0eU"><a href="#">1938</a></li>
              <li class="f-thide" id="auto-id-kwHHbKkPc2pFS8iR"><a href="#">1937</a></li>
              <li class="f-thide" id="auto-id-pnxifRF5e4bvvheC"><a href="#">1936</a></li>
              <li class="f-thide" id="auto-id-xes1isIRSSunfRyc"><a href="#">1935</a></li>
              <li class="f-thide" id="auto-id-ueyJku8Hfb3nQITu"><a href="#">1934</a></li>
              <li class="f-thide" id="auto-id-WhyELhLU1P798w1A"><a href="#">1933</a></li>
              <li class="f-thide" id="auto-id-P0amNVJA7IlB3ZQV"><a href="#">1932</a></li>
              <li class="f-thide" id="auto-id-8TM6Tp1x1ADhfspD"><a href="#">1931</a></li>
              <li class="f-thide" id="auto-id-y9mfHxc3yAMX0ZcW"><a href="#">1930</a></li>
              <li class="f-thide" id="auto-id-02Fp18b3PPm4CJQK"><a href="#">1929</a></li>
              <li class="f-thide" id="auto-id-rpdfB8wli67aHq86"><a href="#">1928</a></li>
              <li class="f-thide" id="auto-id-85dgVvgocUHFTW8R"><a href="#">1927</a></li>
              <li class="f-thide" id="auto-id-gSu6Smad3L2IgOeA"><a href="#">1926</a></li>
              <li class="f-thide" id="auto-id-Kpqxeu1RxblhlXaF"><a href="#">1925</a></li>
              <li class="f-thide" id="auto-id-LKaNok5BWpRb6fxX"><a href="#">1924</a></li>
              <li class="f-thide" id="auto-id-N7JK11Z4m0g4ldlT"><a href="#">1923</a></li>
              <li class="f-thide" id="auto-id-DOAxcLQcJO9qXp99"><a href="#">1922</a></li>
              <li class="f-thide" id="auto-id-UTuPsSc2t6D2rRHV"><a href="#">1921</a></li>
              <li class="f-thide" id="auto-id-DeztfDAPJLOelnOi"><a href="#">1920</a></li>
            </ul>
          </div>
          <span class="wrd f-fl">年</span>
          <div class="u-slt u-slt-2 f-pr" id="mselect">
            <span class="curr">{{msgM}}</span>
            <i class="btn" @click="open" id="auto-id-IIdXNsB5cNdt7LWd"></i>
            <ul style="display: none;" @click.stop.prevent="selectM">
              <li class="f-thide" id="auto-id-6B6OFPAimE7GsObA"><a href="#">01</a></li>
              <li class="f-thide" id="auto-id-DcORgyoFLs5NDRXs"><a href="#">02</a></li>
              <li class="f-thide" id="auto-id-uy53QparvBEBHmbA"><a href="#">03</a></li>
              <li class="f-thide" id="auto-id-qwJpLdJfeNUgStCc"><a href="#">04</a></li>
              <li class="f-thide" id="auto-id-ofwwMfmk540TesdS"><a href="#">05</a></li>
              <li class="f-thide" id="auto-id-JK1VnTVFOZXHJZH4"><a href="#">06</a></li>
              <li class="f-thide" id="auto-id-PhC4F1HG44N9otE4"><a href="#">07</a></li>
              <li class="f-thide" id="auto-id-uQ2G9UhGocAUOQKs"><a href="#">08</a></li>
              <li class="f-thide" id="auto-id-H2qpbFsgpoUJDrWS"><a href="#">09</a></li>
              <li class="f-thide" id="auto-id-Uaz8tlxmLnKboHMz"><a href="#">10</a></li>
              <li class="f-thide" id="auto-id-MRyMVPWq9dUy4K9W"><a href="#">11</a></li>
              <li class="f-thide" id="auto-id-dPKcKXcLZ23g7a4a"><a href="#">12</a></li>
            </ul>
          </div>
          <span class="wrd f-fl">月</span>
          <div class="u-slt u-slt-2 f-pr" id="dselect">
            <span class="curr">{{msgD}}</span>
            <i class="btn" @click="open" id="auto-id-U7lDU4Tc1XdeynFP"></i>
            <ul style="display: none;">
            </ul>
          </div>
          <span class="wrd f-fl">日</span>
        </div>
        <div class="itm itm-1 f-cb" style="z-index:10;">
          <label class="lab">地区：</label>
          <div class="u-slt f-pr" id="pselect">
            <span class="curr">{{msgS}}</span>
            <i class="btn" @click="open" id="auto-id-MKBHIMt0pHWNWTMT"></i>
            <ul style="display: none;" @click.stop.prevent="selectS"><!-- ie6下，高超过150px就设_height:150px; -->
              <li class="f-thide" id="auto-id-VmyUDD37iMG8JEQi"><a href="#">直辖市</a></li>
              <li class="f-thide" id="auto-id-R5DFLFNwbeTKTnos"><a href="#">特别行政区</a></li>
              <li class="f-thide" id="auto-id-hXxXQaBxzLPkhRwg"><a href="#">河北省</a></li>
              <li class="f-thide" id="auto-id-CiCwC62mRGl0JPcT"><a href="#">山西省</a></li>
              <li class="f-thide" id="auto-id-XlSwEnxVJpaCFlMJ"><a href="#">内蒙古</a></li>
              <li class="f-thide" id="auto-id-dvfz4bogRQVqsdBE"><a href="#">辽宁省</a></li>
              <li class="f-thide" id="auto-id-eyDqfGdAkonfH4Fe"><a href="#">吉林省</a></li>
              <li class="f-thide" id="auto-id-0XQnRhlaPcbPxpn8"><a href="#">黑龙江省</a></li>
              <li class="f-thide" id="auto-id-S7vXNtKGJ6byJnLO"><a href="#">江苏省</a></li>
              <li class="f-thide" id="auto-id-4OP8clnXdQAtxvZS"><a href="#">浙江省</a></li>
              <li class="f-thide" id="auto-id-QpDQwSGllVVc8XMI"><a href="#">安徽省</a></li>
              <li class="f-thide" id="auto-id-FCA7vGfkZWhDUUII"><a href="#">福建省</a></li>
              <li class="f-thide" id="auto-id-c9sqWKTvAQf0hkfl"><a href="#">江西省</a></li>
              <li class="f-thide" id="auto-id-kPhl1QiX5z8e2xed"><a href="#">山东省</a></li>
              <li class="f-thide" id="auto-id-HySQZdhVclcDoM1P"><a href="#">河南省</a></li>
              <li class="f-thide" id="auto-id-S7dbUdAxJ5c1kzoz"><a href="#">湖北省</a></li>
              <li class="f-thide" id="auto-id-Or9qJTTfKgJ84Hvq"><a href="#">湖南省</a></li>
              <li class="f-thide" id="auto-id-Ul0rVMTD1TacPCVJ"><a href="#">广东省</a></li>
              <li class="f-thide" id="auto-id-zdvWQHgU5NKix8B6"><a href="#">广西</a></li>
              <li class="f-thide" id="auto-id-A1FOmwZ6KzGUfDW3"><a href="#">海南省</a></li>
              <li class="f-thide" id="auto-id-l17Ds8IOAm50kkvR"><a href="#">四川省</a></li>
              <li class="f-thide" id="auto-id-fAhxWFxoS2vnsB7y"><a href="#">贵州省</a></li>
              <li class="f-thide" id="auto-id-cJGDg4rt12cckQvI"><a href="#">云南省</a></li>
              <li class="f-thide" id="auto-id-FhPZbOCeEc7INWTk"><a href="#">西藏</a></li>
              <li class="f-thide" id="auto-id-CuGmHTLRycP6IWMq"><a href="#">陕西省</a></li>
              <li class="f-thide" id="auto-id-Tsr8VZ3cDRVmkcJT"><a href="#">甘肃省</a></li>
              <li class="f-thide" id="auto-id-3xbWd7lfGeqrHoFO"><a href="#">青海省</a></li>
              <li class="f-thide" id="auto-id-sJ3iQT3ZDGOf6Ufu"><a href="#">宁夏</a></li>
              <li class="f-thide" id="auto-id-LzGvdVQxXhQTaWTU"><a href="#">新疆</a></li>
              <li class="f-thide" id="auto-id-em9efDZnSGBWvw2b"><a href="#">台湾省</a></li>
              <li class="f-thide" id="auto-id-ingNlFSgtZXIhaph"><a href="#">海外</a></li>
            </ul>
          </div>
          <div class="u-slt f-pr" id="cselect">
            <span class="curr f-thide">{{msgC}}</span>
            <i class="btn" @click="open" id="auto-id-ZhTB90XfVeLlclQe"></i>
            <ul style="display: none;" @click.stop.prevent="selectC">
              <li class="f-thide" id="auto-id-HFKSPmuEwT6QhHRw"><a href="#">北京市</a></li>
              <li class="f-thide" id="auto-id-DyUTXFxbZX0SgT3z"><a href="#">天津市</a></li>
              <li class="f-thide" id="auto-id-PgbR9Em2ATl6OeMK"><a href="#">上海市</a></li>
              <li class="f-thide" id="auto-id-PTkiOevlRytzEKne"><a href="#">重庆市</a></li>
            </ul>
          </div>
        </div>
        <div class="itm ft">
          <a class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="#" data-action="save"><i>保 存</i></a>
          <a class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="#" data-action="cancel"
             style="display:none;"><i>取 消</i></a>
        </div>
      </div>
      <div class="avatar f-pr">
        <img src="http://p1.music.126.net/HCfgX_fS_K8nAi1f3g8fLA==/3419481172196209.jpg?param=140y140"
             id="avatar">
        <span class="btm"></span>
        <a href="javascript:;" class="upload" id="upload">更换头像</a>
      </div>
    </div>
  </form>
</template>


<script>
  export default{
    data(){
        return {
            value:'影动随行',
            text:'',
            gender:'1',
            msgY:'--',
            msgM:'-',
            msgD:'-',
            msgS:'直辖市',
            msgC:'北京市'
        }
    },
    methods:{
      open(e){
          if(e.target.nextElementSibling.style.display === 'none'){
            e.target.nextElementSibling.style.display='inline-block';
          }else{
            e.target.nextElementSibling.style.display='none'
          }
      },
      selectY(e){
          this.msgY = Number(e.target.innerHTML);
          e.target.parentNode.parentNode.style.display='none'
      },
      selectM(e){
        this.msgM = Number(e.target.innerHTML);
        e.target.parentNode.parentNode.style.display='none'
      },
      selectS(e){
        this.msgS = String(e.target.innerHTML);
        e.target.parentNode.parentNode.style.display='none'
      },
      selectC(e){
        this.msgC = String(e.target.innerHTML);
        e.target.parentNode.parentNode.style.display='none'
      }
    }
  }
</script>


<style>
  .n-base{
    margin-top: 30px;
  }
  .n-base .frm{
    float: left;
    width: 340px;
    margin-right: 30px;
  }
  .m-frm .itm {
    position: relative;
    zoom: 1;
    min-height: 32px;
    margin-bottom: 10px;
    padding-left: 38px;
  }
  .m-frm .itm-1{
    padding-top: 3px;
  }
  .n-base .ft{
    margin-top: 40px;
  }
  .m-frm .lab{
    display: block;
    position: absolute;
    top:0;
    left:0;
    width: 38px;
    line-height: 32px;
    text-align: right;
  }
  textarea.u-txt, div.u-txt{
    width:100%;
    margin-right: -20px;
  }
  .n-base .txt, .n-base .area{
    width: 292px;
  }
  .u-txt {
    height: 19px;
    margin:0;
    padding:5px 6px 6px;
    border:1px solid #cdcdcd;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    line-height: 19px;
    font-size: 12px;
  }
  .u-err {
    height: 17px;
    margin-top: 5px;
    line-height: 17px;
    color: #e33232;
  }
  .u-err i{
    margin-right: 8px;
  }
  .u-icn, .u-icn2, .u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .u-icn, .u-title-1 .out .icn{
    background: url("../assets/img/personalSetting/icon.png") no-repeat 0 9999px;
  }
  .u-icn-25{
    width: 14px;
    height: 14px;
    background-position: -50px -270px;
  }
  .u-txtwrap{
    padding-right: 14px;
  }
  .f-pr{
    position:relative;
    zoom:1;
  }
  .n-base .area{
    height: 122px;
  }
  .u-txtwrap .zs{
    position: absolute;
    bottom: 8px;
    right: 10px;
  }
  .s-fc2,a.s-fc2:hover{
    color: #D0D0D0;
  }
  .m-frm .check{
    float: left;
    margin: 9px 20px 0 0;
  }
  .n-base .u-slt{
    float: left;
    margin-right: 20px;
  }
  .n-base .u-slt-1, .n-base .u-slt-2{
    margin-right:0;
  }
  .u-slt, .u-slt .btn{
    background: url("../assets/img/personalSetting/sprite.png") no-repeat 0 9999px;
  }
  .u-slt{
    width: 100px;
    height: 28px;
    background-position: 0 -47px;
    cursor:pointer;
  }
  .u-slt-1{
    width: 74px;
  }
  .u-slt:hover .btn{
    background-position:-210px -47px;
  }
  .u-slt .curr{
    display: block;
    width: 60px;
    padding-left: 7px;
    line-height: 28px;
  }
  .u-slt .btn{
    display: block;
    position: absolute;
    top:0;
    right:0;
    width: 32px;
    height: 28px;
    background-position: -169px -47px;
  }
  .u-slt ul{
    position: absolute;
    top: 28px;
    width: 98px;
    max-height: 150px;
    overflow: auto;
    background: #fff;
    border:1px solid #cdcdcd;
    border-top:none;
  }
  .u-slt-1 ul{
    width: 72px;
  }
  .u-slt ul li{
    line-height: 26px;
  }
  .u-slt ul li a:hover{
    background:#eaeaea;
    color:#333;
    text-decoration:none;
  }
  .u-slt ul a{
    display: block;
    height: 26px;
    padding-left: 9px;
    color: #666;
  }
  .f-thide{
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space:nowrap;
    -ms-word-wrap:normal;
    word-wrap:normal;
  }
  .n-base .wrd{
    margin:0 12px 0 6px;
    line-height: 32px;
  }
  .f-fl{
    float: left;
  }
  .u-slt-2{
    width: 60px;
  }
  .u-slt-2 .curr{
    width: 50px;
  }
  .u-slt-2 ul{
    width: 58px;
  }
  .n-base .ft{
    margin-top: 40px;
  }
  .n-base .ft .u-btn2{
    margin-right: 20px;
  }
  .u-btn2, .u-btn2:hover{
    text-decoration: none;
  }
  .u-btn2{
    padding:0 5px 0 0;
    white-space:nowrap;
  }
  .u-btn2, .u-btn2 i{
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }
  .u-btn2, .u-btn2 i, .u-btn2 .icn, .u-btni, .u-btni i{
    background: url("../assets/img/personalSetting/button2.png") no-repeat 0 9999px;
  }
  .u-btn2-2{
    color: #fff;
    background-position:  right -428px;
  }
  .u-btn2-w2 i{
    width: 40px;
  }
  .u-btn2-2 i{
    color:#fff;
    background-position: 0 -387px;
  }
  .u-btn2-2:hover{
    color:#fff;background-position:right -510px;
  }
  .u-btn2-2:hover i{
    color:#fff;background-position:0 -469px;
  }
  .u-btn2-2:active{
    color:#fff;background-position:right -592px;
  }
  .u-btn2-2:active i{
    color:#fff;background-position:0 -551px;
  }
  .u-btn2 i{
    padding:0 15px 0 20px;
    pointer-events: none;
  }
  .u-btn2-1{
    color:#333;
    background-position: right -100px;
  }
  .n-base .avatar, .n-base .avatar img{
    float: left;
    width: 140px;
    height: 140px;
  }
  .n-base .avatar .btm{
    background: #8e8e8e;
    opacity: 0.8;
    filter:Alpha(opacity=80)
  }
  .btm, .upload{
    display: block;
    position: absolute;
    width: 140px;
    height: 26px;
    left:0;
    bottom:0;
  }
  .upload{
    color:#fff;
    text-align: center;
    line-height: 26px;
  }
  .upload:hover{
    text-decoration: underline;
  }
</style>
