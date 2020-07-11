<template>
   <div class="container" v-if="!repos">
      <div class="user-data" v-if="user">
         <a :href="link" target="_blank" class="img-link"
            ><img :src="user.avatar_url" :alt="user.avatar_url"
         /></a>
         <strong>{{ user.name }}</strong>
         <table>
            <tr v-if="user.email">
               <th>Email</th>
               <td>{{ user.email }}</td>
            </tr>
            <tr v-if="user.bio">
               <th>Bio</th>
               <td>{{ user.bio }}</td>
            </tr>
            <tr v-if="user.company">
               <th>Company</th>
               <td>{{ user.company }}</td>
            </tr>
            <tr v-if="user.location">
               <th>Location</th>
               <td>{{ user.location }}</td>
            </tr>
            <tr>
               <th id="repoLabel">Repositories</th>
               <button id="repoLink" class="button-link" @click="findRepos()"><td>Repositories</td></button>
            </tr>
            <tr
               is="Repositories"
               :repository="repository"
               v-for="repository in repositories"
               :key="repository.id"
            ></tr>
         </table>
      </div>
   </div>
   <div v-else>
      <div class="user-data" v-if="user">
         <table>
            <tr v-if="user.login">
               <th>Login</th>
               <td>{{ user.login }}</td>
            </tr>
            <tr
               is="Repositories"
               :repository="repository"
               v-for="repository in repositories"
               :key="repository.id"
            ></tr>
         </table>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import Repositories from './Repositories';

export default {
   name: 'UserInfo',
   props: ['login', 'repos'],
   components: {
      Repositories,
   },
   data() {
      return {
         repositories: [],
         user: null,
         link: `https://github.com/${this.login}`,
      };
   },
   methods: {
      findRepos() {
         axios.get(`https://api.github.com/users/${this.login}/repos?per_page=100`).then((response) => {
            this.repositories = response.data;
            if (!this.repos) {
               document.querySelector('#repoLink').hidden = true;
            }
         });
      },
   },
   created() {
      axios.get(`https://api.github.com/users/${this.login}`).then((response) => (this.user = response.data));
      if (this.repos) {
         this.findRepos();
      }
   },
};
</script>

<style scoped>
.img-link {
   text-align: center;
}

.user-data {
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--primary-color);
}

.button-link {
   background: none !important;
   border: none;
   padding: 0 !important;
   color: #3c8ce7;
   cursor: pointer;
   font-size: 16px;
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

th,
td {
   text-align: left;
   padding: 8px 40px;
}

tr:nth-child(even) {
   background-color: var(--card-color);
}
</style>
