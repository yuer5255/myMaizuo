<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
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

<style>
@import "assets/style/icon.css";
@import "assets/style/reset.css";
#app {

}
</style>
