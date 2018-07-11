<template>
  <div id="app">
    <navbar></navbar>
    <div class="application-view">
      <router-view/>
    </div>
    <div id="nprogress">
      <div class="spinner" role="spinner" v-show="loading">
        <div class="spinner-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    navbar
  },
  computed: mapGetters({
    loading: 'getLoading'
  })
}
</script>

<style lang="less">
@import "assets/style/icon.css";
@import "assets/style/reset.css";
body{
  background: #ebebeb;
}
#app {
  background: #ebebeb;
  height: 100%;
  .application-view{
    margin-top: 50px;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  #nprogress {
    pointer-events: none;
    .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #29d;
      border-left-color: #29d;
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
  }
}
</style>
