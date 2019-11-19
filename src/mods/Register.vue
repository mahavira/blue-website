<template>
  <div class="mod-dialog register flex-column">
    <div class="dh">
      <h2 class="mod-title">请完善注册信息</h2>
    </div>
    <div class="form">
      <div class="form-item">
        <input type="text" placeholder="账户使用者姓名">
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="form-item">
        <input type="text" placeholder="企业名称">
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="form-item">
        <input type="text" placeholder="企业规模">
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="form-item">
        <input type="text" placeholder="企业性质">
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="form-item">
        <input type="text" placeholder="请输入手机号码">
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="form-item">
        <input type="text" placeholder="请输入短信验证码">
        <a class="verify-code" href="javascript:;">获取验证码</a>
        <div class="error-info">数字位数超出正常范围</div>
      </div>
      <div class="agreement">我接受<a href="http://www.baidu.com">用户协议</a></div>
      <div class="form-item btn">注册</div>
      <a class="noaccount" href="javascript:;"
        @click="$emit('openDialog', 'login')">已有账号？立即登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/home_1920.png);
}
.dh{
  position: relative;
  margin-bottom: 85px;
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
.agreement{
  color: #FFF;
  padding-left: 27px;
  line-height: 18px;
  position: relative;
  margin: 30px 0 25px;
  &::before, &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 3px solid #FFF;
    display: block;
  }
  &::after{
    left: 5px;
    top: 5px;
    width: 8px;
    height: 8px;
    transition: transform 0.3s;
    background: #FFF;
    border: none;
    transform: scale(0);
  }
  &.active:after{
    transform: scale(1);
  }
  a{
    color: #FFF;
  }
}
@import '../styles/mixin';
@include respond-to(wide) {
  .dh {
    margin-bottom: 20px;
  }
  .agreement{
    margin: 10px 0;
  }
  .noaccount{
    margin-top: 20px;
  }
}
@include respond-to(mobile) {
  .mod-dialog{
    justify-content: flex-start;
  }
}
</style>
