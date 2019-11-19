<template>
  <section class="mod home">
    <div class="mod-screen is-align-start is-justify-end">
      <div class="wrp">
        <div class="decorate"></div>
        <div class="logo-txt"></div>
        <h3 class="title1">企业SAAS与多元化智能定制服务</h3>
        <p class="title2">—赋能企业，降本增效，即租即用免费服务</p>
        <a class="login" href="javascript:;" @click="$parent.login">我要免费使用 <i></i></a>
        <div class="qrcode-wrp">
          <div class="qrcode"></div>
          <div class="txt">
            扫码关注<br>微信公众号了解更多信息
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/home_1920.png);
}
.wrp{
  padding-left: 11%;
}
.logo-txt{
  background: url(../assets/icon/icon_logo02.png) center right no-repeat;
  background-size: cover;
  width: 309px;
  height: 147px;
  margin-bottom: 50px;
  position: relative;
}
.title1{
  font-size:36px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color:rgba(255,255,255,1);
  line-height: 72px;
  letter-spacing: 4px;
  position: relative;
}
.title2{
  font-size:24px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color:rgba(255,255,255,1);
  line-height:30px;
  letter-spacing:2px;
  position: relative;
}
.login{
  display: inline-block;
  background:linear-gradient(270deg,rgba(248,232,0,1) 0%,rgba(111,204,206,1) 100%);
  box-shadow:0px 10px 10px 0px rgba(0,0,0,0.19);
  border-radius:10px;
  padding: 20px 30px;
  font-size: 18px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color: #220EDB;
  margin: 60px 0 90px;
  vertical-align: middle;
  text-decoration: none;
  i{
    background: url(../assets/icon/icon_next.png) center no-repeat;
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 100px;
  }
}
.qrcode-wrp{
  background: url(../assets/bg/bg_zs01.png) 10px 32px no-repeat;
  background-size: 100%;
  width: 210px;
  height: 243px;
  position: relative;
  .txt{
    position: absolute;
    left: 210px;
    top: 60px;
    width: 160px;
    font-size:12px;
    font-family:PingFang-SC-Heavy,PingFang-SC;
    font-weight:800;
    color:rgba(255,255,255,1);
    line-height:17px;
  }
}
.qrcode{
  width: 170px;
  height: 170px;
  // border-radius:15px;
  background: #FFF url(../assets/qrcode.png) center no-repeat;
  background-size: 98%;
}
.decorate{
  background: url(../assets/bg/bg_zs02.png) 0 no-repeat;
  background-size: 100%;
  width: 350px;
  height: 376px;
  position: absolute;
  right: 510px;
  top: 0;
}
@import '../styles/mixin';
@include respond-to(wide) {
  .logo-txt{
    margin-bottom: 20px;
    width: 250px;
    background-size: contain;
  }
  .title1{
    font-size: 28px;
  }
  .title2{
    font-size: 20px;
  }
  .login{
    margin: 25px 0;
    padding: 10px 20px;
  }
}
@include respond-to(tablet) {
  .mod{
    background-position: left top;
  }
  .mod-screen{
    padding-bottom: 0;
  }
  .wrp{
    padding-left: 0;
  }
  .decorate{
    display: none;
  }
  .logo-txt{
    width: 151px;
    height: 72px;
  }
  .title1{
    font-size:18px;
  }
  .title2{
    font-size: 12px;
  }
  .login{
    margin: 50px 0 80px;
    padding: 5px 15px;
    font-size: 14px;
    line-height: 30px;
    i{
      margin-left: 30px;
      width: 30px;
      height: 30px;
      background-size: contain;
    }
  }
  .qrcode-wrp{
    width: 150px;
    height: 190px;
    .qrcode{
      width: 120px;
      height: 120px;
    }
    .txt{
      top: 50px;
      left: 150px;
    }
  }
}
</style>
