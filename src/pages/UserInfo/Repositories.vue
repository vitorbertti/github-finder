<template>
   <tr v-if="repository.name">
      <th><a :href="link" target="_blank" class="link-table">{{repository.name}}</a></th>
      <td>{{repository.language}}</td>
   </tr>     
</template>

<script>
export default {
   name: "Repositories",
   props: ['repository'],
   data(){
      return {
         link: `https://github.com/${this.repository.owner.login}/${this.repository.name}`,
      }
   }
}
</script>

<style>
th, td {
  text-align: left;
  padding: 8px 40px;
}

tr:nth-child(even) {background-color: var(--card-color);}
</style>