<template>
  <div class="first" >
    <div class="header">
      <Header/>      
    </div>
    <div class="content">

      <a class="logo">
        <img src="../assets/first/logo.png" alt="">
      </a>

      <a class="about-text">
        <img src="../assets/first/about_text.png" alt="">
      </a>
      
      <div class="ECG">

        <div class="ecg">
          <img src="../assets/first/blue_ecg.gif" alt="">
        </div>

        <div class="">
          <button @click="handleForward" class="going_to">
            <img src="../assets/first/going_to_.png" alt="">
          </button>
        </div>
      </div>

   <!--    <a class="copyright">
        <img src="../assets/first/copyright.png" alt="">
      </a> -->
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
      this.$router.push("/second")
    }
  },
  components: {
    Header: Header
  }
};
</script>

<style scoped lang="scss">


.first{
  height: 100%;
  width: 100%;
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    .logo{
      margin-top: 30%;
      img{
        display: block;
        height: 80px; 
      }
    }

    .about-text{
      margin-top: 14%;
      img{
        display: block;
        height: 220px;
      }
    }
    
    .ECG{
      position: relative;
      margin-top: 8%;
      .ecg{
        pointer-events: none;
        img{
          width: 375px; 
        }
      }
      .going_to{
        position: absolute;
        top: 38px;
        left: 115px;
        img{
          display: block;
          height: 45px; 
        }
      }
    }

    // .copyright{
    //   margin-top: 8%;  
    //   img{
    //     display: block;
    //     height: 14px; 
    //   }
    // }

  }
}

</style>
