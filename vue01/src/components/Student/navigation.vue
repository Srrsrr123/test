<template>
  <div id="nav_box">
    <img src="../../assets/logo.png" id="logo">
    <div id="nav">
      <router-link to="/student/home" tag="button" >首页</router-link>
      <router-link to="/student/resource" tag="button">课程资源</router-link>
      <router-link to="/student/activity" tag="button">课程活动</router-link>
      <router-link to="/student/signin" tag="button">课程签到</router-link>
      <router-link to="/student/discussion" tag="button">答疑讨论</router-link>
      <router-link to="/student/grade" tag="button">学科成绩</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: "navigation"
}
</script>

<style scoped>
#nav_box{
  width: 100%;
  height: 60px;
}

#nav{
  height: 100%;
  float: right;
  text-align: center;
  margin-right: 200px;
}
button{
  height: 100%;
  width: 100px;
  border: none;
  background-color: white;
}
#logo{
  margin-left: 140px;
  height: 100%;
}
.router-link-active{
  color: white;

  background-color: #3f36c9;
}
.router-link-active-focus{
  border: none;
}
</style>
