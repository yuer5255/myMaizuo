<template>
    <div class="container">
      <!--1. 图片-->
      <div class="top">
        <img class="detail-img" :src="getDetail.cover.origin">
      </div>
      <!--2. 影片简介-->
      <div class="intro">
        <h1 class="title">影片简介</h1>
        <p class="text-intro">导演：{{getDetail.director}}</p>
        <p class="text-intro">主演：{{actors}}</p>
        <p class="text-intro">地区语言：{{getDetail.nation}}({{getDetail.language}})</p>
        <p class="text-intro">类型：{{getDetail.category}}</p>
        <p class="text-intro">上映日期：{{getTime(getDetail.premiereAt)}}</p>
        <p class="text-intro2">{{getDetail.synopsis}}</p>
      </div>
      <div class="operation">
        <button class="buy" @click="goToBuy(getDetail.id)">立即购票</button>
      </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import moment from 'moment'
    export default {
        name: "detail",
        data(){
          return {
          }
        },
        computed:{
          ...mapGetters({
            getDetail: 'getDetail'
          }),
          actors() {
            console.log(this.film);
            let actors = ''
            this.getDetail.actors && this.getDetail.actors.forEach(actor => {
              actors += actor.name + ' | '
            });
            return actors.slice(0,actors.length-2)
          }
        },
        methods:{
          getTime (date) {
            return moment(date).format('M月DD日上映')
          },
          goToBuy(id){
            console.log(id);
          }
        },
        mounted(){
          this.$store.dispatch('fetchFilmDetail', this.$route.params.id);
        }
    }
</script>

<style scoped lang="less">
  .container{
    //height: 700px;
    //overflow-y: hidden;

    .detail-img{
      width: 100%;
      height: 100%;
    }

    .intro{
      margin: 20px 10px;

      .title{
        font-size: 16px;
        font-weight: normal;
        border-left: 16px solid RGB(228, 200, 156);
        margin: 16px auto;
        padding-left: 4px;
      }
      .text-intro{
        /*height: 18px;*/
        line-height: 18px;
        overflow: hidden;
        margin-bottom: 10px;
        padding-left: 20px;
      }
      .text-intro2{
        text-overflow: ellipsis;
        margin-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .operation{
      position: fixed;
      left: 0;
      bottom: 20px;
      width: 100%;
      text-align: center;

      .buy{
        height: 38px;
        width: 163px;
        background-color: #fe8233;
        color: #fff;
        border: none;
        border-radius: 36px;
        margin: 45px 0 10px 0 ;
        padding: 8px 12px;
        font-size: 15px;
        outline: none;
      }
    }

  }
</style>
