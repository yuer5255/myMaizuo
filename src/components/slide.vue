<template>
  <div class="wrap">
    <ul class="container">
      <li class="item" v-for="(item,index) in leftNavItem" :key="index">
        <router-link :to="item.path">
          <div class="item-container">
            <span>{{item.name}}</span>
            <span>
             <i class="iconfont  icon-arrow-right"></i>
           </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "slide",
        data(){
          return{
            leftNavItem: [
              {name: '首页',path:'/home'},
              {name: '影片',path:'/film'},
              {name: '影院',path:'/cinema'},
              {name: '商城',path:'/shop'},
              {name: '我的',path:'/user'},
              {name: '卖座卡',path:'/card'}
            ]
          }
        },
        computed: {
          ...mapState({
            isShowSlide(state){
              console.log(this.$store.state.leftNavState);
            }
          })
        }
    }
</script>

<style scoped lang="less">
  .wrap{
    z-index: 999;
    position: fixed;
    height: 100%;
    top: 50px;
    left: 0;

    .container{
      background: #282828;
      width: 265px;
      height: 100%;

      .item {
        border-bottom: 1px dotted #333;
        height: 50px;
        padding: 0 16px 0;

        a{
          color: #9a9a9a;
          font-size: 14px;
          line-height: 50px;
          display: block;
          width: 100%;
          height: 100%;

        }
      }

      .item-container{
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
