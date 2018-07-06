<template>
    <ul class="container">
       <li class="item" v-for="n in 5">
         <router-link to="/home">
           <div class="item-container">
             <span>首页</span>
             <span>
               <i class="iconfont  icon-arrow-right"></i>
             </span>
           </div>
         </router-link>
       </li>
    </ul>
</template>

<script>
    export default {
        name: "slide"
    }
</script>

<style scoped lang="less">
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
</style>
