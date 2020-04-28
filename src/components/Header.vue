<template>
  <div id ="menu">
    <button @click="handleBackward" class="backward">
      <img src="../assets/header/backward.png" alt="">
    </button>
    <button @click="handleHamburger" class="hamburger">
      <img src="../assets/header/hamburger.png" alt="">
    </button>
  </div>

</template>
<script>
export default {
  // props:['topBackward'],
  data(){
    return{};
  },
  methods: {
    handleBackward(){
      // if (this.topBackward){
      //   this.topBackward()
      //   return
      // }

      this.$router.back()
    },
    handleHamburger(){
      this.$router.push("/nav" )
    }
  }

};

</script>  
</script>

<style scoped lang="scss">


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

</style>
