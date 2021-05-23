<template>
<div>
    <div id="nav">
     <template>
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="doctorinfo" style="margin-left:70px" >医生信息</el-menu-item>
        <el-menu-item index="order">看病预约</el-menu-item>
        <el-menu-item index="myinfo">个人信息</el-menu-item>
        <el-menu-item index="myrecord">我的病历</el-menu-item>
        <el-menu-item index="advice">我的医嘱</el-menu-item>
        <el-menu-item index="newactivity">医院最新活动</el-menu-item>
        <span id="login"> <router-link to='login'>{{loginmessage}} </router-link></span>
      </el-menu>
    </template>
  </div>
  <template>
    <el-container>
    <el-main>
  <div id="Demo">
    <router-link to= "doctorinfo"> <div class="MainDemo" id="MainDemo1"><h1>医生信息</h1></div></router-link>
    <router-link to= "order" ><div class="MainDemo" id="MainDemo2"><h1>看病预约</h1></div></router-link>
    <router-link to= "myinfo"> <div class="MainDemo" id="MainDemo3"><h1>个人信息</h1></div></router-link>
    <router-link to= "myrecord" > <div class="MainDemo" id="MainDemo4"><h1>我的病历</h1></div></router-link>
    <router-link to= "advice" > <div class="MainDemo" id="MainDemo5"><h1>我的医嘱</h1></div></router-link>
    <router-link to= "newactivity" > <div class="MainDemo" id="MainDemo6"><h1>医院最新活动查看</h1></div></router-link>
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
        activeIndex: '',
        loginmessage:this.$store.state.loginmessage,
        footer:'河北经贸大学校医院',
      };
    },
    methods: {
    
    }}
    
</script>