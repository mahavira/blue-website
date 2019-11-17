<template>
  <section class="mod">
    <div class="mod-screen">
      <h2 class="mod-title">产品的服务与价值</h2>
      <h3 class="mod-subtitle">SERVICE AND VALUE</h3>
      <div class="content">
        <div class="item">
          <img src="../assets/icon/赋能.png" alt="">
          <h3>赋能企业</h3>
          <p>
            赋能<br/>让天下没有难以经营的企业
          </p>
        </div>
        <div class="item">
          <img src="../assets/icon/垂直应用.png" alt="">
          <h3>垂直应用</h3>
          <p>
            垂直应用场景深度融合，多元化产品模式，为企业 提供“产品+定制化”
          </p>
        </div>
        <div class="item">
          <img src="../assets/icon/多元场景.png" alt="">
          <h3>用户场景</h3>
          <p>
            不限定行业，多种用户使用场景，即租即用，提升企业的管理及运行效率
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductServiceValue',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/home_1920.png);
}
.content{
  background:rgba(255,255,255,0.96);
  margin-top: 130px;
  display: flex;
  max-width: 940px;
}
.item{
  flex: 1;
  text-align: center;
  padding: 95px 50px 66px;
  box-sizing: border-box;
  img{
    margin-bottom: 50px;
  }
  h3{
    font-size:18px;
    font-family:PingFang-SC-Bold,PingFang-SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:25px;
    letter-spacing:2px;
    margin: 0 0 18px;
  }
  p{
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:24px;
    letter-spacing:2px;
    margin: 0;
  }
}
</style>
