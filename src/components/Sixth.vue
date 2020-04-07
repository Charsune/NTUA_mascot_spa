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
          <a class="plus">
            <img src="../assets/sixth/plus.png" alt="">
          </a>        
        </div>

              <!-- 吉祥物-->
        <a class="mascot">
          <img :src="src" alt="">
        </a>

        <div class="bottom-container">
          <a class="like">
            <img src="../assets/sixth/like.png" alt="">
          </a>
          <a :href="src" download class="download">
            <img src="../assets/sixth/download.png" alt="">
          </a> 
          <a class="share">
            <img src="../assets/sixth/share.png" alt="">
          </a>  
          <a class="home">
            <router-link to="/First"><img src="../assets/sixth/home.png" alt=""></router-link>
          </a>          
        </div>
      </div>     
    </div>
    <!-- 整形公開-->
    <div class="open">
      <div class="img-container">
        <img src="../assets/sixth/public/happi.png" alt="">
      </div>
    </div>
  </div>
  

</template>
<script>
import Header from "@/components/Header";
export default {
  data(){
    return{};
  },
  methods: {
    handleForward(){
      this.$router.push("/Second")
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
    height: 812px;
    width: 375px;
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
    .like{
      img{
        height: 60px;
      }
    }
    .download{
      img{
        height: 60px;
      }
    }
    .share{
      img{
        height: 60px;
      }
    }
    .home{
      margin-left: 30px;
      img{
        height: 60px;
      }
    }
  }
  //  .open{
  //   background-color: white;
  //   height: 900px;
  //   width: 375px;
  //   .img-container{
  //     display: flex;
  //     justify-content: center;
  //     img{
  //       display: block;
  //       height: 360px;
  //     }
  //   }
  // }

  // 整形公開
  .opne{
    position: fixed;
    height: 780px;
    width: 350px;
    background-color: white;
    .img-container{
      display: flex;
      justify-content: center;
      img{
        display: block;
        height: 300px;
      }
    }
  }
  
}




</style>