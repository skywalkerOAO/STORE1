<template>
 <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>
        <table>
          <tr>
            <td>姓名</td>
            <td> 
               <el-input v-model="user.username" placeholder="请输入姓名"></el-input>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>学号</td>
            <td> <el-input v-model="user.stdnumber" placeholder="请输入学号"></el-input></td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password1" placeholder="请输入密码" ></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
           <tr>
            <td>再次输入密码</td>
            <td>
              <el-input type="password" v-model="password2" placeholder="请再次输入密码" ></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>手机号</td>
            <td>
              <el-input v-model="user.telephone" placeholder="请输入手机号" ></el-input> 
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="doRegist">注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
</div>
</template>
<script>
  export default {
    //单页面中不支持前面的data:{}方式
    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        res:"",
        //之前是在里面直接写username，password等等，但是这里要写return
        //因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
        //比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
        //同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
        //可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
        //这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
        user:{
          stdnumber:'',
          telephone:'',
          username:'',
          password1:'',
          //为了登录方便，可以直接在这里写好用户名和密码的值
        },
        password2:'',
      }
    },
    methods:{
      returnres(){
         if( this.res == "success"){
           alert('注册成功，快去登录吧！');
           this.$router.push({path :'/login'});
          }
          else{
            alert('学号已存在！！！');
            this.$router.push({path :'/regist'});
          }
      },
      doRegist(){//一点击登录按钮，这个方法就会执行
        if (this.user.stdnumber=="" || this.user.telephone =="" || this.user.password1 == "" || this.user.username == "")
        {
           alert("请不要留空")
        
        }
        else if (this.user.password1!==this.password2)
        {
          alert("两次密码不一致！！！")
        }
        else
        {
           this.axios({
             method:'post',
             url:'/res.php',
             headers:{'Content-type':'application/json;charset=utf-8'},
             data:JSON.stringify({
                stdnumber:this.user.stdnumber,
                telephone:this.user.telephone,
                username:this.user.username,
                password:this.user.password1
                })
           }).then(response =>{
              this.res = response.data;
              console.log(this.res)}) .then(returnres=>{
                this.returnres();
              })
             
      }
      }
    }}
  
</script>
