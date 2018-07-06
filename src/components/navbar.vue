<template>
    <div>
      <mt-header>
        <div @click="showSlide" slot="left">
          <!--<mt-button icon="back">返回</mt-button>-->
          <span class="toolbar-title-icon">
            <i class="iconfont icon-list"></i>
          </span>
          <span>卖座电影</span>
        </div>
        <router-link to="/user" class="user iconfont icon-user" slot="right"></router-link>
      </mt-header>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        methods:{
          showSlide(){

          }
        }
    }
</script>

<style scoped lang="less">
  .mint-header{
    background-color: #282828;
    height: 50px;
    line-height: 50px;
    color: #efefef;

    .toolbar-title-icon{
      box-shadow: 1px 0 1px #363636;
      color: #999;
      width: 48px;
      margin-left: 10px;
      margin-right: 30px;
    }

    .user{
      color: #999;
    }
  }
</style>
