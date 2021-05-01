import Vue from 'vue'
import Router from 'vue-router'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const Home = () => import('../components/Student/Home/Home')
const Resource = () => import('../components/Student/Resource/Resource')
const Activity = () => import('../components/Student/Activity/Activity')
const Signin = () => import('../components/Student/Signin/Signin')
const Grade = () => import('../components/Student/Grade/Grade')
const Discussion = () => import('../components/Student/Discussion/Discussion')
const SetPassword = () => import('../components/Login/SetPassword')
const Login = () => import('../components/Login/Login')
const Student = () => import('../components/Student/Student')
const LoginBox = () => import('../components/Login/LoginBox')

//1.安装插件
Vue.use(Router)


const routes = [
  {
    path: '',
    redirect :'/login'
  },
  {
    path: '/login',
    component: Login,
    children: [
      {
        path: '',
        redirect: 'login'
      },
      {
        path: 'login',
        component: LoginBox
      },
      {
        path: 'setPassword',
        component: SetPassword
      }
    ]
  },
  {
    path: '/student',
    component: Student,
    children: [
      {
        path: '',
        redirect :'home'
      },
      {
        path: 'resource',
        component: Resource
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'activity',
        component: Activity
      },
      {
        path: 'signin',
        component: Signin
      },
      {
        path: 'grade',
        component: Grade
      },
      {
        path: 'discussion',
        component: Discussion
      }
    ]
  },


]

//2.创建Router对象,export default导出
export default new Router({
  //配置路由和组件之间的关系，
  routes,
  mode: "history"
})


//3.在vue里挂载
