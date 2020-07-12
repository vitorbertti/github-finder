<template>
   <div class="container">
      <header>
         <h1 class="title">Finder</h1>
      </header>
      <input class="search" v-model="input" type="text" placeholder="GitHub Login" />
      <button class="button" type="button" @click="findUser()">Search</button>
      <div class="data" v-for="user in users" :key="user.login">
         <router-link class="img-link"
            :to="{ name: 'user-info', params: { login: user.login, repos: null }, path: user.login }"
            ><img class="profile" :src="user.avatar_url" :alt="user.avatar_url"
         /></router-link>
         <strong>{{ user.name }}</strong>
         <table>
            <tr>
               <th>Login</th>
               <td>{{ user.login }}</td>
            </tr>
            <tr v-if="user.repos_url">
               <th>Repositories</th>
               <router-link
                  class="link-table"
                  :to="{ name: 'user-info', params: { login: user.login, repos: 'repos' }, path: user.login }"
                  ><td>Repositories</td></router-link
               >
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
      };
   },
   methods: {
      findUser() {
         if (this.input) {
            axios.get(`https://api.github.com/search/users?q=${this.input}`).then((response) => {
               this.users = response.data.items;
            });
         }
      },
   },
   mounted() {
      if (localStorage.input) {
         this.input = localStorage.input;
         this.findUser();
      }
   },
   watch: {
      input(newInput) {
         localStorage.input = newInput;
      },
   },
   beforeDestroy() {
      console.log('Mounted destroyed')
  }
};
</script>

<style scoped></style>
