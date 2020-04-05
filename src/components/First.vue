<template>
  <div class="first" >
    <div class="header">
      <Header/>      
    </div>
    <div class="content">
      <a class="about" >
        <img src="../assets/first/about_tittle.png" alt="">
      </a>

      <a class="logo">
        <img src="../assets/first/logo.png" alt="">
      </a>

      <a class="about-text">
        <img src="../assets/first/about_text.png" alt="">
      </a>
      
      <div class="ECG">
        <a class="ecg" href="">
          <img src="../assets/first/blue_ecg.gif" alt="">
        </a>

        <div class="">
          <button @click="handleForward" class="going_to">
            <img src="../assets/first/going_to_.png" alt="">
          </button>
        </div>
      </div>

      <a class="copyright">
        <img src="../assets/first/copyright.png" alt="">
      </a>      
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


.first{
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .about{
      margin-top: 100px;
      img{
        display: block;
        height: 30px;
      }
    }
    .logo{
      margin-top: 60px;
      img{
        display: block;
        height: 80px; 
      }
    }

    .about-text{
      margin-top: 50px;
      img{
        display: block;
        height: 110px;
      }
    }
    
    .ECG{
      position: relative;
      margin-top: 50px;
      .ecg{
        img{
          width: 375px; 
        }
      }
      .going_to{
        position: absolute;
        top: 45px;
        left: 135px;
        img{
          display: block;
          height: 40px; 
        }
      }
    }

    .copyright{
      margin-top: 20px;  
      img{
        display: block;
        height: 14px; 
      }
    }

  }
}

</style>
