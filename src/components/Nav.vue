<template>
   <nav>
      <div class="logo">
         <h1>GitHub Finder</h1>
      </div>
      <div class="links">
         <router-link class="link selected" to="/">Finder</router-link>
         <router-link class="link" to="/languages">Languages</router-link>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'Nav',
};
</script>

<style scoped>
nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 50%;
   margin: auto;
}

.link {
   padding: 20px;
   text-decoration: none;
   color: black;
}

.selected {
   font-weight: bold;
}
</style>
