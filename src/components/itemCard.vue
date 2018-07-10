<template>
    <div class="container">
      <div class="card now-playing">
        <!--1.图片-->
        <div class="card-img">
          <img src="../assets/img/item.jpg">
        </div>
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

        <!-- 更多 -->
        <div class="more-cinema">
          更多热映电影
        </div>
      </div>

      <div class="card coming-soon">
        <!-- 分割线 即将上映 -->
        <div class="coming">
          <p class="upcoming">即将上映</p>
        </div>
        <!--1.图片-->
        <div class="card-img">
          <img src="../assets/img/coming.jpg">
        </div>
        <!--2.文字-->
        <div class="card-text">
          <!--左侧电影名+影院-->
          <div class="detail">
            <p class="cinema-name">我说的都是真的</p>
          </div>
          <!--右侧评分-->
          <div class="cinema-date">12月31日</div>
        </div>

        <!-- 更多 -->
        <div class="more-cinema">
          更多即将上映电影
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
  height: 100%;
  padding: 18px 0 10px;

  .card-img{
    height: 190px;
    margin: 0 10px;
    img{
      width: 100%;
      height: 100%;
    }
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

    .cinema-date{
      font-size: 12px;
      margin: 0 10px;
      color: rgb(245, 162, 125);
    }
  }
}

.more-cinema{
  width: 160px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 15px;
  margin: 10px auto 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #616161;
  cursor: pointer;
}
.coming{
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #a8a8a8;

  .upcoming{
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
  }
}
</style>
