<template>
  <div class="container">
      <header>
         <h1>{{ user.login }}</h1>
      </header>
      <div class="user-data">
         <img :src="user.avatar_url" :alt="user.avatar_url"/>
         <strong>{{user.name}}</strong>
         <table>
            <tr v-if="user.email">
               <th>Email</th>
               <td>{{user.email}}</td>
            </tr>
            <tr v-if="user.bio">
               <th>Bio</th>
               <td>{{user.bio}}</td>
            </tr>
            <tr v-if="user.company">
               <th>Company</th>
               <td>{{user.company}}</td>
            </tr>
            <tr v-if="user.location">
               <th>Location</th>
               <td>{{user.location}}</td>
            </tr>
            <tr v-if="user.repos_url">
               <th>Repositories</th>
               <router-link to="user.repos_url"><td>{{user.repos_url}}</td></router-link>
            </tr>
         </table>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'UserInfo',
   props: ['user'],
   data() {
      return {
         repositories: [],
      }
   },
   methods: {
      findRepos() {
         axios.get(`https://api.github.com/users/${this.input}/repos`)
            .then(response => (this.repositories = response.data.items));
      }
   },
}
</script>

<style>

</style>