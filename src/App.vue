<template>
  <router-view/>
</template>

<script>
import Vue from 'vue';
</script>
mounted () {
   window.fbAsyncInit = function() {
    FB.init({
      appId            : '505133300173610',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v6.0'
    });
  };
}
<style>
@import'./common/font.css';
body,
html {
  font-family: 'GenJyuuGothic-P-Medium';
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  -moz-user-select: none; 
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
}
button{
  border: 0;
  padding: 0;
  background: none;
}

</style>
