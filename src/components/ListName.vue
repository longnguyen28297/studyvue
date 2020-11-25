<template>
  <div>
  <h1>{{ title }}</h1>
  <button v-on:click="changeTitleList" class="btn-danger">Đổi title</button>
<table class="table table-info">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    <SingleName v-for="name in listName" v-bind:key="name.id" v-bind:name="name" v-on:deleteName="deleteNameList"></SingleName>
</table>
</div>

</template>

<script>
  import SingleName from './SingleName.vue'
export default {
  name: 'comp-list-name',
  props:{
    listName: {
      type: Array,
      default:[],
    },
    title:{
      type: String,
      default: 'Không có tiêu đề',
    }
  },
  components:{
    SingleName
  },
  methods:{
    changeTitleList(e) {
      var data = {
        title: 'Tiêu đề mới đã được thay đổi'
      }
      this.$emit('changeTitle',data.title)
    },
    deleteNameList(data){
      console.log(data)
      this.$emit('deleteNameApp',data)
    }
  },
}
</script>
