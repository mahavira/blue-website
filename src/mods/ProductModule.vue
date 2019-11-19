<template>
  <section class="mod product-module" ref="mod">
    <div class="mod-screen" ref="screen"></div>
    <div class="mod-screen flex-row mod-container" :class="{fixed: isFixed}">
      <div class="mod-container-wrp" ref="container">
        <div class="header">
          <h2 class="mod-title"><span>7</span>大核心板块</h2>
          <h3 class="mod-subtitle">PRODUCT INTRODUCTION</h3>
          <p class="mod-intro">
            - 帮助企业降低管理成本<br/>
            - 提升工作效率
          </p>
        </div>
        <div class="block">
          <div class="block-dt"><span>1</span> 组织架构</div>
          <div class="block-img">
            <img src="../assets/pho_01.png" alt="">
          </div>
          <div class="block-txt">
            ● 支持批量上传组织架构表格 <br/>● 智能生成组织架构图<br/>● 根据企业自身需求支持自定义配置。<br/>● 多种行业组织架构模板，提供标准化的参考。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>2</span> 人事档案</div>
          <div class="block-img">
            <img src="../assets/pho_02.png" alt="">
          </div>
          <div class="block-txt">
            ● 员工档案材料云端储存，随时随地查看员工信息。<br/>
            ● 在线办理入职、异动流程，员工工作轨迹全面存档记录。<br/>
            ● 建立员工画像，助力企业实时监测，评估、优化用人策略。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>3</span> 招聘管理</div>
          <div class="block-img">
            <img src="../assets/pho_03.png" alt="">
          </div>
          <div class="block-txt">
            ● 初选、面试、录用全流程管理，招聘进度、提供人才背调数据参考，帮助降 低用人风险。<br/>
            ● 简历解析功能自动提取候选人信息，快速创建候选人。<br/>
            ● 多用人部门与HR共同协作，提升用人部门满意度。<br/>
            ● 统计分析监控招聘转化和渠道质量。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>4</span> 考勤假期</div>
          <div class="block-img">
            <img src="../assets/pho_04.png" alt="">
          </div>
          <div class="block-txt">
            ● 支持按考勤组定义员工的出勤规则、打卡地点。<br/>
            ● 智能识别从考勤机里导出的原始打卡记录，一键核算考勤异常。<br/>
            ● 多系统协同，提供工作效率。<br/>
            ● 场景化展示考勤、提高核对效率。<br/>
            ● 员工考勤、按月存档，企业统一管理。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>5</span> 绩效薪酬</div>
          <div class="block-img">
            <img src="../assets/pho_05.png" alt="">
          </div>
          <div class="block-txt">
            ● 持按企业工资表自定义薪酬结构，生成企业月工资表模板。<br/>
            ● 月工资计算完成后，核对无误，审批通过后，可一键给员工发送工资条，员工可自助查询。<br/>
            ● 员工入离职自动生成增减员计划，事情再多也不会错漏。<br/>
            ● 每月缴费人员统计、统计企业用人成本，管理者一目了然。<br/>
            ● 与员工、薪酬系统打通，自动生成月账单，汇缴、增员、减员、提高企业管理效率。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>6</span> 行政审批</div>
          <div class="block-img">
            <img src="../assets/pho_06.png" alt="">
          </div>
          <div class="block-txt">
            ● 内置多种经典审批表单模板，涵盖人事、考勤、行政、财务等，一键快速启用，通过自定义可实现更多复杂表单。<br/>
            ● 使用微信操作规范，简单易上手。可随时随地发起、处理审批，通知消息即时触达，审批单可通过微信分享给相关负责人同事。<br/>
            ● 审批结果自动同步至人事、考勤等业务，减少HR日常工作量。<br/>
            ● 支持审批结果导出、打印，方便存档记录。<br/>
            ● 无纸化审批，降低运营成本。<br/>
            ● 自动更新相关员工考勤、人事数据，员工成长轨迹有迹可循。
          </div>
        </div>
        <div class="block">
          <div class="block-dt"><span>7</span> 大数据分析</div>
          <div class="block-img">
            <img src="../assets/pho_07.png" alt="">
          </div>
          <div class="block-txt">
            ● 通过技术，将企业的人、事、物用智能的管理流程连接、将管理系统应用于员工工作场景，提高流程效率，降低运营成本。<br/>
            ● 通员员工的行走轨迹，工作；路径的数据获取，让企业更加了解员工，了解员工的全生命周期。<br/>
            ● 通过使用场景内对员工的精准识别与画像，助力企业实时监测、评估员工，优化企业用人策略。<br/>
            ● 大数据分析在实际场景中落地、用技术实现企业的降本增效，帮助企业实现在商业价值道路上的战略实现。
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { isMobile } from '../util';

export default {
  name: 'ProductModule',
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    setTimeout(() => {
      if (isMobile()) return;
      const { mod, screen, container } = this.$refs;
      const { offsetTop, offsetWidth, offsetHeight } = mod;
      const { scrollWidth } = container;
      const addedWidth = scrollWidth - offsetWidth;
      screen.style.paddingBottom = `${addedWidth}px`;
      this.$watch('$parent.scrollTop', (y) => {
        if (y > offsetTop && y < offsetTop + scrollWidth + offsetHeight) {
          this.isFixed = true;
          container.scrollLeft = y - offsetTop;
        } else {
          this.isFixed = false;
        }
      });
    }, 1000);
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.mod{
  background: #F8E800;
}
.mod-container{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100vh;
  flex-wrap: nowrap;
  overflow: hidden;
  background: url(../assets/bg/Corepage_1920.png) center left no-repeat;
  background-size: cover;
  &.fixed{
    position: fixed;
    left: 100px;
  }
}
.mod-container-wrp{
  display: flex;
  overflow: hidden;
  padding: 38px 20px 0;
}
.header{
  flex: 0 0 500px;
  padding: 0 5vw 0 15vw;
}
.mod-title, .mod-subtitle, .mod-intro{
  color: #220EDB;
  text-shadow: 1px 1px 1px  #F8E800;
}
.mod-title span{
  font-size: 100px;
}
.mod-intro{
  margin-top: 100px;
}

.block{
  flex:0 0 540px;
  height: 630px;
  background: #FFF;
  border-radius:15px;
  padding: 50px 12px 0;
  position: relative;
  box-sizing: border-box;
  margin-right: 20px;
  box-shadow: 5px 20px 20px rgba($color: #000000, $alpha: 0.3);
}
.block-dt{
  background:rgba(34,14,219,1);
  border-radius:2px;
  position: absolute;
  left: 0;
  top: -38px;
  color: #FFF;
  font-size: 20px;
  font-family:PingFang-SC-Bold,PingFang-SC;
  font-weight:bold;
  padding: 13px 50px 13px 20px;
  line-height: 1;
  span{
    font-size: 48px;
    font-family:DINAlternate-Bold,DINAlternate;
    font-weight:bold;
    color:rgba(255,255,255,1);
    vertical-align: middle;
    padding: 0 25px 0 8px;
  }
}
.block-img img {
  display: block;
  width: 100%;
}
.block-txt{
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,14,219,1);
  line-height: 24px;
  padding: 20px 40px;
}
@import '../styles/mixin';
@include respond-to(wide) {
  .header{
    padding: 0 5vw 0 5vw;
    flex: 0 0 400px;
  }
  .block{
    flex: 0 0 440px;
    height: 530px;
  }
  .block-txt{
    padding: 10px 15px;
  }
}
@include respond-to(tablet) {
  .mod-screen{
    display: none;
    background-position: left top;
    background-size: 320% auto;
  }
  .mod-container{
    position: relative;
    height: auto;
    display: block;
  }
  .mod-container-wrp{
    flex-direction: column;
    padding: 0 20px;
    display: block;
  }
  .header{
    padding: 0;
    margin-bottom: 60px;
    .mod-intro{
      margin-top: 10px;
    }
    .mod-title{
      span{
        font-size: 44px;
      }
    }
  }
  .block{
    margin-right: 0;
    margin-bottom: 70px;
    height: auto;
    border-radius: 5px;
    box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
    .block-dt{
      top: -30px;
      font-size: 18px;
      line-height: 36px;
      span{
        font-size: 36px;
      }
    }
  }
}
</style>
