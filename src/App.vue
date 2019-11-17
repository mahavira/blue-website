<template>
  <div id="app">
    <mod-sidebar ref="sidebar"/>
    <div class="container" @click="closeMenu">
      <mod-home/>
      <mod-product-service-value ref="mod[0]"/>
      <mod-product-intro ref="mod[1]"/>
      <mod-product-module/>
      <mod-product-feature ref="mod[2]"/>
      <mod-product-service ref="mod[3]"/>
      <mod-about ref="mod[4]"/>
      <mod-footer/>
      <!-- <mod-login/>
      <mod-register/>
      <mod-userinfo/> -->
    </div>
  </div>
</template>
<script>
import Velocity from 'velocity-animate';

const compMods = {};
const requireContext = require.context('./mods/', false, /\.vue$/);
requireContext.keys().forEach((key) => {
  const context = requireContext(key);
  const name = key.replace(/^\.\//, '').replace(/\.\w+$/, '');
  compMods[`Mod${name}`] = context.default || context;
});

export default {
  name: 'app',
  components: {
    ...compMods,
  },
  data() {
    return {
      scrollTop: 0,
      clientHeight: 0,
      clientWidth: 0,
      userinfo: null,
    };
  },
  computed: {
    mods() {
      const mods = [];
      for (let i = 0; i < 5; i += 1) mods.push(this.$refs[`mod[${i}]`]);
      return mods;
    },
  },
  mounted() {
    document.addEventListener('scroll', this.scroll);
    window.addEventListener('resize', this.resize);
    this.resize();
  },
  methods: {
    resize() {
      this.clientHeight = window.innerHeight;
      this.clientWidth = window.innerWidth;
    },
    scroll() {
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
      this.scrollTop = scrollTop;
      this.$refs.sidebar.opened = false;
      this.triggerMenuTouch();
    },
    triggerMenuTouch() {
      let index = -1;
      this.mods.forEach((mod, i) => {
        const { offsetTop: top } = mod.$el;
        if (this.scrollTop > top - this.clientHeight + 200) index = i;
      });
      this.$refs.sidebar.currentMenuIndex = index;
    },
    closeMenu() {
      this.$refs.sidebar.opened = false;
    },
    scrollToMod(index) {
      const { offsetTop } = this.$refs[`mod[${index}]`].$el;
      Velocity(document.body, 'scroll', {
        offset: offsetTop,
        duration: 1000,
        easing: 'easeIn',
        mobileHA: false,
      });
    },
    login() {
      this.$refs.sidebar.openDialog('login');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  margin-left: 100px;
}
</style>
