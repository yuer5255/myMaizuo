<template>
    <div>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in billboards" :key="item.id"><img :src="item.imageUrl"></swiper-slide>
      </swiper>

      <!-- 卡片 -->
      <item-card :films="{comingSoon:comingSoonFilms, nowPlaying:nowPlayingFilms}"></item-card>




    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import itemCard from '@/components/itemCard'
    import {mapGetters} from 'vuex'

    export default {
        name: "index",
        components: {
          swiper, swiperSlide, itemCard
        },
        data(){
          return {
            swiperOption: {
              autoplay: {
                delay: 3500,
                disableOnInteraction: false
              },
              loop: true
            }
          }
        },
        computed:{
          ...mapGetters({
            comingSoonFilms: 'getComingSoonFilms',
            nowPlayingFilms: 'getNowPlayingFilms',
            billboards: 'getBillboards'
          })
        },
        created(){
          console.log(this.$route.params.phoneNumber);
          this.$store.dispatch('fetchComingSoonLists', 1, 5)
          this.$store.dispatch('fetchNowPlayingLists', 1, 5)
          this.$store.dispatch('fetchBillboards')
        }
    }
</script>

<style scoped lang="less">
  .swiper-wrapper{
    position: static !important;
  }
  .swiper-container {
    /*width: 100%;*/
    /*height: 210px;*/
    /*margin: 20px auto;*/
    /*background-color: #ccc;*/


    img{
       width: 100%;
       height: 100%;
    }
  }
</style>
