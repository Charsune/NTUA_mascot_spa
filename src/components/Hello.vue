<template>
  <div class="hello">
    <a class="logo" href="">
      <img src="../assets//Hello/logo.png" alt="">
    </a>
    <a class="ecg" href="">
      <img src="../assets//Hello/ecg.gif" alt="">
    </a>
</div>
</template>
<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: "/First" }), 3500); 
  }
};
</script>

<style scoped lang="scss">

.hello{
  max-height: 812px;
  max-width: 375px;
  .logo{
    position: fixed;
    top: 30%;
    left: 28%; 

    img{
      height: 80px;
      filter: brightness(100);
    }
  }
}

</style>
