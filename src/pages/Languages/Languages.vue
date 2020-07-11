<template>
   <div class="container">
      <h1>Languages</h1>
      <input v-model="inputLanguage" type="text" placeholder="Language" />
      <button class="button" type="button" @click="findLanguageNumber()">Search</button>
      <div class="lamguage-list" v-if="repositories">
         <table>
            <tr>
               <th>Repositories using the language</th>
               <td>{{ repositories }}</td>
            </tr>
         </table>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'Languages',
   data() {
      return {
         inputLanguage: '',
         repositories: null,
      };
   },
   methods: {
      findLanguageNumber() {
         if (this.inputLanguage) {
            axios
               .get(
                  `https://api.github.com/search/repositories?q=language:${this.inputLanguage.toLowerCase()}`
               )
               .then((response) => {
                  this.repositories = response.data.total_count;
               });
         }
      },
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

.user-data {
   display: flex;
   flex-direction: column;
   justify-content: center;
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
