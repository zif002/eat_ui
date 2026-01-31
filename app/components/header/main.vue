<template>
       <div class="container-menu">
            <div> 
              <NavHeader/>
            </div>
          

          <div class="container-logo">
          <NuxtLink class="logo" :to="$localePath('/')">
            <NuxtImg src="/images/vkusno_i_nedorogo.jpg" width="64"/> 
          </NuxtLink>
          </div>

          
           <NavAuth/>
       </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .container-menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
     align-items: center;
  }
  .container-logo {
    text-align: center;
  }
</style>