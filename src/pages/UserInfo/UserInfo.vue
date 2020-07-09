<template>
  <div class="container">
      <div class="user-data" v-if="user">
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
               <router-link class="link-table" :to="user.repos_url"><td>Repositories</td></router-link>
            </tr>
         </table>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'UserInfo',
   props: ['login'],
   data() {
      return {
         repositories: [],
         user: null,
      }
   },
   methods: {
      findRepos() {
         axios.get(`https://api.github.com/users/${this.input}/repos`)
            .then(response => (this.repositories = response.data.items));
      }
   },
   created() {
      axios.get(`https://api.github.com/users/${this.login}`)
            .then(response => (this.user = response.data));
   },
}
</script>

<style scoped>
.user-data {
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--primary-color);
}

strong {
   text-align: center;
}

img {
   height: 200px;
   width: 200px;
   margin: auto;
   padding: 12px;
   border-radius: 50%;
}


table {
  border-collapse: collapse;
  margin: 30px auto;
  color: var(--primary-color);
}

th, td {
  text-align: left;
  padding: 8px 40px;
}

tr:nth-child(even) {background-color: var(--card-color);}
</style>