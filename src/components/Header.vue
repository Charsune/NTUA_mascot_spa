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
  data(){
    return{};
  },
  methods: {
    handleBackward(){
      this.$router.back()
    },
    handleHamburger(){
      this.$router.push("/Nav" )
    }
  }

};

</script>  
</script>

<style scoped lang="scss">


#menu{
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 30px;
  .backward{
    border: 0;
    background-color: transparent;
    position: absolute;
    left: 30px;
    img{
      height: 20px;
    }
  }
  
  .hamburger{
    border: 0;
    background-color: transparent;
    position: absolute;
    right: 30px;
    img{
      height: 20px;
    }
  }
}

</style>
