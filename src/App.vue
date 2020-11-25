<template>
  <div id="app">
  <ListName v-bind:listName="listName" v-on:changeTitle="handleChangeTitle" v-on:deleteNameApp="handleDeleteName" v-bind:title="title"></ListName>
  <router-view></router-view>
  </div>
</template>

<script>
import ListName from './components/ListName.vue';

export default {
  name: 'App',
  components:{
    ListName
  },
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      listName: [
        {id:1,fname: "Athur" , lname: "Shelbby" , age: "35"},
        {id:2,fname: "Thommy" , lname: "Shelby" , age: "33"},
        {id:3,fname: "John" , lname: "Shelby" , age: "31"},
        {id:4,fname: "Finn" , lname: "Shelby" , age: "17"},
        {id:5,fname: "Gray" , lname: "Shelby" , age: "50"},
      ],
    }
  },
  methods: {
    handleChangeTitle(data) {
      console.log(data);
      this.title = data
    },
  handleDeleteName(data){
    console.log(data)
    var deleteID = -1;
    this.listName.forEach((user, ind)=>{
      if(user.id === data.id){
        deleteID = ind;  
      }
      
    })
    if (deleteID!=-1) {
        this.listName.splice(deleteID,1)
      }

  }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
