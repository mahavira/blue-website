<template>
  <section class="mod">
    <div class="mod-screen is-align-start">
      <h2 class="mod-title">企业员工<br/>全生命周期移动化、数字化管理</h2>
      <h3 class="mod-subtitle">PRODUCT INTRODUCTION</h3>
      <div class="content">
        <div class="items">
          <div class="item clearfix">
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
          <div class="item clearfix">
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
          <div class="item clearfix">
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
  </section>
</template>

<script>
export default {
  name: 'ProductIntro',
};
</script>

<style lang="scss" scoped>
.mod-screen{
  background: url(../assets/bg/Product-introduction_1920.png) center right no-repeat;
  background-size: cover;
  padding-left: 20%;
}
.content{
  background:rgba(255,255,255,0.96);
  margin-top: 64px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
.items{
  display: inline-block;
}
.item{
  border-bottom: 1px solid rgba(134,130,130, 0.2);
  overflow: hidden;
  &:last-of-type{
    border-bottom: none;
  }
  .item-title{
    font-size:20px;
    font-family:PingFang-SC-Bold,PingFang-SC;
    font-weight:bold;
    color: #000;
    float: left;
    background: url(../assets/icon/icon_function.png) left bottom no-repeat;
    padding: 60px 80px 7px;
  }
  .item-content{
    float: left;
    padding: 60px 80px;
    max-width: 400px;
    p{
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      color:#000;
      line-height: 24px;
      margin: 0 0 18px 0;
    }
    a{
      font-size:12px;
      font-family:PingFangSC-Regular,PingFang SC;
      color: #220EDB;
      line-height:20px;
      display: inline-block;
      background: url(../assets/icon/icon_advantage.png) left top no-repeat;
      background-size: 20px;
      padding-left: 28px;
      text-decoration: none;
      margin-left: 60px;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }

}
</style>
