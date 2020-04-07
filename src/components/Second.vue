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
      <carousel-3d @after-slide-change="onAfterSlideChange" :width="157" :height="270" :perspective="0" :space="280" :display="3">
        <slide v-for="(slide, i) in slides" :index="i" :key="slide.id">
          <img :src="slide.src" />
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
    return{
      index: 0,
      slides: [
        {
          id: '1',
          src: '/static/second/mascots/1.png',
        }, 
        {
          id: '2',
          src: '/static/second/mascots/2.png',
        }, 
        {
          id: '3',
          src: '/static/second/mascots/3.png',
        }, 
        {
          id: '4',
          src: '/static/second/mascots/4.png',
        }, 
        {
          id: '5',
          src: '/static/second/mascots/5.png',
        }
      ],
    };
  },
  methods: {
    onAfterSlideChange(index) {
      this.index = index
      // console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    handleNext(){
      // console.log(this.slides)
      // console.log(this.index)
      const id = this.slides[this.index].id
      // console.log(id)
      // console.log(`/Third/${id}`)
      this.$router.push({ name: 'Third', params: { id }})

     /*  const id = this.slides  this.[index].id*/
    }
  },

  components: {
    Header,
    Carousel3d,
    Slide
  }
}

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
  height: auto !important;
  .carousel-3d-slide {
    background: transparent;
    border: 0px;
    margin: 0px;
    img{

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

