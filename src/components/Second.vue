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
        <div class="waiting_list">
          <img src="../assets/second/waiting_list.png" alt="">
        </div>
        <!-- 選單 -->
        <div class="dropdown">
            <!-- 點擊按鈕show出下方-->
          <button class="dropbtn" @click="show = !show">
            <img src="../assets/second/choice.png" alt="">
          </button>
          <div class="dropdown-content" v-if="show">
            <button  @click="()=>handleZone('北部')">
              <img src="../assets/second/north.png" alt="">
            </button>
            <button  @click="()=>handleZone('中部')">
              <img src="../assets/second/centrol.png" alt="">
            </button>
            <button  @click="()=>handleZone('南部')">
              <img src="../assets/second/south.png" alt="">
            </button>
            <button  @click="()=>handleZone('東部')">
              <img src="../assets/second/east.png" alt="">
            </button>
            <button  @click="()=>handleZone('外島')">
              <img src="../assets/second/remote_island.png" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 選擇吉祥物carousel套件 -->
      <carousel-3d  ref="myCarousel" @after-slide-change="onAfterSlideChange" :width="139.5" :height="240" :perspective="0" :space="280" :display="3" :count="computedSlides.length">
        <!-- :key="slide.id" -->
        <slide v-for="(slide, i) in computedSlides" :index="i" :key="i">
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
      // 吉祥物資料
      zone: undefined,
      show: false,
      index: 0,
      slides: [
        {
          zone:'南部',
          id: '1',
          src: '/static/second/mascots/1.png',
        }, 
        {
          zone:'北部',
          id: '2',
          src: '/static/second/mascots/2.png',
        }, 
        {
          zone:'南部',
          id: '3',
          src: '/static/second/mascots/3.png',
        }, 
        {
          zone:'南部',
          id: '4',
          src: '/static/second/mascots/4.png',
        }, 
        {
          zone:'北部',
          id: '5',
          src: '/static/second/mascots/5.png',
        },
        {
          zone:'北部',
          id: '6',
          src: '/static/second/mascots/6.png',
        },
        {
          zone:'南部',
          id: '7',
          src: '/static/second/mascots/7.png',
        },
        {
          zone:'中部',
          id: '8',
          src: '/static/second/mascots/8.png',
        },
        {
          zone:'南部',
          id: '9',
          src: '/static/second/mascots/9.png',
        },
        {
          zone:'南部',
          id: '10',
          src: '/static/second/mascots/10.png',
        },                
        {
          zone:'北部',
          id: '11',
          src: '/static/second/mascots/11.png',
        },
        {
          zone:'北部',
          id: '12',
          src: '/static/second/mascots/12.png',
        },
        {
          zone:'北部',
          id: '13',
          src: '/static/second/mascots/13.png',
        },
        {
          zone:'南部',
          id: '14',
          src: '/static/second/mascots/14.png',
        },
        {
          zone:'東部',
          id: '15',
          src: '/static/second/mascots/15.png',
        },
        {
          zone:'外島',
          id: '16',
          src: '/static/second/mascots/16.png',
        },
        {
          zone:'外島',
          id: '17',
          src: '/static/second/mascots/17.png',
        },
        {
          zone:'中部',
          id: '18',
          src: '/static/second/mascots/18.png',
        },
        {
          zone:'北部',
          id: '19',
          src: '/static/second/mascots/19.png',
        },
        {
          zone:'北部',
          id: '20',
          src: '/static/second/mascots/20.png',
        },
        {
          zone:'北部',
          id: '21',
          src: '/static/second/mascots/21.png',
        },
      ],
    };
  },
  methods: {
    // 取得地區訊息
    handleZone(zone) {
      this.zone = zone
      this.show = false
      this.$refs.myCarousel.goSlide(0)
    },
    // 取得選取吉祥物訊息
    onAfterSlideChange(index) {
      this.index = index
      // console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    //  將id帶到下一頁
    handleNext(){
      // console.log(this.slides)
      // console.log(this.index)
      const id = this.computedSlides[this.index].id
      // console.log(id)
      // console.log(`/Third/${id}`)
      this.$router.push({ name: 'Third', params: { id }})
    },
  },
  // computed: {
  //   // 抓id把相對應的圖片換上去
  //   computedSlides(){
  //     const slides = this.slides
  //     const zone = this.zone

  //     return slides.filter((s)=>{
  //       // if判斷是要三個等於
  //       if(zone === undefined)
  //         return true
  //       return s.zone === zone
  //     })
  //   },

  // },
  computed: {
    // 抓id把相對應的圖片換上去
    computedSlides(){
      const zone = this.zone

      let slides = this.slides.filter((s)=>{
        // if判斷是要三個等於
        if(zone === undefined)
          return true
        return s.zone === zone
      })

      if (slides.length < 2){
        return slides
      }

      if (slides.length < 3){
        slides = [...slides, ...slides];
      }

      return slides;
    },

  },
  components: {
    Header,
    Carousel3d,
    Slide
  }
}

</script>

<style scoped lang="scss">
.second{
  height: 100%;
  width: 100%;
}
.container{
  height: 100%;
  width: 100%;
  z-index: 1;
  /*上方、下方拍版*/
  display: flex;
  flex-direction: column;
  align-items: center;
    .waiting{
      margin-top: 5%;
      img{
        display: block;
        height: 50px;
      }
    }
    .list{
      display: flex;
      justify-content: space-around;
      margin-top: 3%;
      margin-bottom: 6%;
      .waiting_list{
        img{
          margin: 22px 20px 0px 20px;
          height: 30px;
        }
      }
      .dropdown{
        position: relative;
        display: inline-block;
        .dropbtn{
          img{
            margin: 20px 20px 0px 20px;
            height: 30px;
          }
        }
        .dropdown-content{
          display: block;
          position: absolute;
          left: 0px;
          right: 0px;
          margin: auto;
          width: 111px;
          z-index: 1;
          background-color: white;
          box-shadow: 0px 8px 22px 0px rgba(0,0,0,0.2);
            button{
              display: block;
              height: 40px;
              width: 100%;
              border-top: 2px solid #F5F5F5;
              img{
                margin: auto;
                height: 15px;
                display: block;
              }     
            } 
          
        }
      }
    }
}

.carousel-3d-container {
  margin-top: 12%; 
  z-index: 0;
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
  margin-top: 5%;
  img{
    display: block;
    height: 100px; 
  }
}

.copyright{
  margin-top: 5%;    
  img{
    display: block;
    height: 14px; 
  }
}

</style>

