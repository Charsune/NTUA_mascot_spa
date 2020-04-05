<template>
  <div class="fifth">
    <div class="backgroud"></div>
    <a class="dance" href="">
      <img src="../assets/fifth/blue_ecg.gif" alt="">
    </a>
  </div>
</template>
<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: "/Sixth" }), 3500); 
  }
};
</script>

<style scoped lang="scss">

.fifth{
  .dance{
    img{
      display: block;
      height: 80px;
    }
  }
}
