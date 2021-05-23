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
<el-row type="flex" >
  <el-col :span="6" style="margin-left:270px" >
  <el-card class="docbox-card" >
    <div slot="header" class="clearfix">
        <span>{{doctor1}}</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg" >
  </el-card>
 </el-col>

 <el-col :span="6" >
  <el-card class="docbox-card" >
    <div slot="header" class="clearfix">
        <span>{{doctor2}}</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg" >
  </el-card>
 </el-col>

  <el-col :span="6" >
  <el-card class="docbox-card" >
    <div slot="header" class="clearfix">
        <span>{{doctor3}}</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg" >
  </el-card>
 </el-col>

</el-row>

<el-row type="flex" >
  <el-col :span="6" style="margin-left:270px" >
  <el-card class="docbox-card" > 
    <div slot="header" class="clearfix">
        <span>医生信息</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg">
  </el-card>
 </el-col>

 <el-col :span="6" >
  <el-card class="docbox-card" >
    <div slot="header" class="clearfix">
        <span>医生信息</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg">
  </el-card>
 </el-col>

  <el-col :span="6" >
  <el-card class="docbox-card" >
    <div slot="header" class="clearfix">
        <span>医生信息</span>
    </div>
     <img class="doctorimg" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg">
  </el-card>
 </el-col>

</el-row>

        </el-main>
        <el-footer>
          <div style="margin:0 auto">河北经贸大学校医院</div>
        </el-footer>    
        </el-container>
       
    </template>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'doctorinfo',
        loginmessage:this.$store.state.loginmessage,
        name:"",
        doctor1:"苏傲",
        doctor2:"刘天木",
        doctor3:"任星宇",

      };
    },
    methods: {
      
    }
  }
</script>