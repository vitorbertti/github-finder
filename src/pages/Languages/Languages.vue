<template>
   <div class="container">
      <h1 class="title">Languages</h1>
      <input class="search" v-model="inputLanguage" type="text" placeholder="Language" />
      <button class="button" type="button" @click="findLanguageNumber()">Search</button>
      <div class="data" v-if="repositories">
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
            }).catch(() => {
               alert('Language does not found.');
            })
         }
      },
   },
};
</script>

<style scoped></style>
