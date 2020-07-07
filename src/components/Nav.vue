<template>
   <nav>
      <div class="logo">
         <h1>GitHub Finder</h1>
      </div>
      <div class="links">
         <router-link class="link selected" to="/">Finder</router-link>
         <router-link class="link" to="/languages">Languages</router-link>
      </div>
      <div class="theme-switch-wrapper">   
            <label class="theme-switch">
               <input type="checkbox" id="checkbox" @change="themeChange" />
               <div class="slider round"></div>
            </label>
            <img :src="draculaLogo" alt="dracula logo" />
      </div>
   </nav>
</template>

<script>
import draculaLogo from '../assets/draculaLogo.svg'

export default {
   name: 'Nav',
   data: function() {
      return {
         draculaLogo,
      }
   },
   methods: {
      themeChange: function(e) {
         if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dracula');
         } else {
            document.documentElement.removeAttribute('data-theme');
         }
      }
   }
};
</script>

<style>
nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 50%;
   margin: auto;
   color: var(--primary-color);
}

.link {
   padding: 20px;
   text-decoration: none;
   color: var(--primary-color);
}

.selected {
   font-weight: bold;
}

body {
   background-color: var(--bg-color);
   color: var(--font-color);
}

:root {
   --bg-color: #f5f5f5;
   --card-color: #fff;
   --primary-color: #333;
   --secondary-color: #dcdce6;
}

[data-theme='dracula'] {
   --bg-color: #282a36;
   --card-color: #44475a;
   --primary-color: #fff;
   --secondary-color: #999;
}

.theme-switch-wrapper {
   right: 20px;
   top: 10px;
   display: flex;
   align-items: center;
}

.theme-switch-wrapper img {
   height: 32px;
   margin-right: 10px;
}

.theme-switch {
   display: inline-block;
   height: 34px;
   position: relative;
   width: 60px;
   margin-right: 5px;
}

.theme-switch input {
   display: none;
}

.slider {
   background-color: #ccc;
   bottom: 0;
   cursor: pointer;
   left: 0;
   position: absolute;
   right: 0;
   top: 0;
   transition: 0.4s;
}

.slider:before {
   background-color: #fff;
   bottom: 4px;
   content: '';
   height: 26px;
   left: 4px;
   position: absolute;
   transition: 0.4s;
   width: 26px;
}

input:checked + .slider {
   background-color: #66bb6a;
}

input:checked + .slider:before {
   transform: translateX(26px);
}

.slider.round {
   border-radius: 34px;
}

.slider.round:before {
   border-radius: 50%;
}
</style>
