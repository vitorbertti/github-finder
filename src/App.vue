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
body {
   background: #f0f0f5;
}
</style>
