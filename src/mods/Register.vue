<template>
  <div class="mod-dialog register flex-column">
    <div class="dh">
      <h2 class="mod-title">请完善注册信息</h2>
    </div>
    <div class="form">
      <div class="form-item" :class="[error.name.type]">
        <input type="text" v-model="formdata.name" placeholder="账户使用者姓名">
        <div class="tip-info">{{error.name.message}}</div>
        <i class="tip-dot"></i>
      </div>
      <div class="form-item" :class="[error.company.type]">
        <input type="text" v-model="formdata.company" placeholder="企业名称">
        <div class="tip-info">{{error.company.message}}</div>
        <i class="tip-dot"></i>
      </div>
      <div class="form-item select" :class="[error.scoped.type]">
        <span v-if="formdata.scoped" class="select-text">{{formdata.scoped}}</span>
        <div v-else class="placeholder">企业规模</div>
        <select v-model="formdata.scoped">
          <option value="20人以下">20人以下</option>
          <option value="20 - 50人">20 - 50人</option>
          <option value="50 - 100人">50 - 100人</option>
          <option value="100- 200人">100- 200人</option>
          <option value="200人以上">200人以上</option>
        </select>
        <div class="tip-info">{{error.scoped.message}}</div>
        <i class="tip-dot"></i>
        <i class="icon-arrow"></i>
      </div>
      <div class="form-item select" :class="[error.property.type]">
        <span v-if="formdata.property" class="select-text">{{formdata.property}}</span>
        <div v-else class="placeholder">企业性质</div>
        <select v-model="formdata.property">
          <option value="国有企业">国有企业</option>
          <option value="私营企业">私营企业</option>
          <option value="外商投资企业">外商投资企业</option>
        </select>
        <div class="tip-info">{{error.property.message}}</div>
        <i class="tip-dot"></i>
        <i class="icon-arrow"></i>
      </div>
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
      <div class="agreement" @click="formdata.agreement = !formdata.agreement"
        :class="{active: formdata.agreement}">
        我接受<a href="http://www.baidu.com">用户协议</a></div>
      <button class="form-item btn" :disabled="isSubmit" @click="submit">
        <img src="../assets/icon/loading.svg">
        <span>注册</span>
      </button>
      <a class="noaccount" href="javascript:;"
        @click="$parent.showRegister = false">已有账号？立即登录</a>
    </div>
  </div>
</template>

<script>
import Validator from '../validator';

export default {
  name: 'Register',
  data() {
    const formdata = {
      name: '',
      company: '',
      scoped: '',
      property: '',
      phone: '',
      verifycode: '',
      agreement: false,
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
        name: [{
          required: true,
          message: '请输入账户使用者姓名',
          trigger: 'blur',
        }],
        company: [{
          required: true,
          message: '请输入企业名称',
          trigger: 'blur',
        }],
        scoped: [{
          required: true,
          message: '请选择企业规模',
          trigger: 'blur',
        }],
        property: [{
          required: true,
          message: '请选择企业名称',
          trigger: 'blur',
        }],
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
