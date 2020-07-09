<template>
   <div class="container">
      <header>
         <h1>Finder</h1>
      </header>
      <input v-model="input" type="text" placeholder="GitHub Login">
      <button class="button" type="button" @click="findUser()">Search</button> 
         <div class="users-list" v-for="user in users" :key="user.login">
         <router-link to="#"><img :src="user.avatar_url" :alt="user.avatar_url"/></router-link>
         <strong>{{user.name}}</strong>
         <table>
            <tr>
               <th>Login</th>
               <td>{{user.login}}</td>
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
   name: 'Finder',
   data() {
      return {
         input: '',
         users: [],
      }
   },
   methods: {
      findUser() {
         axios.get(`https://api.github.com/search/users?q=${this.input}`)
            .then(response => (this.users = response.data.items));
      }
   },
};
</script>

<style scoped>
.container {
   text-align: center;
}

h1 {
   color: var(--primary-color);
}

input {
   width: 200px;
   height: 40px;
   color: var(--primary-color);
   border: 1px solid var(--secondary-color);
   border-radius: 8px;
   padding: 0 16px;
   margin-top: 10px;
   margin-bottom: 20px;
   background: var(--card-color);
}

.users-list {
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--primary-color);
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

.button {
   cursor: pointer;
   margin-left: 6px;
   width: 70px;
   height: 40px;
   background: #e02041;
   border: 0;
   border-radius: 8px;
   color: #fff;
   font-weight: 700;
   display: inline-block;
   text-align: center;
   text-decoration: none;
   transition: filter 0.2s;
}

.button:hover {
   filter: brightness(90%);
}
</style>
