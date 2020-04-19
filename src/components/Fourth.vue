<template>
  <div class="fourth">
    <div class="header">
      <Header/>      
    </div>
    <!-- 上方-->
    <a class="mascot" >
      <img :src="src" alt="">
    </a>

    <div class="plastic-container">
      <a class="plastic_items">
        <img src="../assets/fourth/plastic_items.png" alt="">
      </a>
        
      <div class="tab-container">
        <div class="tab-base">
          <img src="../assets/fourth/tab.png" alt="">          
        </div>
        <div class="tab-1">
          <button class="tab-1-1">
            <img src="../assets/fourth/plastic_surgery.png" alt="">
          </button>
          <input type="radio" name="tab" class="tab-1-button-checkbox" checked="true">
          <a class="choice-1">
            <img src="../assets/fourth/surgery.png" alt="">
          </a>          
        </div>
        <div class="tab-2">
          <button class="tab-2-2">
            <img src="../assets/fourth/plastic_surgery.png" alt="">
          </button>
          <input type="radio" name="tab" class="tab-2-button-checkbox">
          <a class="choice-2">
            <img src="../assets/fourth/surgery.png" alt="">
          </a>          
        </div>

      </div>
    </div> 
    <!-- 整成程度拖移 -->
    <div class="slide">
      <div class="slide-container">
        <div class="animation">
          <img class="items"src="../assets/fourth/icon1.gif" alt="">
        </div>
        <div class="level">
          <img src="../assets/fourth/eyes_distance.png" alt="">
          <span>{{eyes}}%</span>          
          <vue-slider :width="200" :tooltip="'none'" v-model="eyes" :process-style="processStyle" :rail-style="railStyle" :dotStyle="dotStyle">
          </vue-slider>
        </div>
      </div>

      <div class="slide-container">
        <div class="animation">
          <img class="items"src="../assets/fourth/icon2.gif" alt="">
        </div>
        <div class="level">
          <img src="../assets/fourth/rhinoplasty.png" alt="">
          <span>{{rhinoplasty}}%</span>
          <vue-slider :width="200" :tooltip="'none'" v-model="rhinoplasty" :process-style="processStyle" :rail-style="railStyle" :dotStyle="dotStyle" ></vue-slider>
        </div>
      </div>

      <div class="slide-container">
        <div class="animation">
          <img class="items"src="../assets/fourth/icon3.gif" alt="">
        </div>
        <div class="level">
          <img src="../assets/fourth/shrink_lips.png" alt="">
          <span>{{shrink_lips}}%</span>          
          <vue-slider :width="200" :tooltip="'none'" v-model="shrink_lips" :process-style="processStyle" :rail-style="railStyle" :dotStyle="dotStyle" ></vue-slider>        
        </div>
      </div>

      <div class="slide-container">
        <div class="animation">
          <img class="items"src="../assets/fourth/icon4.gif" alt="">
        </div>
        <div class="level">
          <img src="../assets/fourth/line_carving.png" alt="">
          <span>{{line_carving}}%</span>          
          <vue-slider :width="200" :tooltip="'none'" v-model="line_carving" :process-style="processStyle" :rail-style="railStyle" :dotStyle="dotStyle" ></vue-slider>        
        </div>
      </div>

      <div class="slide-container">
        <div class="animation">
          <img class="items"src="../assets/fourth/icon5.gif" alt="">
        </div>
        <div class="level">
          <img src="../assets/fourth/autologous_fat_transplantation.png" alt="">
          <span>{{autologous_fat_transplantation}}%</span>          
          <vue-slider :width="200" :tooltip="'none'" v-model="autologous_fat_transplantation" :process-style="processStyle" :rail-style="railStyle" :dotStyle="dotStyle" ></vue-slider>      
        </div>
      </div>

    </div>

    <div class="go_emergency">
      <button @click="handleForward" class="go_emergency">
        <img src="../assets/first/go_emergency.png" alt="">
      </button>
    </div>
  </div> 




</template>
<script>
import Header from "@/components/Header";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
export default {
  data(){
    return{
      eyes: 50,
      rhinoplasty: 50,
      shrink_lips: 50,
      line_carving: 50,
      autologous_fat_transplantation: 50,
      processStyle:{
        backgroundColor:'#59E2F5',
      },
      railStyle:{
        height:'5px',
      },
      dotStyle:{
        borderRadius: '50%',
        backgroundColor: '#fff',
        border: '3px solid #59E2F5',
      },
    };
  },
  methods: {
    handleForward(){
      const {id} = this.$route.params
      this.$router.push({ name: 'Fifth', params: { id }})
    }
  },
  computed: {
    src(){
      const {id} = this.$route.params
      return `/static/fourth/${id}.png`
    }
  },
  components: {
    Header,
    VueSlider
  }
}
</script>

<style scoped lang="scss">


.fourth{
  font-family: 'GenJyuuGothic-P-Medium';
  .mascot{
    img{
      margin-top: 95px;
      display: block;
      width: 375px;      
    }
  }
}


.plastic-container{
  display: flex;
  justify-content: space-around;
  .plastic_items{
    img{
      height: 15px;
    }
  }
  .tab-container{
    position: relative;
    .tab-base{
      img{
        height: 35px;
      }
    }
    .tab-1{
      .tab-1-1{
        position: absolute;
        top: 12px;
        right: 60px;
        img{
          display: block;
          height: 11px;
        }
      }
    }
    .tab-1-button-checkbox{
      opacity: 0;
      position: absolute;
      top: 12px;
      right: 60px;
      width: 25px;
      height: 11px; 
    }
    .tab-1-button-checkbox:checked ~ .choice-1{
      display: block;
    }
    .tab-1-button-checkbox:checked ~ .choice-2{
      display: none;
    }
    .choice-1 {
      display: none;
      position: absolute;
      top: 9px;
      right: 55px;
      img{
        width: 38px;
      }
    }
    .tab-2{
      .tab-2-2{
        position: absolute;
        top: 12px;
        right: 22px;
        img{
          display: block;
          height: 11px;
        }
      }
    }
    .tab-2-button-checkbox{
      opacity: 0;
      position: absolute;
      top: 9px;
      right: 20px;
      width: 25px;
      height: 11px; 
    }
    .tab-2-button-checkbox:checked ~ .choice-2{
      display: block;
    }
    .tab-2-button-checkbox:checked ~ .choice-1{
      display: none;
    }
    .choice-2 {
      display: none;
      position: absolute;
      top: 9px;
      right: 12px;
      img{
        width: 38px;
      }
    }
  }
}

.slide{
  display: flex;
  flex-direction: column;
  align-items: center;
  .slide-container{
    display: flex;
    align-content: space-between;
    margin-top:15px;
    .animation{
      display: flex;
      justify-content: center;
      align-items: center;
      width:50px;
      height:50px;
      border-radius: 10px;
      box-shadow: 10px block;
      background-color: #F7F7F7;
      img{
        height: 30px;
      }
    }
    .level{
      margin-left: 20px;
      img{
        height: 13px;
      }
      span{
        float: right;
        color: #07E4E0;
      }
    }
    vue-slider{
      .vue-slider-process custom-class{
        height: 8px;
      }
    }
  }
}

.go_emergency{
  display: flex;
  justify-content: center;
  img{
    display: block;
    height: 80px;
  }
}

</style>