<template>
  <div class="fifth">
    <div class="backgroud"></div>
    <a class="dance" href="">
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
  display: block;
  height: 100%;
  width: 100%;
  background-color: #59E2F5;
  display: flex;
  justify-content: center;
  
  .dance{
    position: fixed;
    top: 0;
    left: 0;
    img{
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
</style>