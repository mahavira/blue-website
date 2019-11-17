<template>
  <section class="mod">
    <div class="footer">
      <div class="footer-img">
        <img src="../assets/logo02.png" alt="">
      </div>
      <div class="footer-body">
        <div class="item">
          <div class="item-title">
            关于我们
          </div>
          <div class="item-body">
            <p><a href="javascript:;">公司介绍</a></p>
            <p><a href="javascript:;">蓝图动态</a></p>
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            帮助
          </div>
          <div class="item-body">
            <p><a href="javascript:;">安全保障</a></p>
            <p><a href="javascript:;">帮助中心</a></p>
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            联系方式
          </div>
          <div class="item-body">
            <p>电话 4000151009</p>
            <p>地址 辽宁省大连高新技术产业园区高能街125号(地上11层3)02室98</p>
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
  background: #0D0466;
}
.footer{
  display: flex;
}
.footer-img{
  padding: 60px 0;
  margin: 0 5% 0 10%;
}
.footer-body{
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
}
.item{
  display: flex;
  margin-right: 50px;
}
.item-title{
  font-size:18px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:#B6B5D0;
  line-height:30px;
  letter-spacing:2px;
  padding: 10px 13px;
  width: 110px;
  box-sizing: border-box;
}
.item-body{
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:#9492BA;
  line-height:26px;
  letter-spacing:2px;
  padding: 7px 13px 10px;
  a{
    text-decoration: none;
    color: #9492BA;
  }
  p{
    padding: 5px 0;
    margin: 0;
  }
}
</style>
