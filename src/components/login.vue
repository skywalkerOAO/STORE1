<template>
 <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 300px">
      <el-card style="width: 350px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.stdnumber" placeholder="请输入学号"></el-input>
            </td>
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
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
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
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td colspan="2"> 
             <router-link to= "regist"> <el-button style='width:300px' type="primary">没有注册？  去注册</el-button></router-link>
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
        returndata:"",
        code:'',
        username:"",
        //之前是在里面直接写username，password等等，但是这里要写return
        //因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
        //比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
        //同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
        //可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
        //这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
        user:{
          stdnumber:'',
          password:'',
          
          //为了登录方便，可以直接在这里写好用户名和密码的值
        }
      }
    },
    methods:{
       changelogin(){
          this.$store.commit('logincode',this.code)
        },
        changeusername(){
          if( this.$store.state.code == "success"){
            this.$store.commit('loginmessage',this.username);
            this.$router.push({path :'/'});
          }
          else{
            alert('用户名或密码错误！');

          }
          },
      doLogin(){//一点击登录按钮，这个方法就会执行
        this.axios({
             method:'post',
             url:'/login.php',
             headers:{'Content-type':'application/json;charset=utf-8'},
             data:JSON.stringify({
                stdnumber:this.user.stdnumber,
                password:this.user.password
                })
           }).then(response =>{
              this.data = response.data;
              this.code = response.data.code;
              this.username = response.data.username;
              console.log(this.code);
              console.log(this.data);
                            }).then(val=>{
                              this.changelogin();
                            }).then(val=>{
                              this.changeusername();
                            })
         
          },
        
      }
    }
      

       
</script>

