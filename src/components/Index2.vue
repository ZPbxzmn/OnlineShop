<template>
  <el-container class="app">
    <el-header height="380px">
      <el-row :gutter="20">
        <el-col :span="4" :offset="2">
          <el-card :body-style="{ padding: '0px' }">
            <div class="card-head">
              <span class="cn">品牌闪购</span>
              <span class="en">BRAND SALE</span>
              <a href="" class="more1"
                ><img src="@/assets/首页/more.png" alt=""
              /></a>
            </div>
            <a href="">
              <img src="@/assets/首页/hd1.jpg" id="hd1" />
            </a>
          </el-card>
        </el-col>
        <el-col :span="8" :offset="0">
          <el-card :body-style="{ padding: '0px' }">
            <div class="card-head">
              <span class="cn">聚名品</span>
              <span class="en">LUXURY CHANNEL</span>
              <a href="" class="more2"><div>更多</div></a>
            </div>
            <a href="">
              <img src="@/assets/首页/hd2.jpg" id="hd2" />
            </a>
          </el-card>
        </el-col>
        <el-col :span="8" :offset="0">
          <el-card :body-style="{ padding: '0px' }">
            <div class="card-head">
              <span class="cn">品牌活动</span>
              <span class="en">BRAND ACTIVITY</span>
              <a href="" class="more2"><div>更多</div></a>
            </div>
            <a href="">
              <img src="@/assets/首页/hd3.jpg" id="hd2" />
            </a>
          </el-card>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="floor-line-con jjsh">
      <el-header height="40px">
        <el-row>
          <el-col :span="2" :offset="2" class="floor-title"
            ><i class="color-mark"></i>居家生活</el-col
          >
          <el-col :span="3" :offset="0" class="floor-sub-name"
            >GROCERY &amp; HEALTH</el-col
          >
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="235px">
            <a href=""
            ><img src="@/assets/首页/jjsh0.png" class="aside-img" />
            <div class="banner-detail">
                <div class="left-title-wrap">
                <span class="left-title">美家</span>
                </div>
                <div class="right-title-wrap">
                <div class="right-title-absolute">
                    <span class="right-title">家饰尚品</span>
                    <span class="right-title">清新居家</span>
                </div>
                </div>
                <div class="detail-wrap">
                <img src="@/assets/首页/more2.png" class="floor-arrow-big" />
                </div>
            </div>
            </a>
        </el-aside>
        <el-main class="middle-column-con">
            <el-row>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">进口零食一扫光</div>
                        <div class="sub-title">次日就送达</div>
                        <img src="@/assets/首页/jjsh1.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">来一场国宴</div>
                        <div class="sub-title">国酒名牌荟萃</div>
                        <img src="@/assets/首页/jjsh2.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">女孩爱毛绒玩具</div>
                        <div class="sub-title">俘获女神的心</div>
                        <img src="@/assets/首页/jjsh3.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">体内修复专家</div>
                        <div class="sub-title">排毒方能养颜</div>
                        <img src="@/assets/首页/jjsh4.jpg">
                    </el-col>
                </a>
            </el-row>
            <el-row>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">一线大牌直销</div>
                        <div class="sub-title">进口放心药</div>
                        <img src="@/assets/首页/jjsh5.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">一把乐器</div>
                        <div class="sub-title">一本教材</div>
                        <img src="@/assets/首页/jjsh6.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">厨房空间专家</div>
                        <div class="sub-title">简约厨房套件</div>
                        <img src="@/assets/首页/jjsh7.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">给TA惊喜</div>
                        <div class="sub-title">最好的送花时节</div>
                        <img src="@/assets/首页/jjsh8.jpg">
                    </el-col>
                </a>
            </el-row>
        </el-main>
      </el-container>
    </el-container>
    <el-container class="floor-line-con cdkw">
      <el-header height="40px">
        <el-row>
          <el-col :span="2" :offset="2" class="floor-title"
            ><i class="color-mark"></i>潮电酷玩</el-col
          >
          <el-col :span="3" :offset="0" class="floor-sub-name"
            >ELECTRONICS</el-col
          >
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="235px">
            <a href=""
            ><img src="@/assets/首页/cdkw0.png" class="aside-img" />
            <div class="banner-detail">
                <div class="left-title-wrap">
                <span class="left-title">明星</span>
                <span class="left-title">同款</span>
                </div>
                <div class="right-title-wrap">
                <div class="right-title-absolute">
                    <span class="right-title">畅享音乐</span>
                    <span class="right-title">耳机发烧友</span>
                </div>
                </div>
                <div class="detail-wrap">
                <img src="@/assets/首页/more2.png" class="floor-arrow-big" />
                </div>
            </div>
            </a>
        </el-aside>
        <el-main class="middle-column-con">
            <el-row>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">拒绝手机脸盲症</div>
                        <div class="sub-title">个性手机鉴赏</div>
                        <img src="@/assets/首页/cdkw1.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">无精彩不记录</div>
                        <div class="sub-title">户外必备摄像机</div>
                        <img src="@/assets/首页/cdkw2.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">手机换一种心情</div>
                        <div class="sub-title">七彩绚丽彩壳</div>
                        <img src="@/assets/首页/cdkw3.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">科技新潮</div>
                        <div class="sub-title">高逼格电器</div>
                        <img src="@/assets/首页/cdkw4.jpg">
                    </el-col>
                </a>
            </el-row>
            <el-row>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">最了解你的需要</div>
                        <div class="sub-title">云智能减肥称</div>
                        <img src="@/assets/首页/cdkw5.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">发型不求人</div>
                        <div class="sub-title">给自己一头创意</div>
                        <img src="@/assets/首页/cdkw6.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">不只是苹果</div>
                        <div class="sub-title">一体式主机大全</div>
                        <img src="@/assets/首页/cdkw7.jpg">
                    </el-col>
                </a>
                <a href="" class="grid one-grid">
                    <el-col class="floor-item-content-wrap">
                        <div class="title">4K窄边3D</div>
                        <div class="sub-title">就这3点要求</div>
                        <img src="@/assets/首页/cdkw8.jpg">
                    </el-col>
                </a>
            </el-row>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style scoped>
.app {
  padding-top: 50px;
  padding-bottom: 10px;
  background: url(../assets/首页/end.png) center 1870px no-repeat;
  background-color: #f5f5f5;
  border-bottom: 1px solid #D1D7DC;
}
.el-card {
  box-shadow: none;
  border: none;
  background-color: #fff;
}
.card-head {
  border-bottom: 1px solid #eee;
}
.cn {
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  line-height: 54px;
  height: 54px;
  margin-left: 10px;
}
.en {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-left: 10px;
  line-height: 24px;
  height: 44px;
}
.more1 {
  display: block;
  float: right;
  font-size: 16px;
  color: #666;
  text-decoration: none;
}
.more1 img {
  margin: 20px 10px 0 0;
  padding-left: 10px;
  width: 17px;
  height: 17px;
}
.more2 {
  display: block;
  float: right;
  font-size: 16px;
  color: #666;
  text-decoration: none;
  width: 80px;
  height: 40px;
  line-height: 53px;
  background: url(../assets/首页/more.png) 47px 19px no-repeat;
  background-size: 17px 17px;
}
#hd1 {
  width: 234px;
  height: 316px;
}
#hd2 {
  width: 485px;
  height: 316px;
}
.color-mark {
  display: inline-block;
  background-color: #333;
  width: 5px;
  height: 20px;
  vertical-align: middle;
}
.floor-title {
  font-size: 18px;
  vertical-align: middle;
}
.floor-title i {
  margin-right: 15px;
}
.floor-sub-name {
  font-size: 14px;
  line-height: 28px;
  height: 18px;
}
.aside-img {
  width: 100%;
  height: 618px;
}
.floor-line-con .el-aside {
  margin-left: 143px;
}
.banner-detail {
  position: relative;
  vertical-align: middle;
  bottom: 191px;
  width: 218px;
  height: 64px;
}
.left-title-wrap {
  background: rgba(0, 0, 0, 0.9);
  width: 70px;
  height: 64px;
  color: #fff;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.left-title {
  display: inline-block;
  vertical-align: middle;
  line-height: 24px;
  font-size: 18px;
  width: 36px;
}
.right-title-wrap {
  left: 70px;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 128px;
  height: 64px;
  color: #fff;
  vertical-align: middle;
}
.right-title-absolute {
  margin-top: 8px;
  margin-left: 14px;
}
.right-title {
  display: block;
  line-height: 24px;
  font-size: 18px;
}
.detail-wrap {
  top: 61px;
  right: 5px;
  width: 236px;
  height: 60px;
  position: relative;
}
.floor-arrow-big {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
}
.middle-column-con{
    padding: 0;
}
.floor-item-content-wrap{
    width: 234px;
    height: 300px;
    border: 1px solid #fff;
}
.title{
    position: absolute;
    top: 20px;
    left: 25px;
    width: 220px;
    font-size: 18px;
    z-index: 10;
    line-height: 24px;
    height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.sub-title{
    position: absolute;
    top: 49px;
    left: 25px;
    width: 220px;
    font-size: 14px;
    z-index: 10;
    line-height: 18px;
    height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.floor-item-content-wrap img{
    width: 170px;
    height: 170px;
    margin: 90px 33px 42px 32px;
}
.grid{
    float: left;
    display: block;
    border-bottom: 15px solid #f5f5f5;
    position: relative;
    background-color: #fff;
}
.one-grid{
    width: 235px;
    height: 301px;
    margin-left: 13px;
}
.grid a,a:visited{
    color: #000;
}
.jjsh{
    margin-top: 30px;
}
.jjsh .sub-title{
    color: #00B262;
}
.cdkw .sub-title{
    color: #0AA6E8;
}
</style>
