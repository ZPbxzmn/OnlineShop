<template>
    <el-container>
        <el-header height="160px">
            <img src="@/assets/首页/footer.jpg" class="footer-img">
        </el-header>
        <el-main>
            <el-row >
                <el-col :span="12" :offset="2">
                    <p class="footer-tmallinfo">
                        <a href="//pages.tmall.com/wow/seller/act/zhaoshangproduce">关于天猫</a>
                        <a href="//service.tmall.com/support/tmall/tmallHelp.htm?spm=a220o.1000855.a2226n1.25.3ddb3422kdU8GL">帮助中心</a>
                        <a href="//open.taobao.com">开发平台</a>
                        <a href="//job.alibaba.com/zhaopin/index.htm?spm=a220o.1000855.a2226n1.27.3ddb3422kdU8GL">诚聘英才</a>
                        <a href="//consumerservice.taobao.com/contact-us">联系我们</a>
                        <a href="//xtao.tmall.com?tracelog=tmallfoot">网站合作</a>
                        <a href="//terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201801121425_43176.html">法律声明</a>
                        <a href="//terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201801031144_60809.html">隐私权政策</a>
                        <a href="http://ipp.alibabagroup.com/">知识产权</a>
                        <a href="//jubao.alibaba.com/index.html?site=TMALL">廉正举报</a>
                    </p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22" :offset="2">
                    <p class="footer-otherlink">
                        <a href="http://www.alibabagroup.com/cn/global/home?spm=875.7931836/B.a2226n1.35.43324265UGMO1D">阿里巴巴集团</a>
                        |
                        <a href="//www.taobao.com">淘宝网</a>
                        |
                        <a href="//www.tmall.com/">天猫</a>
                        |
                        <a href="//ju.taobao.com/">聚划算</a>
                        |
                        <a href="http://www.aliexpress.com/">全球速卖通</a>
                        |
                        <a href="http://www.alibaba.com/">阿里巴巴国际交易市场</a>
                        |
                        <a href="//www.1688.com/">1688</a>
                        |
                        <a href="//www.alimama.com/">阿里妈妈</a>
                        |
                        <a href="//www.fliggy.com/">飞猪</a>
                        |
                        <a href="http://www.aliyun.com/">阿里云计算</a>
                        |
                        <a href="http://www.alios.cn/">AliOS</a>
                        |
                        <a href="http://aliqin.cn/">阿里通信</a>
                        |
                        <a href="http://www.net.cn/">万网</a>
                        |
                        <a href="http://www.autonavi.com/">高德</a>
                        |
                        <a href="http://www.uc.cn/">UC</a>
                        |
                        <a href="http://www.umeng.com/">友盟</a>
                        |
                        <a href="http://www.xiami.com/">虾米</a>
                        |
                        <a href="http://www.dingtalk.com/?lwfrom=20150205115110773">钉钉</a>
                        |
                        <a href="https://www.alipay.com">支付宝</a>
                        |
                        <a href="https://s.alibaba.com?scene=clinks">阿里安全</a>
                    </p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" :offset="2">
                    <p class="footer-copyright">© 2020 ZP 版权所有</p>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-main{
    background-color: #000;
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    border-top: 2px solid #FF0036;
}
.el-container{
    width: 100%;
}
a{
    margin-right: 3px;
    color: #fff;
    text-decoration: none;
}
p{
    padding: 5px 0;
}
.footer-copyright{
    color: #a4a4a4;
}
.el-header{
    background: url(../assets/首页/cat.png) 220px 136px no-repeat;
    background-size: 68px 25px;
}
.footer-img{
    display: block;
    margin: 30px auto;
}
</style>
