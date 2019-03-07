import Customers from './components/Customers'
import Login from './components/Login'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

const routes = [
  {
    path:'/',
    component: Customers
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/add',
    component: Add,
    beforeEnter: (to, from, next) => {
      if(localStorage.isLogin == 'true'){
        next();
      }else{
        alert('请先登录');
        next({
          path: '/login'
        })
      }
    }
  },
  {
    path:'/detail/:id',
    component: CustomerDetails
  },
  {
    path:'/edit/:id',
    component: Edit
  },
  {
    path:'*',
    redirect:'/'
  }
]

export default routes