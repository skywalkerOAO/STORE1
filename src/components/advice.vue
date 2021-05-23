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
        <span id="login"> <router-link to= "login">{{loginmessage}}</router-link></span>
      </el-menu>
    </template>
         <template>
    
        <el-container>
        <el-main>
<div style="display: flex;justify-content: center;">
  <el-card class="advbox-card">
    <div slot="header" class="clearfix">
        <span>我的医嘱</span>
    </div>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="病因 ">
      </el-table-column>
       <el-table-column
        prop="advice"
        label="医生建议">
      </el-table-column>
       <el-table-column
        prop="medic"
        label="用药建议">
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
        activeIndex: 'advice',
        loginmessage:this.$store.state.loginmessage,

         tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            detail: '脚踝受伤'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            detail: '肚子疼'
          
          }, {
            date: '2016-05-01',
            name: '王小虎',
            detail: '头疼'
           
          }, {
            date: '2016-05-03',
            name: '王小虎',
            detail: '感冒'
          }],
          footer:"河北经贸大学校医院"
          
      };
    },
    methods: {

      handleClick(row) {
        console.log(row);
      }

    }
  }
</script>