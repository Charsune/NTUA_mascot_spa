
<template>
    <div class="sixth" >
    <!-- 本體-->
      <div class="content">
        <div id ="menu">
          <button @click="handleBackward" class="backward">
            <img src="../assets/sixth/backward.png" alt="">
          </button>
          <button @click="handleHamburger" class="hamburger">
            <img src="../assets/sixth/hamburger.png" alt="">
          </button>
        </div>
        <div class="container">
          <div class="top-container">
            <a class="name" >
              <img :src="src3" alt="">
            </a>
            <!-- 點擊按鈕按鈕會向右旋轉，下方的 註解「整形公開」區塊會從螢幕下方跑上來 -->
            <a :class="[rotate?'plus':'x']" @click="handlePlus();show = !show">
              <img src="../assets/sixth/plus.png" alt="">
            </a>
          </div>
                <!-- 吉祥物-->
          <a class="mascot">
            <img :src="src" alt="">
          </a>
<!--           <a href=""class="block"></a> -->

          <div class="bottom-container">
            <button id="like" @click="ribbonShow = !ribbonShow;like2 = !like2">
              <img src="../assets/sixth/like.png" alt="">
            </button>
            <a class="like2" v-if="like2">
              <img src="../assets/sixth/like2.png" alt="">
            </a> 
 
            <a id="download" :href="src" download >
              <img src="../assets/sixth/download.png" alt="">
            </a>
            <button id="shareBtn" @click="handleShare">
              <img src="../assets/sixth/share.png" alt="">
            </button>
            <div class="fb-share-button" data-href="http://mascot-surgery-room.s3-website-ap-northeast-1.amazonaws.com" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmascot-surgery-room.s3-website-ap-northeast-1.amazonaws.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div>
            <button id="home">
              <router-link to="/second"><img src="../assets/sixth/home.png" alt=""></router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="ribbon" v-if="ribbonShow">
        <a href=""class="img-container">
          <img src="../assets/sixth/ribbon.gif" alt="">
        </a>
      </div>
      <!-- 整形公開-->
      <transition name="open">
        <div v-if="show" class="open">
          <div class="img-container">
            <img :src="src2" alt="">
          </div>
        </div>
      </transition>

    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  data(){
    return{
      rotate:false,
      show: false,
      ribbonShow: false,
      like2: false
    };
  },
  methods: {
    handleForward(){
      this.$router.push("/second")
    },    
    myBackward(){
      const {id} = this.$route.params
      this.$router.replace(`/Fourth/${id}`)
    },

    handlePlus(){
      this.rotate=!this.rotate;
      console.log(this.rotate)
    },
    handleShare() {
      // FB.ui({
      //   display: 'popup',
      //   method: 'share',
      //   href: 'http://mascot.surgery.room.s3-website-ap-northeast-1.amazonaws.com',
      // }, function(response){});
    },
    handleBackward(){
      // if (this.topBackward){
      //   this.topBackward()
      //   return
      // }
      const {id} = this.$route.params
      this.$router.replace({ name: 'Fourth', params: { id }})
    },
    handleHamburger(){
      this.$router.push("/nav" )
    }    
  },
 
  computed: {
    number(){
      const random = Math.random()
      return Math.random()>0.5 ? '' : '.1'

      // // id為9的吉祥物會有多一種結果出現
      // if (this.id==='9'&&this.random < 0.333){
      //   return''
      // } 
      // if (this.id==='9'&&this.random < 0.666){
      //   return'.1'
      // }
      // if (this.id==='9'&&this.random < 1) {
      //   return'.2'
      // }
      // if(this.id!=='9'&&this.random < 0.5){
      //   return''
      // }
      // return'.1'
    },
    src(){
      const {id} = this.$route.params
      return `/static/sixth/${id}${this.number}.gif`
    },

    src2(){
      const {id} = this.$route.params

      return `/static/sixth/open/${id}${this.number}.png`
    },
    src3(){
      const {id} = this.$route.params

      return `/static/sixth/name/${id}.png`
    }
 },




  components: {
    Header: Header

  }
};
</script>

<style scoped lang="scss">

.sixth{
  /*本體*/ 
  .content{
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-container{
        display: flex;
        justify-content: space-around;
        margin-top: 20%;
        position: fixed;
        /*名字*/ 
        .name{
          margin-left: 5%;
          img{          
            display: block;
            height: 60px;
          }
        }
        .plus{
          margin-left: 3%;
          margin-top: 1.5%;
          transform:rotate(+135deg);
          transition: all 1s;
          img{
            display: block;
            height: 80px;
          }
        }
        .x{
          margin-left: 3%;
          margin-top: 1.5%;
          transition: all 1s;
          img{
            display: block;
            height: 80px;
          }          
        }
      }
  }
}
  .mascot{
    position: fixed;
    z-index: -1;
    img{
      width: 375px;
      background-size: cover;
      object-fit: cover;

      /*overflow-y: auto;*/ overflow-y: auto;

    }
  }
  /* .block{
         display: block;
         background-color: transparent;
         position: relative;
         img{
           height: 70%;
         }
   }*/
  .bottom-container{
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    #like{
    /*  position: absolute;
        left: 5%;
         bottom: 12%;*/
      img{
        height: 56px;
      }
    }
    @media screen and (min-width: 401px) {
      .like2{
        pointer-events: none;
        position: fixed;
        bottom: 0.8%;
        left: 12.5%;
        img{
          display: block;
          height: 56px;
        }
      }
    }
    @media screen and (max-width: 400px) {
      .like2{
        pointer-events: none;
        position: fixed;
        bottom: 0.8%;
        left: 9%;
        img{
          display: block;
          height: 56px;
        }
      }
    }
    #download{
      /* position: absolute;
       left: 20%;
       bottom: 12%;*/
      img{
        height: 56px;
      }
    }
    #shareBtn{
      /* position: absolute;
       left: 35%;
       bottom: 12%;*/
       margin-right: 15px;
      img{
        height: 56px;
      }
    }
    // .fb-share-button{
    //   position: fixed;
    //   bottom: 0;
    //   left: 40%;
    //   height: 56px;
    //   width: 56px; 
    //   .fb-xfbml-parse-ignore{ 
    //     height: 100%;
    //     width: 100%;
    //     color: transparent;
    //   }
    //   span{
    //     height: 56px;
    //     width: 56px;        
    //   }
    // }
    #home{
      /* position: absolute;
       left: 60%;
       bottom: 12%;*/
      margin-left: 30px;
      img{
        height: 56px;
      }
    }
  }

  /*整形公開*/ 
  .open{
    background-color: transparent;
    height: 500px;
    width: 375px;
    margin: auto;  
    position: fixed;
    top: 22%;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.99;
    .img-container{
      img{
        width: 320px;
      }
    }
  }
  .open-enter-active {
    // transition: all 1s cubic-bezier(1.0, 0.8, 0.5, 1.0);
    transition: all 1s ;
  }
  .open-leave-active {
    // transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all 1s ;
  }
  .open-enter, .open-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
  }
  .ribbon{
    pointer-events: none; 
    z-index: 2;
    position: fixed;
    top: 5%;
    left: 0;
    img{
      display: block;
      height: 80%;
    }
  }
}


#menu{
  justify-content: space-between;
  .backward{
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 30px;
    left: 30px;
    img{
      height: 20px;
    }
  }

  .hamburger{
    display: inline-block;
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 30px;
    right: 30px;
    img{
      height: 20px;
    }
  }
}
    .fb-share-button{
      opacity: 0;
      position: fixed;
      bottom: 0;
      left: 40%;
      height: 55px;
      width: 55px; 
      span{
        width: 100%;
        height: 100%;
      }
    }


</style>