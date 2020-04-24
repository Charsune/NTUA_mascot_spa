<template>
  <router-view/>
</template>

<script>
import Vue from 'vue';
</script>
<style>
@import'./common/font.css';
body,
html {
  font-family: 'GenJyuuGothic-P-Medium';
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
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
