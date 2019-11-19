<template>
  <div class="mod-dialog login flex-column">
    <div class="dh">
      <h2 class="mod-title">登录</h2>
      <h3 class="mod-subtitle">SIGN IN</h3>
    </div>
    <div class="content">
      <div class="form">
        <div class="form-item" :class="[error.phone.type]">
          <input type="text" v-model="formdata.phone" placeholder="请输入手机号码">
          <div class="tip-info">{{error.phone.message}}</div>
          <i class="tip-dot"></i>
        </div>
        <div class="form-item verifycode" :class="[error.verifycode.type]">
          <input type="text" v-model="formdata.verifycode" placeholder="请输入短信验证码">
          <a class="verifycode-btn" href="javascript:;">获取验证码</a>
          <div class="tip-info">{{error.verifycode.message}}</div>
          <i class="tip-dot"></i>
        </div>
        <button class="form-item btn" :disabled="isSubmit" @click="submit">
          <img src="../assets/icon/loading.svg" alt="">
          <span>登录</span></button>
        <a class="noaccount" href="javascript:;"
          @click="$parent.showRegister = true">没有账户？去注册账号</a>
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
import Validator from '../validator';

export default {
  name: 'Login',
  data() {
    const formdata = {
      phone: '',
      verifycode: '',
    };
    const error = {};
    Object.keys(formdata).forEach((name) => {
      error[name] = { type: '', message: '' };
    });
    return {
      formdata,
      error,
      isSubmit: false,
      rules: {
        phone: [{
          required: true,
          message: '请输入手机号码',
          trigger: 'blur',
        }, {
          message: '手机格式不正确',
          pattern: /^1[3456789]\d{9}$/,
          trigger: 'blur',
        }],
        verifycode: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur',
        }, {
          len: 4,
          message: '验证码长度为4位',
          trigger: 'blur',
        }, {
          asyncValidator: () => this.validVerifycode(),
          message: '验证码长度为4位',
          trigger: 'blur',
        }],
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      const res = Validator(this.formdata, this.rules);
      this.error = res.series;
      if (res.pass) {
        this.isSubmit = true;
      }
    },
    async validVerifycode() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
  },
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
