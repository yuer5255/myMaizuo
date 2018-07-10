<template>
  <div id="app">
    <navbar></navbar>
    <div class="application-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style lang="less">
@import "assets/style/icon.css";
@import "assets/style/reset.css";
#app {
  background: #ebebeb;
  height: 100%;
  .application-view{
    margin-top: 50px;
  }
}
</style>
