<template>
  <tbody>
    <tr>
      <th scope="row">{{ name.id }}</th>
      <td><router-link :to="{ path: '/detail/' + name.id }"> {{name.fname}} </router-link></td>
      <td>{{name.lname}}</td>
      <td>{{name.age}}</td>
      <td><button v-on:click="deleteNameDetail" class="btn-danger btn">delete</button></td>
    </tr>
  </tbody>

</template>

<script>
export default {
  name: 'comp-list-name',
  props:{
    name: {
      type: Object,
      default:null,
    }
  },
  methods: {
    deleteNameDetail(){
      var data = {
        id:this.name.id
      }
      this.$emit('deleteName',data)
    }
  }
}
</script>
