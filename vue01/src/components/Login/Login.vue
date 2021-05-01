<template>
  <div id="app">
    <div id="nav_box">
      <img src="../../assets/logo.png" id="logo">
    </div>
    <div id="content">
      <div id="loginbox">
        <router-link to="/login/login">登录</router-link>
        <router-link to="/login/setPassword">设置新密码</router-link>
        <router-view></router-view>
        <button @click="login">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login:function (){
      this.$router.push('/student')
    }

  }
}
</script>

<style scoped>
#nav_box{
  width: 100%;
  height: 60px;
}
#logo{
  margin-left: 140px;
  height: 100%;
}
#content{
  width: 100%;
  height: 800px;
  background-color: #3f36c9;
}
#loginbox{
  width: 470px;
  height:500px;
  float: right;
  margin-right: 300px;
  margin-top: 100px;
  background-color: white;
}
</style>
