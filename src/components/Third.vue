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
        <img :src="src" alt="">
      </a>

      <div class="ECG">
        <div class="ecg" href="">
          <img src="../assets/third/blue_ecg.gif" alt="">
        </div>

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
    // 點擊按鈕將id傳至第四頁
    handleNext(){
      const {id} = this.$route.params
      this.$router.push({ name: 'Fourth', params: { id }})
    }
  },
  computed: {
    // 抓id把相對應的圖片換上去
    src(){
      const {id} = this.$route.params
      return `/static/third/${id}.png`
    },

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
        pointer-events: none;
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