<template>
  <div class="fifth">
    <div class="backgroud"></div>
    <a class="dance" href="">
          <!-- 素材還沒好，暫時以這個替代-->
      <img src="../assets/fifth/blue_ecg.gif"  alt="">
    </a>
  </div>

</template>
<script>
export default {
  created() {
    const {id} = this.$route.params
    setTimeout(() => this.$router.push({ name: 'Sixth', params: { id } }), 3500); 
  }
  // ,
  // computed: {
  //   src(){
  //     const {id} = this.$route.params
  //     return `/static/fifth/${id}.gif`
  //   },
  // }
};
</script>

<style scoped lang="scss">

.fifth{
  .backgroud{
    display: block;
    height: 812px;
    width: 375px;
    background-color: #59E2F5;
  }
  .dance{
    position: fixed;
    top: 30%;
    left: 28%;
    img{
      display: block;
      height: 80px;
    }
  }
}
</style>