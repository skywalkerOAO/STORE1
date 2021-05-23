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
       <el-card class="box-card" style="height:900px;width:50%;margin:0 auto">
        <div id="userinfo">
           <div slot="header" class="clearfix" style="margin-top:40px">
             <span style="font-size:40px">个人信息</span>
           </div>
        <form style="margin-top:60px">
         <table border="2px" align="center" height="70%" >
         
         <tr class="trinfo"><!--第1行开始-->
            <th >姓名</th>
            <th>
               <input  v-model="user.name" type="text"> 
            </th>
            <th rowspan="5">相片</th>
            <th rowspan="5">
               <img id="imginfo" src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg">
            </th>
         </tr><!--第1行结束-->
         <tr  class="trinfo">
            <th>学号</th>
            <th>
                <input v-model="user.stdnumber" type="text"> 
            </th>
            </tr><!--加一行学号-->
         <tr  class="trinfo"><!--第2行开始-->
            <th >性别</th>
            <th>
               <input  v-model="user.sex" id="male" value="male" type="radio"   />男<!-- 单选按钮的name要一样 -->
               <input  v-model="user.sex" id="female" value="female" type="radio"   />女<!-- selected 和它的区别是什么？都是选择 -->
            </th>
            
         </tr><!--第2行结束-->
 
         <tr  class="trinfo"><!--第3行开始-->
            <th>学院信息</th>
            <th colspan="1">
               <select v-model="user.xueyuan" @change="getgrade">
                  <option v-for="item in user.arr" v-bind:value="item.name">{{item.name}}</option>
               </select>
               
               <select v-model="user.grade"  @change="getclass" >
                 <option v-for="item in user.gradeArr" v-bind:value="item.name">{{item.name}}</option>
               </select>
               <select v-model="user.class">
                 <option v-for="item in user.classArr" v-bind:value="item.name">{{item.name}}</option>
                </select>
            </th>
           
         </tr><!--第3行结束-->

         <tr  class="trinfo" ><!--第4行开始-->
            <th>手机号</th>
            <th>
               <input v-model="user.telephone" type="text"   /><!-- input可以用单标签的形式 -->
            </th>
         </tr><!--第4行结束-->
         <tr  class="trinfo" ><!--第5行开始-->
            <th>既往病史及过敏史</th>
            <th colspan="3">
               <textarea name="既往病史及过敏史" rows="6" cols="90" style="width:765px;height:185px;resize:none" >无</textarea><!--这里不能用单标签-->
            </th>
         </tr><!--第6行结束-->
 
         <tr  class="trinfo" ><!--第6行开始-->
            <th>校医院就诊记录</th>
            <th colspan="3">
            <textarea name="校医院就诊记录" rows="6" cols="90"  style="width:765px;height:185px;resize:none">无</textarea><!--这里不能用单标签-->
            </th>
         </tr><!--第6行结束-->
         </table>
         </form>
         </div>
          <el-footer style="text-align:center">
           <div> 
            河北经贸大学校医院 {{yearMD}}&nbsp;&nbsp;{{Hms}}</span>
           </div>
        </el-footer>    
      </el-card>
    </template>
  </div>

  
</template>
   
<script>
   import arrAll from '@/assets/items.js'

   export default {
    name:"userinfo",  
    data() {
      return {
        loginmessage:this.$store.state.loginmessage,
        activeIndex: 'myinfo',
        user:{
            name:"",
            sex:'',
            telephone:'',
            xueyuan:"",
            grade: '',
            class: '',
            stdnumber:"",
            arr: arrAll,
            gradeArr:[],
            classArr:[],
            },
            yearMD:'',
            Hms:'',}}, 
    mounted(){
            let that = this;
          //定时器
            setInterval(()=>{
            that.getDateFunc();
            },50)
         },
            
        methods: {
           
            getgrade(){
              for (var i = 0; i < this.user.arr.length; i++) {
                var obj = this.user.arr[i]
                if (this.user.xueyuan == obj.name ){
                 this.user.gradeArr = obj.sub;
                 this.user.class = "";
                 }
                 }},
            getclass(){
                for (var i = 0; i < this.user.gradeArr.length; i++) {
                var obj = this.user.gradeArr[i]
                if (this.user.grade == obj.name ) {
                this.user.classArr = obj.sub;}}},
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
           
            }
      }
  

    
</script>