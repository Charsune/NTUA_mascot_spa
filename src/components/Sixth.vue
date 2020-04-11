<template>
  <div class="sixth" >
  <!-- 本體-->
    <div class="content">
      <div class="header">
        <Header/>      
      </div>
      <div class="container">
        <div class="top-container">
          <a class="name" >
            <img src="../assets/sixth/happi.png" alt="">
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

        <div class="bottom-container">
          <button id="like">
            <img src="../assets/sixth/like.png" alt="">
          </button>
          <button id="download" href="src">
            <img src="../assets/sixth/download.png" alt="">
          </button> 
          <button id="shareBtn" @click="handleShare">
            <img src="../assets/sixth/share.png" alt="">
          </button>  
          <button id="home">
            <router-link to="/First"><img src="../assets/sixth/home.png" alt=""></router-link>
          </button>  
        </div>
      </div>
    </div>
    <!-- 整形公開-->
    <transition name="open">
      <div v-if="show">
        <div class="img-container">
          <img src="../assets/sixth/public/happi.png" alt="">
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
      show: true
    };
  },
  methods: {
    handleForward(){
      this.$router.push("/Second")
    },
    handlePlus(){
      this.rotate=!this.rotate;
      console.log(this.rotate)
    },
    handleShare() {
      FB.init({
        appId            : '505133300173610',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v6.0'
      });
      FB.ui({
        display: 'popup',
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
      }, function(response){});
    }
  },
  computed: {
    src(){
      const {id} = this.$route.params
      // 隨機
      const number = Math.random()>0.5 ? '' : '.1'
      return `/static/sixth/${id}${number}.gif`

    }
  //   src1(){
  //     const {id} = this.$route.params
  //     return `/static/fourth/${id}.png`
  //   }
  },

  components: {
    Header: Header
  }
};
</script>

<style scoped lang="scss">
.sixth{
    display: flex;
    flex-direction: column;
    align-items: center;
  // 本體
  .content{
    background-color: #ffd876;
    height: 100%;
    width: 100%;
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-container{
        display: flex;
        justify-content: space-around;
        margin-top: 55px;
        .name{
          img{          
            display: block;
          }
        }
        .plus{
          margin-top: 50px;
          margin-left: 60px;       
          img{
            display: block;
            height: 60px;
          }
        }
        .x{
          margin-top: 50px;
          margin-left: 60px;   
          transform:rotate(+180deg);
          transition: all 0.5s;
          img{
            display: block;
            height: 60px;
          }          
        }
      }
  }
}
  .mascot{
    margin-top: 15px;
    img{
      display: block;
      width: 375px;
    }
  }
  .bottom-container{
    #like{
      img{
        height: 60px;
      }
    }
    #download{
      img{
        height: 60px;
      }
    }
    #shareBtn{
      img{
        height: 60px;
      }
    }
    #home{
      margin-left: 30px;
      img{
        height: 60px;
      }
    }
  }

  // 整形公開
  .opne{
    background-color: white;
    .img-container{
      display: flex;
      justify-content: center;
      height: 780px;
      width: 350px;
      img{
        height: 300px;
      }
    }
  }
  .open-fade-enter-active {
  transition: all .3s south;
  }
  .open-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .open-fade-enter, .open-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  
}



</style>