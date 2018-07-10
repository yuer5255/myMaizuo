<template>
  <nav id="toolbar">
    <h1 @click="showSlide">
      <a href="javascript: void 0;">
        <div class="toolbar-title-icon">
          <i class="iconfont icon-list"></i>
        </div>
        <div class="toolbar-title">
          卖座电影
        </div>
      </a>
    </h1>
    <div id="nav-right">
      <router-link to='/user' class="user">
        <i class="iconfont icon-user"></i>
      </router-link>
    </div>

    <transition name="fade">
      <slide v-if="isShowSlide"></slide>
    </transition>

    <!--<div>-->
      <!--<mt-header fixed>-->
        <!--<div @click="showSlide" slot="left">-->
          <!--&lt;!&ndash;<mt-button icon="back">返回</mt-button>&ndash;&gt;-->
          <!--<span class="toolbar-title-icon">-->
            <!--<i class="iconfont icon-list"></i>-->
          <!--</span>-->
          <!--<span>卖座电影</span>-->
        <!--</div>-->

        <!--<router-link to="/user" class="user iconfont icon-user" slot="right"></router-link>-->
      <!--</mt-header>-->
      <!--<transition name="fade">-->
        <!--<slide v-if="isShowSlide"></slide>-->
      <!--</transition>-->
    <!--</div>-->
  </nav>

</template>

<script>
    import {mapState} from 'vuex'
    import slide from './slide'
    export default {
        name: "navbar",
        components:{slide},
        data(){
          return {
            isShow: false
          }
        },
        computed:{
          ...mapState({
            isShowSlide(){
              return this.$store.state.leftNavState;
            }
          })
        },
        methods:{
          showSlide(){
            this.isShow = !this.isShow;
            console.log(this.isShow);
            this.$store.commit('CHANGE_LEFTNAV_STATE',this.isShow);
          }
        }
    }
</script>

<style scoped lang="less">
  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    h1 {
      color: #fff;
      font-size: 16px;
      line-height: 50px;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 50px;
      margin: 0 auto;
      float: left;
      a{
        font-size: 16px;
        line-height: 50px;
        text-align: left;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
        .toolbar-title-icon {
          float: left;
          width: 48px;
          text-align: center;
          border-right: 1px solid #222;
          box-shadow: 1px 0 1px #363636;
          color: #999;
        }
        .toolbar-title {
          padding: 0 1em;
          float: left;
          font-size: 14px;
          color: #efefef;
          text-overflow: ellipsis;
          white-space: nowrap;
          displdday: inline-block;
          overflow: hidden;
        }
      }
    }
  }
  #nav-right {
    float: right;
    .city {
      float: left;
      font-size: 14px;
      padding: 0 6px;
    }
    .user {
      float: left;
      font-size: 16px;
      width: 48px;
      text-align: center;
    }
    a {
      color: #999;
    }
  }

  /*.mint-header{*/
    /*background-color: #282828;*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*color: #efefef;*/

    /*.toolbar-title-icon{*/
      /*box-shadow: 1px 0 1px #363636;*/
      /*color: #999;*/
      /*width: 48px;*/
      /*margin-left: 10px;*/
      /*margin-right: 30px;*/
    /*}*/

    /*.user{*/
      /*color: #999;*/
    /*}*/
  /*}*/

  .fade-enter-active, .fade-leave-active {
    transition: all linear 1s;
  }
  .fade-enter{
    opacity: 1;
    left: 50px;
  }
  .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    left: 0;
  }
</style>
