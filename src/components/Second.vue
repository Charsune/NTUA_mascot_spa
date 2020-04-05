<template>
  <div class="second">
    <div class="header">
      <Header/>      
    </div>
 <!-- 上方-->
    <div class="container">
      <a class="waiting">
        <img src="../assets/second/waiting.png" alt="">
      </a>

      <div class="list">
        <a class="waiting_list">
          <img src="../assets/second/waiting_list.png" alt="">
        </a>  
        <a class="choice">
          <img src="../assets/second/choice.png" alt="">
        </a>
      </div>
    </div> 
     <!-- 選擇吉祥物-->
    <carousel-3d :width="200" :height="280" :perspective="0" :space="280" :display="3">
      <slide :index="0">
        <img src="../assets/second/mascots/1.png" alt="">
      </slide>
      <slide :index="1">
        <img src="../assets/second/mascots/2.png" alt="">
      </slide>
      <slide :index="2">
        <img src="../assets/second/mascots/3.png" alt="">
      </slide>
      <slide :index="3">
        <img src="../assets/second/mascots/4.png" alt="">
      </slide>
      <slide :index="4">
        <img src="../assets/second/mascots/5.png" alt="">
      </slide>
      <slide :index="5">
        <img src="../assets/second/mascots/6.png" alt="">
      </slide>
    </carousel-3d>
  <!-- 下方-->
    <div class="container">
      <a @click="handleNext" class="next_step">
        <img src="../assets/second/next_step.png" alt="">
      </a>
      <a class="copyright">
        <img src="../assets/second/copyright.png" alt="">
      </a> 
    </div>


  </div>
</template>
<script>

import Header from "@/components/Header";
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  data(){
    return{};
  },
  methods: {
    handleNext(){
      this.$router.push("/Third" )
    }
  },
  components: {
    Carousel3d,
    Slide,
    Header: Header
  }
};

</script>

<style scoped lang="scss">

.container{
  //上方、下方拍版
  display: flex;
  flex-direction: column;
  align-items: center;
    .waiting{
      margin-top: 15px;
      img{
        display: block;
        height: 50px;
      }
    }
    .list{
      margin-top: 30px;
      img{
        margin: 20px;
        height: 30px;
      }
    }
}

.carousel-3d-container {
  .carousel-3d-slide {
    background: transparent;
    border: 0px;
    margin: 0px;
    img{
      width: 200px;
      height: 280px;
    }
  }
}

.next_step{
  margin-top: 0px;    
  img{
    display: block;
    height: 100px; 
  }
}

.copyright{
  margin-top: 80px;    
  img{
    display: block;
    height: 14px; 
  }
}

</style>

