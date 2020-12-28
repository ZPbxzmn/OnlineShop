<template>
    <div id="app">
        <Top></Top>
        <el-container>
            <el-main>
                <h2>很抱歉，您查看的页面找不到了！</h2>
                <div class="content">
                    <p>您可以：</p>
                    <p>1. 检查刚才的输入</p>
                    <p>2. <router-link to="/"><el-link  type="primary" :underline="false">天猫首页</el-link></router-link></p>
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
  }
}
</script>

<style scoped>
#app{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
h2{
    font-size: 16px;
    font-weight: 700;
}
p{
    padding-left: 10px;
}
.el-main{
    padding-left: 600px;
    background: url(../assets/else/404.png) 500px 7px no-repeat;
}
.content{
    margin-top: 30px;
}
.content p:first-child{
    padding: 0 0 20px 0;
}
.el-link{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
</style>
