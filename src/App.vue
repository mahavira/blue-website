<template>
  <div id="app">
    <mod-sidebar ref="sidebar"/>
    <div class="container" @click="closeMenu">
      <mod-home/>
      <mod-product-service-value ref="mod[0]"/>
      <mod-product-introduce ref="mod[1]"/>
      <mod-product-module/>
      <mod-product-feature ref="mod[2]"/>
      <mod-service-guarantee ref="mod[3]"/>
      <mod-about ref="mod[4]"/>
      <mod-footer/>
    </div>
    <transition name="fade">
      <div class="loader-wrp" v-if="loading">
        <div class="box">
            <div class="loader"></div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import {
  scrollTo,
  preloadImages,
} from './util';

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
      loading: true,
    };
  },
  computed: {
    mods() {
      const mods = [];
      for (let i = 0; i < 5; i += 1) mods.push(this.$refs[`mod[${i}]`]);
      return mods;
    },
  },
  async mounted() {
    preloadImages([
      (await import('./assets/bg/home_1920.png')).default,
      (await import('./assets/bg/bg_zs02.png')).default,
    ]).finally(() => {
      this.loading = false;
    });
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
      scrollTo(offsetTop);
    },
    login() {
      this.$refs.sidebar.openLogin();
    },
  },
};
</script>
