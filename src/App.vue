<template>
  <div id="app">
    <navbar></navbar>
    <slide></slide>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import slide from '@/components/slide'
export default {
  name: 'App',
  components: {
    navbar,slide
  }
}
</script>

<style>
@import "assets/style/icon.css";
@import "assets/style/reset.css";
#app {
  background: #ebebeb;
}
</style>
