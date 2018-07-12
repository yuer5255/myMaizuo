<template>
    <div>
      <div class="container">
        <!--正在热映-->
        <div class="now-playing" @click="changeNow">
          <p :class="{active: !isShow}">正在热映</p>
        </div>
        <!--即将上映-->
        <div class="coming-soon" @click="changeNow">
          <p :class="{active: isShow}">即将上映</p>
        </div>
      </div>

      <!--列表-->
      <div class="list">
        <template v-if="nowPlayingFilms.length>0 && !isShow">
          <list v-show="!isShow" v-for="(item,index) in nowPlayingFilms" :key="item.id" :films="item"></list>
        </template>
        <template v-if="comingSoonFilms.length>0 && isShow">
          <list v-show="isShow" v-for="(item2,index2) in comingSoonFilms" :key="index2" :films="item2"></list>
        </template>
      </div>

    </div>
</template>

<script>
    import list from '@/views/film/list'
    import {mapGetters} from 'vuex'
    export default {
        name: "film-list",
        components:{
          list
        },
        data(){
          return {
            title:'',
            isShow:false
          }
        },
        computed: mapGetters({
          nowPlayingFilms: 'getNowPlayingFilms',
          comingSoonFilms: 'getComingSoonFilms'
        }),
        methods:{
          changeNow(){
            this.isShow = !this.isShow;
            console.log('isShow',this.isShow);

            if(this.isShow == false){
              this.$store.dispatch('fetchComingSoonLists', 1, 10)
            }
            //TODO
            console.log('comingSoonFilms',this.comingSoonFilms.films.length);
            console.log('nowPlayingFilms',this.nowPlayingFilms.films.length);
          }
        },
        mounted () {
          this.$store.dispatch('fetchNowPlayingLists', 1, 10)
        }
    }
</script>

<style scoped lang="less">
  .container{
    margin: 10px 15px;
    display: flex;
    justify-content: space-between;

    .coming-soon, .now-playing{
      width: 50%;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      text-align: center;
      border-bottom: 1px solid #fe6e00;
      color: #6a6a6a;
      .active{
        color: #fe6e00;
        border-bottom: solid;
        margin-bottom: 20px;
      }




    }

  }
  .list{
    margin: 0 15px;
  }
</style>
