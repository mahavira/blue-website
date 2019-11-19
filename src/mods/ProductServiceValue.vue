<template>
  <section class="mod product-service-value">
    <div class="mod-screen">
      <h2 class="mod-title">产品的服务与价值</h2>
      <h3 class="mod-subtitle">SERVICE AND VALUE</h3>
      <div class="mod-card">
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

@import '../styles/mixin';
@include respond-to(tablet) {
  .mod{
    background-position: left top;
  }
}
</style>
