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
    setTimeout(() => this.$router.push({ path: "/first" }), 3500); 
  }
};
</script>

<style scoped lang="scss">

.hello{
  height: 100%;
  width: 100%;
  background-color: #07E4E0;
  display: flex;
  justify-content: center;
  .logo{
    position: fixed;
    top: 30%;
    img{
      height: 80px;
      filter: brightness(100);
    }
  }
}

</style>
