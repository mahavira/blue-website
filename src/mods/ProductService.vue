<template>
  <section class="mod">
    <div class="mod-screen">
      <h2 class="mod-title">为企业信息<br/>安全提供全方位的保障</h2>
      <h3 class="mod-subtitle">ADVANTAGES AND FEATURES</h3>
      <div class="content">
        <div class="item clearfix">
          <div class="item-title">
            <span>私有云部署</span>
          </div>
          <div class="item-content">
            <p>部署方式灵活，支持私有云部署，或客户服务器独立部署。</p>
          </div>
        </div>
        <div class="item clearfix">
          <div class="item-title">
            <span>公安部等保三级备案</span>
          </div>
          <div class="item-content">
            <p>凭借先进的区块链、安全算法、数据价目分布式存储技术，独家研发企业权限模型，已通过国家公安部信息系统安全等级保护的三级安全认证。</p>
          </div>
        </div>
        <div class="item clearfix">
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
  name: 'ProductService',
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
.content{
  background:rgba(255,255,255,0.96);
  margin-top: 60px;
  padding: 10px 60px;
  box-sizing: border-box;
  width: 960px;
}
.item{
  border-bottom: 1px solid rgba(134,130,130, 0.2);
  overflow: hidden;
  color: #000;
  display: flex;
  &:last-of-type{
    border-bottom: none;
  }
  .item-title{
    font-size:20px;
    font-family:PingFang-SC-Bold,PingFang-SC;
    font-weight:bold;
    background: url(../assets/icon/icon_function.png) left 50px no-repeat;
    padding: 60px 0 0 60px;
    flex: 1;
  }
  .item-content{
    padding: 60px 0 60px 60px;
    flex: 1;
    box-sizing: border-box;
    p{
      font-size: 14px;
      font-family:PingFangSC-Regular,PingFang SC;
      line-height: 24px;
      margin: 0;
    }
  }
}
</style>
