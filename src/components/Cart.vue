<template>
    <div>
        <Top></Top>
        <el-container>
            <el-header></el-header>
            <el-main>
                <div class="cart-table">
                    <el-table
                        :data="tableData"
                        border
                        ref="multipleTable"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
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
                            label="数量"
                            width="155">
                            <template slot-scope="scope">
                                <el-input-number v-model="tableData[scope.$index].num" :min="1" :max="10" label="描述文字" size="mini"></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="金额"
                            width="100">
                            <template slot-scope="scope">
                              <span>{{tableData[scope.$index].num*tableData[scope.$index].price}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                              <a @click="handleDelete(scope.$index, scope.row)">删除</a>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer">
                        <el-row>
                            <el-col :span="2" :offset="1">
                                <a @click="selectAll">全选</a>
                            </el-col>
                            <el-col :span="3">
                                <a @click="clearSelect">取消选择</a>
                            </el-col>
                            <el-col :span="6" :offset="9">
                                已选择商品 <span class="cart-length">{{multipleSelection.length}}</span> 件
                                <span class="hj">合计:
                                    <span class="sum">￥{{totalPrice}}</span>
                                </span>
                            </el-col>
                            <el-col :span="3" :offset="0" class="settlement">
                                <a @click="pay">结 算</a>
                            </el-col>
                        </el-row>
                    </div>
                </div>
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
      for (let goods of this.multipleSelection) {
        sum += goods.price * goods.num
      }
      return sum
    }
  },
  data () {
    return {
      multipleSelection: [],
      tableData: {}
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    selectAll () {
      this.$refs.multipleTable.toggleAllSelection()
    },
    clearSelect () {
      this.$refs.multipleTable.clearSelection()
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    pay () {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择商品!')
      } else {
        this.$store.dispatch('addPay', this.multipleSelection)
        this.$router.push('/pay')
      }
    }
  },
  created () {
    this.tableData = this.$store.state.activeCart
  }
}
</script>

<style scoped>
.cart-table{
    width: 960px;
    margin: 0 auto;
}
a:hover{
  color: #FF0036;
}
.footer{
  margin-top: 20px;
  background-color: #e5e5e5;
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
.footer .el-row{
    height: 50px;
    line-height: 50px;
}
.footer a{
  display: inline-block;
  margin-left: 30px;
}
.settlement{
    background-color: #FF0036;
    text-align: center;
}
.settlement a{
    color: #fff;
    text-decoration: none;
    text-align: center;
    margin: 0;
    font-family: 'Lantinghei SC','Microsoft Yahei';
    font-size: 20px;
}
.cart-length{
    color: #FF0036;
    font-weight: 700;
    font-size: 18px;
}
.sum{
    font-weight: 700;
    font-size: 22px;
    color: #FF0036;
}
.hj{
    padding-left: 15px;
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
</style>

<style>
.cart-table .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #fff;
}
</style>
