<template>
  <section class="mod">
    <div class="mod-screen">
      <h2 class="mod-title">产品优势及特色</h2>
      <h3 class="mod-subtitle">ADVANTAGES AND FEATURES</h3>
       <p class="mod-intro">
        - 平台能力支撑，满足个性化业务需求 -
      </p>
      <div class="content">
        <div class="item">
          <img src="../assets/icon/免费服务.png" alt="">
          <h3>免费服务</h3>
          <p>
            用户即租即用的免费Web软件，来管理企业经营活动
          </p>
        </div>
        <div class="item">
          <img src="../assets/icon/专业服务.png" alt="">
          <h3>专业服务</h3>
          <p>
            根据业务场景<br/>自定义需求提供定制版本
          </p>
        </div>
        <div class="item">
          <img src="../assets/icon/独家服务.png" alt="">
          <h3>独家服务</h3>
          <p>
            保护企业隐私<br/>提供企业专属系统
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductFeature',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/Advantagesandfeatures_1920.png);
  background-position: center;
}

.mod-title, .mod-subtitle, .mod-intro{
  color: #220EDB;
}
.mod-intro{
  margin-top: 42px;
  line-height: 1;
  font-size: 20px;
}

.content{
  background:rgba(255,255,255,0.96);
  display: flex;
  width: 940px;
  margin-top: 60px;
}
.item{
  flex: 1;
  text-align: center;
  padding: 95px 50px 66px;
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
