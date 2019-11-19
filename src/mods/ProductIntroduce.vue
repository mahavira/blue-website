<template>
  <section class="mod product-introduce">
    <div class="mod-screen is-align-start">
      <div class="wrp">
        <h2 class="mod-title">企业员工<br/>全生命周期移动化、数字化管理</h2>
        <h3 class="mod-subtitle">PRODUCT INTRODUCTION</h3>
        <div class="mod-listcard">
          <div class="items">
            <div class="item">
              <div class="item-title">
                <span>人才招聘</span>
              </div>
              <div class="item-content">
                <p>
                  整合招聘渠道，储备猎头人才资源，为企业分析人才获取决策.
                </p>
                <a href="javascript:;">多招聘渠道系统打通</a>
                <a href="javascript:;">猎头提供资源</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">
                <span>人才引入</span>
              </div>
              <div class="item-content">
                <p>
                  大数据驱动创新发展与管理变革，全面整合系统和平台数据，生成用人报告，为企业快速选择人才融入.
                </p>
                <a href="javascript:;">简历筛选 简历解析 能力分析 面试邀请 人才评测 背景调查</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">
                <span>安全认证</span>
              </div>
              <div class="item-content">
                <p>
                  重新定义科学的、智能的团队管理系统，为企业打造更简单、更便捷、更流畅的管理机制，让企业的运营管理畅通无阻.
                </p>
                <a href="javascript:;">员工建档 员工关系 员工福利 绩效考核 员工培训 员工晋升 薪酬体系</a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductIntroduce',
};
</script>
<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/Product-introduction_1920.png);
}
.wrp{
  padding-left: 20%;
  width: 100%;
  box-sizing: border-box;
}
@import '../styles/mixin';
@include respond-to(tablet) {
  .mod{
    background-position: left top;
  }
  .mod-screen{
    align-items: center !important;
  }
  .wrp{
    padding-left: 0;
    width: auto;
    box-sizing: border-box;
  }
  .mod-title, .mod-subtitle{
    text-align: center;
  }
}
</style>
