<template>
  <div class="customers container" id="customers">
    <alert v-show="alert" :message="alert"></alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="search" class="form-control" placeholder="请输入姓名或手机号" v-model="search">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer,index) in searchName" :key="index">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link :to="'/detail/'+customer.id">详情</router-link>
                    <router-link :to="'/edit/'+customer.id">编辑</router-link>
                    <a class="a-delete" @click="deleteCustomer(customer.id)">删除</a>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:'',
      search:''
    }
  },
  components:{
      Alert
  },
  methods:{
        fetchCustomers(){
            this.$axios.get('users').then(data=> this.customers = data.data)
        },
        deleteCustomer(id){
            if(confirm('你确认要删除吗？')){
                this.$axios.delete('users/'+id).then(res=> this.alert='删除成功!');
            }
        }
  },
  computed:{
      searchName(){
        return this.customers.filter(res => res.name.match(this.search) || res.phone.match(this.search));
      }
  },
  created(){
      if(this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }
      this.fetchCustomers()
        setTimeout(()=>this.alert="",3000);
  },
  updated(){
      this.fetchCustomers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 70px;
}
.a-delete{
    color: crimson;
    cursor: pointer;
}
</style>
