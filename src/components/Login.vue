<template>
  <div class="add container" id="add">
    <Alert v-show="alert" :message="alert"></Alert>
    <h1 class="page-header">登陆</h1>
    <form action="" @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="username" v-model="customer.username" />
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control" placeholder="password" v-model="customer.password" />
        </div>
        <button type="submit" class="btn btn-primary">登陆</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'add',
  data () {
    return {
      customer:{},
      alert: '',
    }
  },
  components:{
    Alert
  },
  methods:{
    addCustomer(e){
      if(!this.customer.username || !this.customer.password){
        this.alert = '请添加对应的信息！';
        setTimeout(()=>this.alert="",3000);
      }else{
        this.$axios.get('login').then(res => {
          // console.log(res.data[0]);
          // this.$router.push({path:'/',query:{alert:'用户信息添加成功!'}});
          if(res.data[0].username == this.customer.username && res.data[0].password == this.customer.password){
            this.$store.commit('resetLogin',true);
            this.$store.commit('resetName',this.customer.username);
            this.$router.push({path:'/',query:{alert:'登陆成功!'}});
          }else{
            this.alert = '用户名或者密码错误';
            setTimeout(()=>this.alert="",3000);
          }
        });
      }
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 70px;
}
</style>
