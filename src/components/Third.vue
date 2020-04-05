<template>
  <div class="second">
    <div class="header">
      <Header/>      
    </div>
 <!-- 上方-->
    <div class="container">
      <a class="operating_room">
        <img src="../assets/third/operating_room.png" alt="">
      </a>
      <a class="mascot">
        <img src="../assets/third/1.png" alt="">
      </a>

      <div class="ECG">
        <a class="ecg" href="">
          <img src="../assets/third/blue_ecg.gif" alt="">
        </a>

        <div class="">
          <button @click="handleNext" class="next_step">
            <img src="../assets/third/next_step.png" alt="">
          </button>
        </div>
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
    handleNext(){
      this.$router.push("/Fourth" )
    }
  },
  components: {
    Header: Header
  }
};
</script>

<style scoped lang="scss">
.container{
  //排版
  display: flex;
  flex-direction: column;
  align-items: center;
    .operating_room{
      margin-top: 15px;
      img{
        display: block;
        height: 50px;
      }
    }
    .mascot{
      margin-top: 30px;
      img{
        display: block;
        width: 375px;
      }
    }
    .next_step{
      margin-top: 0px;    
      img{
        display: block;
        height: 100px; 
      }      
    }
    .ECG{
      position: relative;
      margin-top: 10px;
      .ecg{
        img{
          display: block;
          width: 375px; 
        }
      }
      .next_step{
        position: absolute;
        top: 17px;
        left: 145px;
        img{
          display: block;
          height: 90px; 
        }
      }
    }

}

</style>