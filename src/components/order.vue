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
      <el-main style="text-align:left">
        <div style="display: flex;">
          <el-card class="orderbox-card" style="margin:0 auto">
            <div slot="header" class="clearfix">
              <span>预约</span>
            </div>
           
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="大致病因" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="预约时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="科室" prop="type">
    <el-radio-group v-model="ruleForm.type">
      <el-radio label="内科" name="type"></el-radio>
      <el-radio label="外科" name="type"></el-radio>
      <el-radio label="口腔科" name="type"></el-radio>
      <el-radio label="预防保健科" name="type"></el-radio>
    </el-radio-group>
  </el-form-item>
  
  <el-form-item label="病情描述" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即预约</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>


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
        activeIndex: 'order',
        loginmessage:this.$store.state.loginmessage,
        footer:"河北经贸大学校医院",
        ruleForm: {
          name: '',
          date1: '',
          date2: '',
          type: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入病情名称', trigger: 'blur' },
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请至少选择一个科室', trigger: 'change' }
          ],
         
          desc: [
            { required:false, message: '请填写病情描述', trigger: 'blur' }
          ]
        }
      };
    },
        
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

    
  }
</script>