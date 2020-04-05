<template>
  <div class="fourth">
    <div class="header">
      <Header/>      
    </div>
    <!-- 上方-->
    <a class="mascot" >
      <img src="../assets/Fourth/1.png" alt="">
    </a>

    <div class="plastic_items">
      <a class="plastic_items">
        <img src="../assets/fourth/plastic_items.png" alt="">
      </a>
          <!-- 
      <div class="tab">
        <button class="tab-1">
          <img src="../assets/fourth/plastic_items.png" alt="">
        </button>
        <a class="plastic_items">
          <img src="../assets/fourth/plastic_items.png" alt="">
        </a>
        <button class="tab-2">
          <img src="../assets/fourth/plastic_items.png" alt="">
        </button>
        <a class="plastic_items">
          <img src="../assets/fourth/plastic_items.png" alt="">
        </a>
      </div>
      -->
    </div> 
    <div class="go_emergency">
      <button @click="handleForward" class="go_emergency">
        <img src="../assets/first/go_emergency.png" alt="">
      </button>
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
      this.$router.push("/Fifth" )
    }
  },
  components: {
    Header: Header
  }
};
</script>

<style scoped lang="scss">

.fourth{
  .mascot{
    img{
      margin-top: 95px;
      display: block;
      width: 375px;      
    }
  }
}


</style>