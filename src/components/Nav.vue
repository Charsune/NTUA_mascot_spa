<template>
<div class="Nav">
  <aside class="aside">
    <button @click="handleClose" class="close">
      <img src="../assets/nav/close.png" alt="">
    </button>
    <a @click="handleAbout" class="about_mascot" >
      <img src="../assets/nav/about_mascot.png" alt="">
    </a>
    <a @click="handleService" class="service" >
      <img src="../assets/nav/service.png" alt="">
    </a>   

    <a class="aside-footer" target="_blank" href="https://www.facebook.com/%E5%90%89%E6%95%B4%E5%AE%A4-101955708126679/?eid=ARChsqqFCWh1dY1LZdcHehjeuS3aYbNWqnhWh1SzkaSbH3Ju4qkV2DDNRCbLQQtdihUfKjZ3BnmPPKe0">
      <img src="../assets/nav/fb.png" alt="">
    </a>
    <a class="contact" href="">
      <img src="../assets/nav/contact.png" alt="">
    </a>
  </aside>
</div>
</template>
<script>
export default {
  data(){
    return{};
  },
  methods: {

    handleClose(){
      this.$router.back()
    },
    handleAbout(){
      this.$router.replace("/first" )
    },
    handleService(){
      this.$router.replace("/second" )
    }
  }
};
</script>

<style scoped lang="scss">
.Nav{
  background-color: #333333;
  z-index: -1;
  width: 100vw;
  height: 100vh;

}
  .aside{
    // position
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    // basic
    width: 250px;
    padding: 20px;
    background-color: #09E2DE;
  }

.close{
  border: 0;
  padding: 0;
  background: none;

  align-self: flex-end;
     
  margin: 0 0 20px;
  img{
    display: block;
    height: 20px;
  }
}

.about_mascot{
  transition: top 0.3s;
  margin-top: 50px;
  img{
    display: block;
    height: 17px;
  }
}
.service{
  transition: top 0.3s;
  margin-top: 50px;
  img{
    display: block;
    height: 17px;
  } 
}
.aside-footer{
  margin-top: auto;
  img{
    display: block;
    height: 55px;
  } 
}
.contact{
  margin-top: 10px; 
  margin-bottom: 20px; 
  img{
    display: block;
    height: 13px;
  } 
}
</style>
