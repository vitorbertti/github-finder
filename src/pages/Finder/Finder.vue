<template>
   <div class="container">
      <header>
         <h1>Finder</h1>
      </header>
      <input type="text">
   </div>
</template>

<script>
export default {
   name: 'Finder',
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
   background: var(--card-color);
}
</style>
