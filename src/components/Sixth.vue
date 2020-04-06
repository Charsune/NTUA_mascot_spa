<template>
  <div class="sixth" >
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


      <a class="mascot">
        <img src="../assets/sixth/habi.gif" alt="">
      </a>

      <div class="bottom-container">
        <a class="like">
          <img src="../assets/sixth/like.png" alt="">
        </a>
        <a class="download">
          <img src="../assets/sixth/download.png" alt="">
        </a> 
        <a class="share">
          <img src="../assets/sixth/share.png" alt="">
        </a>  
        <a class="home">
          <img src="../assets/sixth/home.png" alt="">
        </a>          
      </div>
    </div>
    <div class="public">
      <img src="../assets/sixth/public/happi.png" alt="">
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
  components: {
    Header: Header
  }
};
</script>

<style scoped lang="scss">
.sixth{
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
}

.public{
  background-color: white;
  height: 500px;
  width: 340px;
  img{
    display: block;
    height: 480px;
  }
}


</style>