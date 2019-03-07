<template>
  <div class="detail container" id="detail">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link :to="'/edit/'+customer.id" class="btn btn-primary">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>{{customer.phone}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>{{customer.email}}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-education" aria-hidden="true"></span>{{customer.education}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>{{customer.graduationschool}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>{{customer.profession}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-road" aria-hidden="true"></span>{{customer.profile}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      customer:'' 
    }
  },
  methods:{
    fetchCustomers(id){
      this.$axios.get('users/'+id).then(data=> this.customer = data.data)
    },
    deleteCustomer(id){
      if(confirm('你确认要删除吗？')){
        this.$axios.delete('users/'+id).then(data=> this.$router.push({path:'/',query:{alert:'用户删除成功'}}))
      }
    }
  },
  created(){
      this.fetchCustomers(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 70px;
}
.glyphicon{
  margin-right: 8px;
}
</style>
