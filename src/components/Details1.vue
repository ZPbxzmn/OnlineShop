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
    <el-container>
      <el-header height="40px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$store.state.activeGoods.primaryClassification}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$store.state.activeGoods.secondaryClassification}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-aside width="590px">
          <div class="magnifier">
            <pic-zoom :url="this.$store.state.activeGoods.preview[this.selectedLbt]" :scale="3"></pic-zoom>
          </div>
          <div>
              <ul class="tb-thumb">
                <li v-for="(img, index) in this.$store.state.activeGoods.preview" :key="index" @mouseover="getSeleted(index)">
                  <a href="#">
                    <img :src="img">
                  </a>
                </li>
              </ul>
          </div>
        </el-aside>
        <el-main class="tb-wrap">
          <el-row class="tb-detail-hd">
            <el-col :span="24" :offset="0">
              <h1>{{this.$store.state.activeGoods.detailsName}}</h1>
            </el-col>
          </el-row>
          <el-row class="tm-fcs-panel">
            <el-col :span="3" :offset="0">
              <span class="tb-metatit">价格</span>
            </el-col>
            <el-col :span="12" :offset="0">
              <span class="tm-yen">¥</span>
              <span class="tm-price">{{this.$store.state.activeGoods.price}}</span>
            </el-col>
          </el-row>
          <el-row class="yunfei">
            <el-col :span="3" :offset="0">
              <span class="tb-metatit">运费 </span>
            </el-col>
            <el-col :span="21" :offset="0">
              <span>{{this.$store.state.activeGoods.address}}</span>
              至
              <el-select v-model="value1" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value2" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value3" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>运费:0.00</span>
            </el-col>
          </el-row>
          <el-row class="tm-ind-panel">
            <el-col :span="8" :offset="0">
              <span class="tm-label">月销量</span>
              <span class="tm-count">{{this.$store.state.activeGoods.monthlySales}}</span>
            </el-col>
            <el-col :span="8" :offset="0">
              <span class="tm-label">累计评价</span>
              <span class="tm-count">{{this.$store.state.activeGoods.commentsNum}}</span>
            </el-col>
            <el-col :span="8" :offset="0">
              <a href="#">
                <span class="tm-label">送天猫积分</span>
                <span class="tm-count">{{this.$store.state.activeGoods.points}}</span>
              </a>
            </el-col>
          </el-row>
          <el-row v-for="(item1, index1) in this.$store.state.activeGoods.params" :key="index1">
              <el-col :span="4" :offset="0" class="tb-metatit">{{item1.name}}</el-col>
              <el-col :span="20" :offset="0">
                  <ul class="tb-txt">
                        <li v-for="(item2, index2) in item1.param" :key="index2">
                            <div :class="{'active-param':item1.currentNumber===index2}" @click="currentClass(index1, index2)">
                                <span>{{item2}}</span>
                            </div>
                        </li>
                  </ul>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="4" :offset="0" class="tb-metatit">数量</el-col>
              <el-col :span="20" :offset="0">
                    <el-input-number v-model="newGoods.num"  :min="1" :max="10" label="描述文字" size="small" class="inputNumberBorder"></el-input-number>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="8" :offset="3">
                  <div class="tb-btn-buy">
                      <a @click="buyNow">立即购买</a>
                  </div>
              </el-col>
              <el-col :span="8" :offset="0" class="shop_cart">
                  <div class="tb-btn-basket">
                      <a  @click="addShopCart"><i class="el-icon-shopping-cart-2"></i> 加入购物车</a>
                      <transition name="shop_cart" >
                          <img class="add_img" v-if="addShow" :src="this.$store.state.activeGoods.goodsImg" alt="">
                      </transition>
                  </div>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="4" :offset="0" class="tb-metatit">服务承诺</el-col>
              <el-col :span="20" :offset="0">
                  <ul class="tb-serPromise">
                        <li >
                            <a href="">全国联保</a>
                        </li>
                        <li>
                            <a href="">正品保证</a>
                        </li>
                        <li>
                            <a href="">免举证退换货</a>
                        </li>
                        <li>
                            <a href="">极速退款</a>
                        </li>
                        <li>
                            <a href="">七天无理由退换</a>
                        </li>
                  </ul>
              </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
  components: {
    PicZoom
  },
  data () {
    return {
      addShow: false,
      selectedLbt: 0,
      newGoods: {
        img: this.$store.state.activeGoods.goodsImg,
        name: this.$store.state.activeGoods.name,
        params: this.$store.state.activeGoods.params,
        price: this.$store.state.activeGoods.price,
        num: 1
      },
      options1: [
        {
          value: '选项1',
          label: '江苏省'
        },
        {
          value: '选项2',
          label: '浙江省'
        },
        {
          value: '选项3',
          label: '上海市'
        },
        {
          value: '选项4',
          label: '四川省'
        },
        {
          value: '选项5',
          label: '湖南省'
        }
      ],
      value1: '选项1',
      options2: [
        {
          value: '选项1',
          label: '苏州市'
        },
        {
          value: '选项2',
          label: '扬州市'
        },
        {
          value: '选项3',
          label: '南京市'
        },
        {
          value: '选项4',
          label: '镇江市'
        },
        {
          value: '选项5',
          label: '泰州市'
        }
      ],
      value2: '选项1',
      options3: [
        {
          value: '选项1',
          label: '常熟市'
        },
        {
          value: '选项2',
          label: '姑苏区'
        },
        {
          value: '选项3',
          label: '吴中区'
        },
        {
          value: '选项4',
          label: '相城区'
        },
        {
          value: '选项5',
          label: '昆山市'
        }
      ],
      value3: '选项1'
    }
  },
  methods: {
    getSeleted (index) {
      this.selectedLbt = index
    },
    addShopCart () {
      if (Object.keys(this.$store.state.activeUser).length !== 0) {
        this.addShow = true
        setTimeout(() => {
          this.addShow = false
        }, 1200)
        this.$store.dispatch('addGoods', this.newGoods)
      } else {
        this.$router.push('/login')
      }
    },
    currentClass (index1, index2) {
      this.$store.state.activeGoods.params[index1].currentNumber = index2
    },
    buyNow () {
      if (Object.keys(this.$store.state.activeUser).length !== 0) {
        this.$store.dispatch('buyNow', this.newGoods)
        this.$router.push('/pay')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.shop_cart-enter-active {
    transition: all 1.2s ease-out;
}
.shop_cart-enter {
    opacity: 0;
    transform: scale(.5);
    transform: translate(-300px, 650px);
}
.shop_cart .add_img {
    width: 100px;
    position: fixed;
    right: 204px;
    top: 0px;
}
.shop_cart .cart{
    width: 300px;
    display: inline-block;
}
.shop_cart .cart img {
    width: 100%;
}
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
.nav {
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
.el-breadcrumb {
  margin: 10px 0 0 143px;
}
.magnifier {
  width: 420px;
  height: 420px;
  border: 1px solid rgba(0,0,0,.05);
  margin-left: 150px;
}
.tb-thumb{
    text-align: center;
    margin-left: -16px;
    white-space: nowrap;
    position: relative;
    transition: left .2s cubic-bezier(0,0,.25,1);
    font-size: 0;
}
li, ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.el-aside ul{
  padding-left: 90px;
}
.tb-thumb li {
    display: inline-block;
    margin: 0 0 0 16px;
    padding-top: 22px;
}
.tb-thumb li:hover a{
  outline: 1px solid #000;
}
.tb-thumb a {
    float: left;
    position: relative;
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin-bottom: 1px;
}
.tb-thumb img {
    position: relative;
    width: 60px;
    height: 60px;
}
.tb-detail-hd h1{
    padding-bottom: .2em;
    line-height: 1;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    font-family: "microsoft yahei";
}
.tm-fcs-panel{
    background-color: #e9e9e9;
    background-repeat: no-repeat;
    position: relative;
    left: 0;
    z-index: 10;
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-right: 20px;
}
.tb-metatit{
    color: #999;
    font-size: 12px;
    text-align: left;
    float: left;
    width: 69px;
    margin: 11px 0 0 8px;
}
.tm-yen{
    color: #FF0036;
    font-size: 18px;
    font-style: normal;
}
.tm-price{
    color: #FF0036;
    font-size: 24px;
    font-weight: bolder;
}
.tb-wrap{
    padding: 0;
    margin-left: 50px;
}
.tb-wrap .el-row{
    margin-top: 10px;
    width: 600px;
}
.el-select{
    width: 100px;
}
.yunfei{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";;
}
.tm-ind-panel{
    border: 1px dotted #c9c9c9;
    border-width: 1px 0;
}
.tm-ind-panel .el-col{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    text-align: center;
}
.tm-label{
    line-height: 40px;
    height: 40px;
    color: #999;
}
.tm-count{
    line-height: 40px;
    height: 40px;
    color: #FF0036;
    font-weight: 700;
    margin-left: 3px;
}
.tm-ind-panel a .tm-count{
    color: #280;
}
.tb-txt li{
    float: left;
    position: relative;
    margin: 0 4px 4px 0;
    line-height: 20px;
    vertical-align: middle;
    padding: 1px;
}
.tb-txt div{
    float: left;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 8px 9px;
    text-align: center;
    border: 1px solid #b8b7bd;
    color: #000;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
.inputNumberBorder{
    border: 1px solid #DCDFE6;
    margin-top: 3px;
}
.tb-btn-buy a{
    margin-right: 0;
    float: left;
    overflow: hidden;
    position: relative;
    width: 178px;
    height: 38px;
    line-height: 38px;
    background-color: #ffeded;
    border: 1px solid #FF0036;
    color: #FF0036;
    font-family: 'Microsoft Yahei';
    font-size: 16px;
    text-align: center;
}
.tb-btn-basket a{
    background-color: #ff0036;
    border: 1px solid #ff0036;
    color: #fff;
    margin-right: 0;
    float: left;
    overflow: hidden;
    position: relative;
    width: 178px;
    height: 38px;
    line-height: 38px;
    font-family: 'Microsoft Yahei';
    font-size: 16px;
    text-align: center;
}
.tb-serPromise li{
    display: inline-block;
    white-space: nowrap;
    padding-right: 20px;
    padding-bottom: 5px;
    line-height: 36px;
}
.tb-serPromise a{
    display: inline-block;
    padding: 0 2px 0 0;
    margin: 0 10px 0 0;
    color: #666;
    white-space: nowrap;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
.tb-wrap .el-row:last-child{
    margin-top: 30px;
}
.inputNumberBorder{
  border: none;
}
.active-param{
  border: 1px solid #FF0036!important;
}
</style>
