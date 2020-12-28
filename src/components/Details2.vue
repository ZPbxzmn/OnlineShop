<template>
    <el-container class="app">
        <el-aside width="350px" class="gg">
          <div class="ald-hd ">
            <span>——— 看了又看 ———</span>
          </div>
            <div v-for="(img, index) in this.$store.state.activeGoods.ggImg" :key="index">
                <img :src="img">
            </div>
        </el-aside>
        <el-main>
            <el-row>
                <el-col :span="18" :offset="2">
                    <el-tabs type="card" v-model="activeName">
                        <el-tab-pane label="商品详情" name="first">
                            <el-container>
                                <el-header class="xq-hbd" height="100%">
                                    <el-row>
                                        <el-col :span="12" :offset="0" class="xq-name">品牌名称：<span>{{this.$store.state.activeGoods.brandName}}</span></el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="12" :offset="0" class="xq-parameter">产品参数：</el-col>
                                    </el-row>
                                    <el-row class="xq-content">
                                        <el-col :span="8" :offset="0" v-for="(item, index) in this.$store.state.activeGoods.detailsParams" :key="index">{{item}}</el-col>
                                    </el-row>
                                </el-header>
                                <el-main>
                                    <div v-for="(img, index) in this.$store.state.activeGoods.xqImg" :key="index">
                                        <img :src="img">
                                    </div>
                                </el-main>
                            </el-container>
                        </el-tab-pane>
                        <el-tab-pane label="累计评价 4479" name="second">
                            <el-container class="comment">
                                <el-header class="xq-hbd comment-h" height="100%">
                                    <el-container>
                                        <el-aside width="120px" class="rate-score">
                                            <el-row class="">
                                                与描述相符
                                            </el-row>
                                            <el-row>
                                                {{this.$store.state.activeGoods.rate}}
                                            </el-row>
                                            <el-row>
                                                <el-rate
                                                    v-model="this.$store.state.activeGoods.rate"
                                                    disabled
                                                    text-color="#ff9900">
                                                </el-rate>
                                            </el-row>
                                        </el-aside>
                                        <el-main>
                                            <el-col :span="1" :offset="1" class="rate-tag-label"><span>大家都写到</span></el-col>
                                            <el-col :span="20" class="rate-tag-inner">
                                                <el-row>
                                                    <div v-for="(item, index) in this.$store.state.activeGoods.rateTagGood" :key="'good'+index">{{item}}</div>
                                                    <div class="tag-neg" v-for="(item, index) in this.$store.state.activeGoods.rateTagBad" :key="'bad'+index">{{item}}</div>
                                                </el-row>
                                            </el-col>
                                        </el-main>
                                    </el-container>
                                </el-header>
                                <el-main class="comment-content">
                                    <table>
                                        <tr v-for="(item, index) in this.$store.state.activeGoods.commentDetails" :key="index">
                                            <td class="tm-col-master">
                                                <div class="tm-rate-content">
                                                    {{item.content}}
                                                </div>
                                                <div class="tm-rate-date">
                                                    {{item.date}}
                                                </div>
                                            </td>
                                            <td class="col-meta">
                                                <p v-for="(item2, index2) in item.params" :key="index2">{{item2.name}}：<span>{{item2.param}}</span></p>
                                            </td>
                                            <td class="rate-user-info">
                                                <p>{{item.name1}}<span>***</span>{{item.name2}}<span>（匿名）</span></p>
                                            </td>
                                        </tr>
                                    </table>
                                </el-main>
                            </el-container>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
.el-main{
    padding: 0;
}
.app{
    margin-top: 40px;
}
.gg div{
    margin-left: 156px;
}
.ald-hd span{
    color: #999;
    width: 6em;
    margin-left: 5px;
    background-color: #fff;
}
.xq-hbd{
    border: 1px solid #E4E7ED;
    border-top-width: 0;
}
.xq-hbd .el-row{
    color: #666;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
.xq-name{
    line-height: 60px;
}
.xq-name span{
    color: #000;
}
.xq-parameter{
    font-weight: 700;
    height: 30px;
}
.xq-content{
    padding-bottom: 10px;
}
.xq-content .el-col{
    height: 25px;
}
.xq-hbd +.el-main{
    padding: 20px 0;
}
.comment{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
.comment-h .el-row{
    text-align: center;
}
.rate-score .el-row:first-child{
    color: #404040;
    font-size: 12px;
    font-weight: 100;
}
.rate-score .el-row:nth-child(2){
    color: #f60;
    font-family: arial;
    font-size: 32px;
    line-height: 32px;
}
.comment-h{
    padding: 10px 0;
}
.rate-score{
    border-right: 1px dotted #ddd;;
}
.rate-tag-label{
    padding: 0 5px;
    line-height: 13px;
    background: url(../assets/else/kuohao.png) right center no-repeat;
}
.rate-tag-label span{
    color: #ccc;
    font-size: 11px;
    font-weight: 600;
}
.rate-tag-inner .el-row{
    height: 20px;
}
.rate-tag-inner .el-row div{
    float: left;
    color: #ff0036;
    border-color: #ffd7dd;
    box-shadow: 2px 2px 1px #f2f2f2;
    border: 1px solid #ffd7dd;
    padding: 0 7px;
    margin-left: 20px;
    margin-top: 10px;
}
.rate-tag-inner .el-row div:hover{
    background: #ffe2e2;
    border-color: #ff0036;
    color: #ff0036;
}
.rate-tag-inner .el-row:last-child div:last-child{
    color: #409280;
    border-color: #d3f4e4;
}
.rate-tag-inner .el-row:last-child div:last-child:hover{
    background: #d9f5ed;
    border-color: #409280;
}
.comment-content{
    padding: 0!important;
}
.tm-col-master{
    width: 65%;
    padding-right: 30px;
}
.col-meta{
    width: 20%;
    color: #404040;
}
.rate-user-info{
    width: 15%;
    color: #404040;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}
table tr td{
    padding: 16px 7px;
}
table tr{
    border-bottom: 1px solid #e3e3e3;
}
td span{
    color: #999;
}
.tm-rate-content{
    padding-bottom: 40px;
    color: #333;
}
.tm-rate-date{
    color: #ccc;
}
</style>

<style>
.el-tabs__item.is-active{
    color: #ff0036;
}
.el-tabs__item:hover{
    color: #ff0036;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
    border-top: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border-top: 1px solid #E4E7ED;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-top: 2px solid #ff0036;
}
.el-tabs__header{
    margin: 0;
}
.el-rate__icon{
    margin-right: 0;
}
.el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #fff;
}
</style>
