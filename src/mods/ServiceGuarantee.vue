<template>
  <section class="mod service-guarantee">
    <div class="mod-screen">
      <h2 class="mod-title">为企业信息<br/>安全提供全方位的保障</h2>
      <h3 class="mod-subtitle">ADVANTAGES AND FEATURES</h3>
      <div class="mod-listcard">
        <div class="item">
          <div class="item-title">
            <span>私有云部署</span>
          </div>
          <div class="item-content">
            <p>部署方式灵活，支持私有云部署，或客户服务器独立部署。</p>
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            <span>公安部等保三级备案</span>
          </div>
          <div class="item-content">
            <p>凭借先进的区块链、安全算法、数据价目分布式存储技术，独家研发企业权限模型，已通过国家公安部信息系统安全等级保护的三级安全认证。</p>
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            <span>安全认证</span>
          </div>
          <div class="item-content">
            <p>严格依据互联网验证标准，对企业进行100余项专业验证，并对审核结果进行跟踪监察。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceGuarantee',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/Servicesandguarantees_1920.png);
  background-position: center;
}
.mod-title, .mod-subtitle{
  text-align: left;
  width: 940px;
}
.mod-listcard{
  width: 940px;
}
@import '../styles/mixin';
@include respond-to(wide) {
  .mod-listcard, .mod-title, .mod-subtitle{
    width: 860px;
  }
}
@include respond-to(tablet) {
  .mod-listcard{
    width: auto;
  }
  .mod-title, .mod-subtitle{
    width: auto;
    text-align: center;
  }
}
</style>
