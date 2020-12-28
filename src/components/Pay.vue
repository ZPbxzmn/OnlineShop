<template>
    <div>
        <Top></Top>
        <el-container class="pay">
            <el-header height="100%">
                <h2 class="header-title">
                    选择收货地址
                </h2>
                <div class="default-tip">默认地址</div>
                <el-card class="box-card" shadow="never" v-for="(item,index) in addressList" :key="index" :class="{'box-card-active':activeAd===index}">
                    <div slot="header" class="clearfix">
                        <span>{{item.general}} ({{item.name}}收)</span>
                    </div>
                    <div>
                        <p>{{item.phoneNumber}}</p>
                        <p>{{item.details}}</p>
                    </div>
                    <a class="edit-bd" @click="selectAddress(index)"></a>
                    <div :class="{'curMarker':activeAd===index}"></div>
                    <div class="edit" :class="{'edit-active':activeAd===index}"><a>修改</a></div>
                </el-card>
            </el-header>
            <el-main>
                <div class="pay-table">
                    <el-table
                        :data="tableData"
                        border
                        ref="multipleTable">
                        <el-table-column
                            type="index"
                            label="选择"
                            width="55">
                        </el-table-column>
                        <el-table-column
                        label="商品信息">
                        <template slot-scope="scope">
                            <img :src="tableData[scope.$index].img" class="info-img">
                            <p class="info-p">
                                <span>{{tableData[scope.$index].name}}</span>
                                <span v-for="(item, index) in tableData[scope.$index].params" :key="index" class="params"> {{item.param[item.currentNumber]}} </span>
                            </p>
                        </template>
                        </el-table-column>
                        <el-table-column
                            prop="price"
                            label="单价"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="数量"
                            width="155">
                        </el-table-column>
                        <el-table-column
                            label="金额"
                            width="100">
                            <template slot-scope="scope">
                              <span>{{tableData[scope.$index].num*tableData[scope.$index].price}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-row class="table-footer">
                    <el-col :span="16" class="mjly">
                        买家留言：
                        <el-input
                            type="textarea"
                            :rows="1"
                            placeholder="选填,请先和商家协商一致"
                            v-model="message"
                            maxlength="200"
                            show-word-limit>
                        </el-input>
                    </el-col>
                    <el-col :span="6" class="yhq" :offset="2">
                        优惠券
                        <el-select v-model="yhq_value" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in yhqs"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6" :offset="18" class="hb">
                        红包
                        <el-select v-model="hb_value" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in hbs"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row class="box">
                    <el-col :span="10" :offset="14" class="box__wrapper">
                        <div>
                            <span class="realpay--title">实付款：</span>
                            <span class="realpay--price-symbol">¥</span>
                            <span class="realpay--price">{{this.totalPrice}}</span>
                        </div>
                        <div>
                            <div class="confirmAddr-addr">
                                <span class="confirmAddr-title">寄送至：</span>
                                <span>{{addressList[activeAd].details}}</span>
                            </div>
                            <div>
                                <span class="confirmAddr-title">收货人：</span>
                                <span>{{addressList[activeAd].name}} {{addressList[activeAd].phoneNumber}}</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4" :offset="16" class="toCart">
                        <a @click="backCart">
                            <i class="el-icon-back"></i> 返回购物车
                        </a>
                    </el-col>
                    <a @click="dialogVisible = true">
                        <el-col :span="4" :offset="0" class="submit">
                            <span>提交订单</span>
                        </el-col>
                    </a>
                </el-row>
                <el-dialog
                    title="支付宝支付"
                    :visible.sync="dialogVisible"
                    width="30%"
                    center>
                    <p class="sum">
                        <span class="sum1">共计</span>
                        <span class="sum2">￥</span>
                        <span class="sum3">{{this.totalPrice}}</span>
                    </p>
                    <img src="@/assets/else/pay.jpg" class="pay-img">
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible=false;dialogVisible2=true">支付成功</el-button>
                    </span>
                </el-dialog>
                <el-dialog
                    title="支付成功"
                    :visible.sync="dialogVisible2"
                    width="30%"
                    center>
                    <div class="gou">
                        <i class="el-icon-circle-check"></i>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="clearCart">返回</el-button>
                    </span>
                </el-dialog>
            </el-main>
        </el-container>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Top from './Top'
import Bottom from './Bottom'
export default {
  components: {
    Top,
    Bottom
  },
  computed: {
    totalPrice () {
      var sum = 0
      for (let goods of this.$store.state.activePay) {
        sum += goods.price * goods.num
      }
      if (this.yhq_value === 1 && sum >= 5000) {
        sum -= 20
      } else if (this.yhq_value === 2 && sum >= 200) {
        sum -= 40
      }
      sum -= this.hb_value
      if (sum < 0) {
        sum = 0
      }
      return sum
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogVisible2: false,
      message: '',
      activeAd: 0,
      addressList: [],
      tableData: [],
      yhqs: [
        {
          value: 1,
          label: '满5000 减20'
        },
        {
          value: 2,
          label: '满200 减40'
        }
      ],
      yhq_value: 1,
      hbs: [
        {
          value: 12.34,
          label: '￥12.34 【无门槛红包】'
        },
        {
          value: 5,
          label: '￥5 【无门槛红包】'
        }
      ],
      hb_value: 12.34
    }
  },
  methods: {
    selectAddress (index) {
      this.activeAd = index
    },
    clearCart () {
      this.dialogVisible2 = false
      this.$store.dispatch('clearCart')
      this.$router.push('/cart')
    },
    backCart () {
      this.$store.state.activePay = []
      this.$router.push('/cart')
    }
  },
  created () {
    this.tableData = this.$store.state.activePay
    this.addressList = this.$store.state.activeAddress
  }
}
</script>

<style scoped>
.pay{
    margin: 0 auto;
    width: 75%;
}
.header-title{
    color: #333;
    font-weight: 700;
    font-size: 14px;
    padding-left: 30px;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.box-card {
    width: 240px;
    height: 154px;
    background: url(../assets/else/bd1.png) no-repeat;
    border: none;
    margin-top: 20px;
    background-size: 100% 100%;
    float: left;
    margin-left: 30px;
}
.box-card-active{
    background-image: url(../assets/else/bd2.png);
}
.pay p{
    padding-bottom: 5px;
}
.pay{
    color: #666;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
a{
    text-decoration: none;
}
.edit{
    display: none;
}
.edit-active{
    display: block;
    position: relative;
    top: -175px;
    left: 0px;
}
.edit a{
    color: #c97;
}
.edit a:hover{
    color: #ff0036;
}
.edit-bd{
    display: block;
    width: 240px;
    height: 154px;
    position: relative;
    top: -111px;
    left: -21px;
}
.default-tip{
    background: #ccc;
    color: #fff;
    width: 48px;
    height: 18px;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    position: absolute;
    top: 238px;
    left: 432px;
}
.curMarker{
    z-index: 3;
    position: relative;
    background: url(../assets/else/za.png) no-repeat;
    background-position: 0 -272px;
    width: 28px;
    height: 28px;
    bottom: 140px;
    left: 192px;
}
.mjly{
    line-height: 32px;
}
.table-footer{
    border: 1px solid #EBEEF5;
    border-top-width: 0;
    padding: 20px 20px;
}
.yhq{
    text-align: right;
}
.hb{
    text-align: right;
}
.box{
    margin-top: 20px;
}
.box__wrapper{
    border: 1px solid #ff0036;
    text-align: right;
    padding: 20px 10px;
}
.realpay--title{
    font-weight: 700;
    color: #333;
}
.realpay--price-symbol{
    font-size: 26px;
    margin-right: 4px;
    color: #999;
}
.realpay--price{
    color: #ff0036;
    font: 700 26px tahoma;
}
</style>

<style>
.pay .el-card__header {
    padding: 10px 20px;
    font-weight: 700;
}
.pay .el-card__body{
    padding: 10px 20px 20px 20px;
}
.pay-table .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #fff;
}
.table-footer .el-textarea{
    width: 400px;
}
.order-confirmAddr{
    line-height: 1.6;
    margin-top: 10px;
}
.confirmAddr-title{
    font-weight: 700;
    color: #333;
}
.submit{
    color: #fff;
    background-color: #ff0036;
    height: 39px;
    line-height: 39px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
}
.toCart{
    height: 39px;
    line-height: 39px;
    text-align: center;
}
.toCart a{
    color: #36c;
}
.pay-img{
    display: block;
    margin: 0 auto;
}
.gou{
    font-size: 120px;
    text-align: center;
    color: #13C972;
}
.info-img{
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
}
.info-p{
  text-align: center;
}
.params{
  margin-bottom: 40px;
}
.sum{
    text-align: center;
}
.sum1{
    color: #333;
}
.sum2{
    color: #999;
}
.sum3{
    color: #ff0036;
}
</style>
