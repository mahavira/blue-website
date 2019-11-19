<template>
  <div class="mod-dialog login flex-column">
    <div class="dh">
      <h2 class="mod-title">登录</h2>
      <h3 class="mod-subtitle">SIGN IN</h3>
    </div>
    <div class="content">
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号码">
          <div class="error-info">数字位数超出正常范围</div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入短信验证码">
          <a class="verify-code" href="javascript:;">获取验证码</a>
          <div class="error-info">数字位数超出正常范围</div>
        </div>
        <div class="form-item btn">登录</div>
        <a class="noaccount" href="javascript:;"
          @click="$emit('openDialog', 'register')">没有账户？去注册账号</a>
      </div>
      <div class="line"></div>
      <div class="qrcode">
        <img src="../assets/qrcode.png" alt="">
        <span>或使用微信扫一扫快速登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/home_1920.png);
}
.mod-title, .mod-subtitle{
  text-align: left;
}
.dh{
  position: relative;
  padding: 0 110px;
  margin-bottom: 85px;
  width: 1030px;
  box-sizing: border-box;
}
.content{
  display: flex;
}
.line{
  width:1px;
  background:rgba(255,255,255,1);
  opacity: 0.7;
}
.form{
  padding: 0 110px;
  .form-item.btn{
    margin-top: 100px;
  }
}
.noaccount{
  font-size:14px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color:rgba(255,255,255,1);
  line-height:22px;
  text-align: center;
  display: block;
  margin-top: 40px;
  text-decoration: none;
}
.qrcode{
  text-align: center;
  padding: 0 110px;
  img{
    display: block;
    width:221px;
    height:221px;
    background: #FFF;
    margin: 0 auto;
  }
  span{
    font-size:14px;
    font-family:PingFang-SC-Heavy,PingFang-SC;
    font-weight:800;
    color:rgba(255,255,255,1);
    line-height:28px;
    letter-spacing:2px;
    margin-top: 28px;
    display: block;
  }
}
@import '../styles/mixin';
@include respond-to(tablet) {
  .dh{
    width: auto;
    margin: 20px 0 30px;
  }
  .content{
    flex-direction: column;
  }
  .qrcode{
    margin-top: 50px;
  }
  .noaccount{
    margin-top: 20px;
  }
  .form{
    .form-item.btn{
      margin-top: 20px;
    }
  }
}
@include respond-to(mobile) {
  .mod-dialog{
    justify-content: flex-start;
  }
  .mod-subtitle, .mod-title{
    text-align: center;
  }
  .qrcode{
    margin-top: 20px;
    img{
      width: 80px;
      height: 80px;
    }
  }
}
</style>
