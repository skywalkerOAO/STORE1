<template>
    <div id="nav">
    <template>
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="doctorinfo" style="margin-left:70px" >医生信息</el-menu-item>
        <el-menu-item index="order">看病预约</el-menu-item>
        <el-menu-item index="myinfo">个人信息</el-menu-item>
        <el-menu-item index="myrecord">我的病历</el-menu-item>
        <el-menu-item index="advice">我的医嘱</el-menu-item>
        <el-menu-item index="newactivity">医院最新活动</el-menu-item>
        <el-menu-item index='/'>返回主页</el-menu-item>
        <span id="login" > <router-link to= "login">{{loginmessage}}</router-link></span>
      </el-menu>
    </template>
    <template>
    
        <el-container>
        <el-main>
<div style="display: flex;justify-content: center;">
  <el-card class="newactbox-card">
    <div slot="header" class="clearfix">
        <span>卡片名称</span>
    </div>
        
      <el-table
      :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="name"
        label="活动名称"
        width="180">
      </el-table-column>
       <el-table-column
        prop="detail"
        label="主要内容"
        width="1300px">
      </el-table-column>
        <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
      label="查看详情">
       <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
       </template>
      </el-table-column>
    </el-table>

  </el-card>
</div>

        </el-main>
        <el-footer>
         {{footer}}
        </el-footer>    
        </el-container>
       
    </template>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'newactivity',
        loginmessage:this.$store.state.loginmessage,
        footer:"河北经贸大学校医院",
        tableData: [{
            date: '2021-04-01',
            name: '疫苗接种',
            detail: '今天在xxxxxx接种疫苗详情下载pdf文件'
          }, {
            date: '2021-04-02',
            name: '疫苗接种',
            detail: '今天在xxxxxx接种疫苗详情下载pdf文件'
          }]
      };
    },
    methods: {
    }
  }
</script>
<style>
 
</style>