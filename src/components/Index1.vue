<template>
  <el-container class="app">
    <el-header height="40px" class="nav-top">
      <el-row>
        <el-col :span="3" class="goodskind">商 品 分 类</el-col>
        <el-col :span="2" :offset="1">
          <a href=""><img src="@/assets/首页/shop.png" /></a>
        </el-col>
        <el-col :span="2">
          <a href=""><img src="@/assets/首页/guoji.png" /></a>
        </el-col>
        <el-col :span="1.5">
          <el-link :underline="false">天猫会员</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">电器城</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">喵鲜生</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">医药管</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">营业厅</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">魅力惠</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">飞猪旅行</el-link>
        </el-col>
        <el-col :span="1.5" class="nav">
          <el-link :underline="false">苏宁易购</el-link>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="one">
      <el-aside width="346px">
        <div class="kinds">
          <ul>
            <li>
              <i class="el-icon-mobile-phone"></i><a href="">手机</a> /
              <a href="">数码</a> / <a href="">电脑办公</a>
            </li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">热门手机<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <router-link to="/details/hw">华为</router-link>
                    <router-link to="/details/xm">小米</router-link>
                    <router-link to="/details/iphone">iphone</router-link>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">游戏组件<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <router-link to="/details/xsq">显示器</router-link>
                    <router-link to="/details/jxjp">机械键盘</router-link>
                    <router-link to="/details/sb">游戏手柄</router-link>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">硬件存储<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <router-link to="/details/cpu">CPU</router-link>
                    <router-link to="/details/xk">显卡</router-link>
                </el-col>
              </el-row>
            </div>
            <li>
              <i class="el-icon-refrigerator"></i><a href="">大家电</a>/<a
                href=""
                >生活电器</a
              >
            </li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">平板电视<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">4K超高清</a>
                    <a href="">超级大屏</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">中式厨房<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">电饭煲</a>
                    <a href="">电磁炉</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">西式厨房<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">烤箱</a>
                    <a href="">咖啡机</a>
                </el-col>
              </el-row>
            </div>
            <li><i class="el-icon-cherry"></i><a href="">生鲜水果</a></li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">新鲜水果<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">释迦</a>
                    <a href="">莲雾</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">精选干货<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">瑶柱</a>
                    <a href="">花胶</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">新鲜水产<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">三文鱼</a>
                    <a href="">海参</a>
                    <a href="">大闸蟹</a>
                    <a href="">帝王蟹</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">冰淇淋<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">哈根达斯</a>
                    <a href="">movenpick莫凡彼</a>
                </el-col>
              </el-row>
            </div>
            <li>
              <i class="el-icon-s-custom"></i><a href="">男装</a> /
              <a href="">运动户外</a>
            </li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">当季流行<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">当季新品</a>
                    <a href="">羽绒服</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">游戏外套<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">夹克</a>
                    <a href="">西服套装</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">运动鞋<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">跑步鞋</a>
                    <a href="">潮鞋</a>
                </el-col>
              </el-row>
            </div>
            <li>
              <i class="el-icon-watch"></i><a href="">腕表</a> /
              <a href="">眼镜</a> / <a href="">珠宝饰品</a>
            </li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">腕表<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">瑞士名表</a>
                    <a href="">日韩港表</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">眼镜<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">太阳镜</a>
                    <a href="">眼镜框</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">潮流饰品<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">明星同款</a>
                    <a href="">项链</a>
                </el-col>
              </el-row>
            </div>
            <li><i class="el-icon-s-grid"></i><a href="">家具建材</a></li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">家装主材<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">墙纸</a>
                    <a href="">地板</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">厨房卫浴<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">智能马桶盖</a>
                    <a href="">浴霸</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">灯饰照明<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">吸顶灯</a>
                    <a href="">水晶吊灯</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">卧室家具<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">床</a>
                    <a href="">衣柜</a>
                    <a href="">床垫</a>
                </el-col>
              </el-row>
            </div>
            <li>
              <i class="el-icon-food"></i><a href="">零食</a> /
              <a href="">茶酒</a>
            </li>
            <div class="pannel-con">
              <el-row>
                <el-col :span="4" :offset="0">休闲零食<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">坚果</a>
                    <a href="">膨化零食</a>
                    <a href="">巧克力</a>
                    <a href="">零食</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">茶叶<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">西湖龙井</a>
                    <a href="">玫瑰花茶</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" :offset="0">酒类<i class="el-icon-arrow-right"></i></el-col>
                <el-col :span="16" :offset="0">
                    <a href="">红酒</a>
                    <a href="">啤酒</a>
                </el-col>
              </el-row>
            </div>
          </ul>
        </div>
      </el-aside>
      <el-main>
        <el-row class="lbt">
          <el-col :span="20" :offset="0">
            <div class="block">
              <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="(img, index) in this.lbt" :key="index">
                  <router-link :to="'/details/'+img.name"><img v-bind:src="img.url" /></router-link>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      lbt: [
        {
          url: require('#/手机数码电脑办公/hw/hw10.jpg'),
          name: 'hw'
        },
        {
          url: require('#/手机数码电脑办公/xm/xm10.jpg'),
          name: 'xm'
        },
        {
          url: require('#/手机数码电脑办公/iphone/iphone10.jpg'),
          name: 'iphone'
        },
        {
          url: require('#/手机数码电脑办公/xsq/xsq10.jpg'),
          name: 'xsq'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
a:link,
a:visited {
  color: #fff;
}
a:hover {
  color: #ff0036;
}
li {
  list-style: none;
}
.app {
  margin-top: -24px;
}
.nav-top {
  padding: 0;
}
.nav-top .el-row {
  border-bottom: 2px solid #ff0036;
}
.nav-top .el-row .el-col {
  height: 35px;
}
.nav{
  margin-left: 20px;
}
.goodskind {
  background-color: #c60a0a;
  text-align: center;
  font-size: 15px;
  color: #f0f0f0;
  line-height: 40px;
  width: 199px;
  font-weight: 600;
  margin-left: 147px;
}
a img {
  width: 100px;
  height: 35px;
}
.el-link {
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
}
.el-link.el-link--default:hover {
  color: #ff0036;
}
.one {
  margin-top: -3px;
  background-color: #D7133B;
}
.kinds {
  margin-left: 147px;
}
.kinds ul {
  background-color: #2b2b2b;
  width: 199px;
  height: 440px;
  padding-top: 60px;
}
.kinds ul li {
  height: 55px;
  line-height: 55px;
  color: #fff;
  font-size: 16px;
}
.kinds i {
  color: #999;
  padding: 0 5px 0 10px;
}
.kinds ul li:hover {
  background-color: #fff;
  color: #ff0036;
}
.kinds ul li:hover a {
  color: #ff0036;
}
.kinds ul li:hover i {
  color: #ff0036;
}
.lbt div {
  height: 499px;
}
.lbt img {
  width: 100%;
  height: 100%;
}
.el-carousel__item{
  background-color: #E8E8E8;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-main {
  padding: 1px 0 0 0;
}
.el-carousel__button {
  height: 5px;
}
.pannel-con {
  position: absolute;
  height: 500px;
  top: 210px;
  left: 346px;
  width: 800px;
  background-color: #fff;
  z-index: 99;
  display: none;
}
.pannel-con a{
    color: #666;
    margin-right: 40px;
}
.pannel-con a:hover{
    color: #ff0036;
}
.kinds ul li:hover + .pannel-con {
  background-color: #fff;
  display: block;
}
.pannel-con:hover {
  display: block;
}
.pannel-con .el-row:first-child{
    margin-top: 50px;
}
.pannel-con .el-row{
    padding: 25px 0 25px 50px;
}
.pannel-con .el-row .el-col:nth-child(1),i{
    font-size: 14px;
    font-weight: 700;
}
.pannel-con .el-row .el-col:nth-child(2){
    padding-left: 10px;
    padding-bottom: 20px;
    border-bottom: 1px dashed rgba(0,0,0,.2);
}
</style>

<style>
.el-carousel__arrow {
  top: 250px;
}
.nav-top .el-row{
  margin-right: 0;
  margin-left: 0;
}
</style>
