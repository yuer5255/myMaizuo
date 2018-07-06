<template>
    <div>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../assets/img/swiper.jpg"></swiper-slide>
        <swiper-slide><img src="../../assets/img/swiper.jpg"></swiper-slide>
      </swiper>

      <!-- 卡片 -->
      <item-card></item-card>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import itemCard from '@/components/itemCard'

    export default {
        name: "index",
        components: {
          swiper, swiperSlide, itemCard
        },
        data(){
          return {
            swiperOption: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
              // autoplay: {
              //   delay: 2500,
              //   disableOnInteraction: false
              // },
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .swiper-container {
    width: 100%;
    height: 210px;
    /*margin: 20px auto;*/
    background-color: #ccc;

    img{
       width: 100%;
       height: 100%;
    }
  }


</style>
