<template>
  <div class="mod-dialog">
    <div class="content">
      <p>
        大连有声优势发展有限公司
      </p>
      <p>
        金融行业 I 50-100人
      </p>
      <div class="line"></div>
      <div class="item">
        雄黎明
      </div>
      <div class="item">
        电话：18611852267
      </div>
    </div>
    <div class="handler">
      <a href="javascript:;"><img src="../assets/icon/icon_edit.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/icon/icon_sign.png" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Userinfo',
};
</script>

<style lang="scss" scoped>
.mod{
  background-image: url(../assets/bg/home_1920.png);
}
.content{
  color: #FFF;
  width: 535px;
  font-size:20px;
  font-family:PingFang-SC-Heavy,PingFang-SC;
  font-weight:800;
  color:#FFF;
  line-height:28px;
  letter-spacing:4px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  p{
    padding: 0;
    margin: 12px 0;
  }
}
.line{
  height: 1px;
  background:rgba($color: #FFF, $alpha: 0.2);
  margin: 40px 0;
}
.item{
  font-size: 14px;
  font-family: PingFangSC-Regular,PingFang SC;
  font-weight: 400;
  line-height: 20px;
  padding: 15px 0;
}
.handler{
  position: absolute;
  bottom: 100px;
  right: 35px;
  a{
    margin: 0 45px;
  }
}
</style>
