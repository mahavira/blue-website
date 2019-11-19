<template>
  <section class="mod sidebar">
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
      <div class="item logo"></div>
      <div class="item menubar" @click="toggleMenu">
        <svg-close :state="opened"/>
      </div>
      <div class="item logo2"></div>
      <div class="item state" @click="openDialog('login')"></div>
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
@import '../styles/mixin';
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
  padding: 20px 10px;
  box-sizing: border-box;
}
.item{
  width: 80px;
  height: 80px;
  &.logo{
    height: 111px;
    background: url(../assets/logo.png) center no-repeat;
  }
  &.logo2{
    height: 40px;
    width: 40px;
    background: url(../assets/logo2.png) center no-repeat;
    background-size: contain;
    display: none;
  }
  &.state{
    height: 60px;
    width: 60px;
    background: url(../assets/icon/icon_head.png) center no-repeat;
    &.active{
      background-image: url(../assets/icon/icon_head_land.png);
    }
  }
}
.menus{
  width: 540px;
  background: rgba($color: #FFF, $alpha: 1);
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
}
.menu-item{
  font-size: 18px;
  font-family: PingFang-SC-Heavy,PingFang-SC;
  font-weight: 800;
  color:rgba(0,0,0,1);
  line-height: 64px;
  position: relative;
  margin-bottom: 50px;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  span{
    position: relative;
  }
  &.active,
  &:hover{
    $colors: (#6FCCCE, #F7E700, #F54B00, #FDB2D3, #220EDB);
    @each $color in $colors {
      $index: index($colors, $color);
      &:nth-of-type(#{$index}):before {
        background: $color;
      }
    }
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
@include respond-to(tablet) {
  .sidebar{
    right: 0;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
  }
  .dialog{
    left: 0;
    top: 60px;
  }
  .items{
    flex-direction: row;
    height: auto;
    padding: 10px;
    .item.logo{
      display: none;
    }
    .item.logo2{
      display: block;
    }
    .item.menubar{
      height: 40px;
      width: 40px;
      white-space: 40px;
      svg{
        width: 40px;
        height: 40px;
      }
    }
    .item.state{
      width: 40px;
      height: 40px;
      background-size: 120%;
    }
  }
}
@include respond-to(mobile) {
  .menus{
    width: 90vw;
    padding-left: 80px;
    .title{
      margin-bottom: 30px;
    }
    .menu-item{
      margin-bottom: 20px;
    }
  }
}
</style>
