<template>
       <div class="container-menu">
          <NavHeader/>
          {{$t("welcome")}}
           <NavAuth/>
       </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .container-menu {
    display: flex;
    justify-content: space-between;
  }
</style>