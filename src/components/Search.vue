<template>
    <div>
        <Top></Top>
        <el-container>
            <el-main>
                <el-row>
                    <router-link :to="'/details/'+this.to" v-if="this.flag">
                        <el-col :span="4" :offset="9" class="result">
                            <el-card shadow="never" :body-style="{ padding: '5px 5px 0 5px'  }">
                                <img :src="this.goods.goodsImg" class="image">
                                <div style="padding: 14px;">
                                    <p>
                                        <span class="price">￥{{this.goods.price}}</span>
                                    </p>
                                    <p>{{this.goods.name}}</p>
                                </div>
                                <el-row class="card-footer">
                                        <el-col :span="12">
                                            月成交<span class="cj">{{this.goods.monthlySales}}笔</span>
                                        </el-col>
                                        <el-col :span="12">
                                            评论<span class="pl">{{this.goods.commentsNum}}</span>
                                        </el-col>
                                    </el-row>
                            </el-card>
                        </el-col>
                    </router-link>
                    <el-col :span="2" :offset="6" v-if="!this.flag">
                        <img src="@/assets/else/wu.png" alt="">
                    </el-col>
                    <el-col :span="8" :offset="0" v-if="!this.flag">
                        <p class="wu1">喵~没找到与“ {{this.$route.params.search}} ”相关的 商品 哦，要不您换个关键词我帮您再找找看</p>
                        <p class="wu2">建议您：</p>
                        <p class="wu3">1. 看看输入的文字是否有误</p>
                        <p class="wu3">2. 调整关键词</p>
                        <p class="wu3">3. <router-link to="/"><el-link  type="primary" :underline="false">返回首页</el-link></router-link></p>
                    </el-col>
                </el-row>
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
  data () {
    return {
      to: '',
      goods: {},
      flag: false
    }
  },
  mounted () {
    this.flag = false
    for (let goods in this.$store.state.goodsList) {
      if (this.$store.state.goodsList[goods].search === this.$route.params.search) {
        this.to = goods
        this.goods = this.$store.state.goodsList[goods]
        this.flag = true
        break
      }
    }
  }
}
</script>

<style scoped>
.image{
    display: block;
    margin: 0 auto;
    width: 210px;
    height: 210px;
}
.el-card{
    width: 220px;
    height: 100%;
}
.result .el-card:hover{
    border-color: #ff0036;
}
.price{
    color: #ff0036;
}
.card-footer{
    font-size: 12px;
    color: #999;
    text-align: center;
    padding-bottom: 5px;
    border-top: 1px solid #eee;
}
.cj{
    color: #b57c5b;
}
.pl{
    color: #38b;
}
.wu1{
    color: #333;
    font-weight: 700;
}
.wu2{
    color: #595959;
    font-size: 13px;
    line-height: 50px;
}
.wu3{
    color: #595959;
    font-size: 12px;
    line-height: 20px;
}
.wu3 .el-link{
    font-size: 12px;
}
</style>
