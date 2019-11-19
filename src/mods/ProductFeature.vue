<template>
  <section class="mod product-feature">
    <div class="mod-screen">
      <h2 class="mod-title">产品优势及特色</h2>
      <h3 class="mod-subtitle">ADVANTAGES AND FEATURES</h3>
       <p class="mod-intro">
        - 平台能力支撑，满足个性化业务需求 -
      </p>
      <div class="mod-card">
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
}

@import '../styles/mixin';
@include respond-to(tablet) {
  .mod{
    background-position: left center;
  }
}
</style>
