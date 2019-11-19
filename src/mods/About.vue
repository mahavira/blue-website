<template>
  <section class="mod about">
    <div class="mod-screen is-align-start">
      <div class="mod-dialog">
        <div class="intro">
          <h2 class="mod-title">关于我们</h2>
          <h3 class="mod-subtitle">ABOUT US</h3>
        </div>
        <div class="contact">
          <div>
            <p>让天下没有难以经营的企业，让企业管理可视化构建全国企业经营融合生态圈</p>
            <div class="line"></div>
            <div class="contact-dt">
              联系我们
            </div>
            <div class="contact-item tel">
              4000151009
            </div>
            <div class="contact-item addr">
              辽宁省大连高新技术产业园区高能街125号(地上11层3)02室984
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/bg_photo.png);
  background-color: #220EDB;
  background-size: 15vw 100%;
  background-position: right center;
}
.intro{
  width: 400px;
  height: 360px;
  padding: 0 20px;
  position: relative;
}
.mod-title{
  margin-top: 0;
}
.contact{
  color: #FFF;
  width: 540px;
  font-size:20px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color:#FFF;
  line-height:28px;
  letter-spacing:4px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
}
.line{
  height: 1px;
  background:rgba($color: #FFF, $alpha: 0.2);
  margin: 66px 0;
}
.contact-dt{
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:#FFF;
  line-height: 28px;
  margin-bottom: 25px;
}
.contact-item{
  font-size: 14px;
  font-family: PingFangSC-Regular,PingFang SC;
  font-weight: 400;
  line-height: 20px;
  padding: 15px;
}
.contact-item{
  background: url(../assets/icon/icon_iphone.png) left center no-repeat;
  background-size: 25px 25px;
  padding-left: 60px;
  letter-spacing: 1px;
}
.addr{
  background-image: url(../assets/icon/icon_address.png);
}
@import '../styles/mixin';
@include respond-to(wide) {
  .intro{
    width: 300px;
  }
}
@include respond-to(tablet) {
  .mod{
    background-size: cover;
  }
  .mod-screen{
    padding: 0;
    min-height: auto;
  }
  .mod-dialog{
    position: relative;
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    width: auto;
    height: auto;
  }
  .intro{
    width: auto;
    height: auto;
    margin-bottom: 50px;
  }
  .contact{
    padding: 0;
    width: auto;
    font-size: 14px;
    .contact-item{
      padding-left: 40px;
    }
  }
  .line{
    margin: 30px 0;
  }
}
</style>
