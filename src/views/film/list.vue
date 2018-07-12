<template>
  <ul>
    <li class="wrap">
      <div class="ww">
        <img class="img" :src="filmList.poster.origin">
      </div>
      <div class="intro">
        <p class="film-name">{{filmList.name}}</p>
        <p class="film-intro">{{filmList.intro}}</p>
        <p class="film-counts">{{filmList.cinemaCount}}家影院上映 {{filmList.watchCount}}人购票</p>
      </div>
      <div class="score">
        {{filmList.grade}} <span class="iconfont icon-arrow-right"></span>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "list",
        props: ['films'],
        computed:{
          filmList(){
            return this.films
          }
        }
    }
</script>

<style scoped lang="less">
  .wrap{
    width: 345px;
    height: 100px;
    display: flex;
    border-bottom: dashed 1px #c9c9c9;
    margin-bottom: 15px;

    .ww{
      width: 60px;
      height: 82px;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .intro{
      flex-grow: 4;
      text-align: left;
      padding-left: 20px;
      .film-name{
        font-size: 16px;
        line-height: 32px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .film-intro{
        height: 24px;
        line-height: 24px;
        color: #8e8e8e;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      .film-counts{
        line-height: 24px;
        color: #8e8e8e;
        font-size: 12px;
      }
    }
    .score{
      /*width: 15%;*/
      flex-grow: 3;
      font-size: 16px;
      line-height: 32px;
      color: #fc7103;
    }
  }
</style>
