<template>
   <div id="app">
      <Nav />
      <router-view />
   </div>
</template>

<script>
import Nav from './components/Nav';

export default {
   name: 'App',
   components: {
      Nav,
   },
};
</script>

<style>
#app {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

*,
button,
input {
   border: 0;
   outline: 0;
   font-family: 'Roboto', sans-serif;
}

strong {
   text-align: center;
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

.container {
   text-align: center;
}

.data {
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: var(--primary-color);
}

.img-link {
   width: 200px;
   margin: auto;
}

.link-table {
   text-decoration: none;
   color: #3c8ce7;
}

.profile {
   height: 200px;
   width: 200px;
   margin: auto;
   padding: 12px;
   border-radius: 50%;
}

.search {
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

.title {
   color: var(--primary-color);
}
</style>
