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
  <el-card class="recbox-card">
    <div slot="header" class="clearfix">
        <span>卡片名称</span>
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
        label="就医记录">
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
        <el-footer style="text-align:center ">
           <div> 
            <span>{{footer}} {{yearMD}}&nbsp;&nbsp;{{Hms}}</span>
           </div>
        </el-footer>    
        </el-container>
       
    </template>
  </div>
  
</template>

<script>

  export default {
    data() {
      return {
        loginmessage:this.$store.state.loginmessage,
        activeIndex: 'myrecord',
        yearMD:'',
        Hms:'',
        footer:"河北经贸大学校医院"
      };
    },
  mounted(){
  let that = this;
  //定时器
  setInterval(()=>{
    that.getDateFunc();
  },100)
},

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
       
      },
     getDateFunc(){
        let year = new Date().getFullYear();//年
        let month = new Date().getMonth() +1;//注意！月份是从0月开始获取的，所以要+1;
        let day = new Date().getDate();//日
        let hour = new Date().getHours();//时
        let minute = new Date().getMinutes();//分
        let second = new Date().getSeconds();//秒
        //拼接日期 YYYY-MM-DD HH:mm:ss
        this.yearMD =
          year +
          '-' +
          (month >=10 ? month:'0'+ month) +
          '-' +
          (day >=10 ? day:'0' + day);
        this.Hms =
          (hour >= 10 ? hour:'0' + hour)
          + ':' +
          (minute >=10 ? minute:'0' + minute)
          + ':' +
          (second >=10 ? second:'0' + second);
   }
  }}
</script>
