<template>
  <div class="fifth">
    <div class="backgroud"></div>
    <a class="dance" href="">
          <!-- 素材還沒好，暫時以這個替代-->
      <img src="../assets/fifth/loading.gif"  alt="">
    </a>
  </div>
</template>
<script>
export default {
  created() {
    const {id} = this.$route.params
    setTimeout(() => this.$router.push({ name: 'Sixth', params: { id } }), 3500); 
  }
};
</script>

<style scoped lang="scss">

.fifth{
  .backgroud{
    display: block;
    height: 100vh;
    width: 100vw;
    background-color: #59E2F5;
  }
  .dance{
    position: fixed;
    top: 0;
    left: 0;
    img{
      display: block;
      height: 100vh;
    }
  }
}
</style>