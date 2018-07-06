<template>
    <div class="container">
      <div class="card">
        <!--1.图片-->
        <div class="card-img"></div>
        <!--2.文字-->
        <div class="card-text">
          <!--左侧电影名+影院-->
          <div class="detail">
            <p class="cinema-name">动物世界</p>
            <p class="cinema-number">156家影院上映 612人购票</p>
          </div>
          <!--右侧评分-->
          <div class="score">8.5</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "item-card"
    }
</script>

<style scoped lang="less">
.container{
  width: 100%;
  height: 240px;
  padding: 18px 0 10px;

  .card-img{
    height: 191px;
    margin: 0 15px;
    background: url("../assets/img/item.jpg") no-repeat;
    background-size: 100%;
  }

  .card-text{
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
    margin: 0 10px;
    display: flex;
    justify-content: space-between;

    .detail{
      padding: 13px 0 0 18px;
    }
    .cinema-name{
      font-size: 12px;
      line-height: 15px;
    }
    .cinema-number{
      font-size: 8px;
      color: #9a9a9a;
      line-height: 15px;
    }

    .score{
      color: #f78360;
      display: inline-block;
      line-height: 50px;
      float: right;
      margin-right: 15px;
      font-size: 18px;
    }
  }
}
</style>
