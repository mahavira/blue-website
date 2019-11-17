<template>
  <section class="sidebar">
    <div class="dialog">
      <div class="menus" :class="{opened: opened}">
        <div class="title">MENU</div>
        <div class="menu-list">
          <div class="menu-item" v-for="(item, index) in menus" :key="index"
            :class="{active: currentMenuIndex === index}"
            @click="toMod(index)"><span>{{item}}</span></div>
        </div>
      </div>
      <transition name="transform-x">
        <mod-login v-if="dialog==='login'" @openDialog="openDialog"/>
        <mod-register v-else-if="dialog==='register'" @openDialog="openDialog"/>
        <mod-userinfo v-else-if="dialog==='userinfo'"/>
      </transition>
    </div>
    <div class="items">
      <div class="item logo">
        <div class="inner"></div>
      </div>
      <div class="item menubar" @click="toggleMenu">
        <div class="inner">
          <svg-close :state="opened"/>
        </div>
      </div>
      <div class="item state" @click="openDialog('login')">
        <div class="inner"></div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgClose from '@/components/close/Index.vue';
import ModLogin from './Login.vue';
import ModRegister from './Register.vue';
import ModUserinfo from './Userinfo.vue';

export default {
  name: 'sidebar',
  components: {
    SvgClose,
    ModLogin,
    ModRegister,
    ModUserinfo,
  },
  data() {
    return {
      opened: false,
      currentMenuIndex: -1,
      menus: [
        '产品服务与价值',
        '产品介绍',
        '产品的优势及特色',
        '服务与保障',
        '关于我们',
      ],
      dialog: '',
    };
  },
  watch: {
    dialog(val) {
      if (val) this.opened = false;
    },
    opened(val) {
      if (val) this.dialog = '';
    },
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
    toMod(index) {
      this.$parent.scrollToMod(index);
      this.currentMenuIndex = index;
      this.opened = !this.opened;
    },
    openDialog(e = 'login') {
      if (this.dialog === e) {
        this.dialog = '';
        return;
      }
      if (this.$parent.userinfo) {
        this.dialog = 'userinfo';
      } else {
        this.dialog = e;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar{
  height: 100vh;
  width: 100px;
  position: fixed;
  left: 0;
  top: 0;
  background: #FFF;
  z-index: 1;
}
.dialog{
  position: absolute;
  left: 100px;
}
.items{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  z-index: 1;
  position: relative;
  background: #FFF;
}
.item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  .inner{
    background: #eee;
    height: 100px;
    width: 80px;
  }
  &.logo{
    align-items: center;
    .inner{
      height: 62px;
      height: 111px;
      margin-top: 26px;
      background: url(../assets/logo.png) center no-repeat;
    }
  }
  &.menubar{
    justify-content: center;
    align-items: center;
    .inner{
      background: #fff;
      height: 80px;
    }
  }
  &.state{
    justify-content: flex-end;
    .inner{
      height: 60px;
      width: 60px;
      margin-bottom: 20px;
      border-radius: 50%;
    }
  }
}
.menus{
  width: 540px;
  background: rgba($color: #FFF, $alpha: 0.96);
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  padding-left: 150px;
  box-sizing: border-box;
  transition: 0.3s ease-in;
  transform: translateX(-100%);
  &.opened{
    transform: translateX(0);
  }
  .title{
    width:103px;
    height:48px;
    font-size:34px;
    font-family:PingFang-SC-Heavy,PingFang-SC;
    font-weight:800;
    color:rgba(0,0,0,1);
    line-height:48px;
    margin-bottom: 100px;
  }
  .menu-item{
    font-size: 18px;
    font-family: PingFang-SC-Heavy,PingFang-SC;
    font-weight: 800;
    color:rgba(0,0,0,1);
    line-height: 64px;
    position: relative;
    padding: 0;
    margin-bottom: 50px;
    cursor: pointer;
    span{
      position: relative;
    }
    &.active,&:hover{
      &:nth-of-type(1):before{ background: #6FCCCE;}
      &:nth-of-type(2):before{ background: #F7E700;}
      &:nth-of-type(3):before{ background: #F54B00;}
      &:nth-of-type(4):before{ background: #FDB2D3;}
      &:nth-of-type(5):before{ background: #220EDB;}
    }
    &::before{
      content: '';
      position: absolute;
      left: -27px;
      top: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.8s;
      background: #FFF;
      transform: scale(0.8);
    }
    &:hover:before,&.active:before{
      transform: scale(1);
      opacity: 0.5;
    }
  }
}
</style>
