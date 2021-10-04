<template>
  <header class="header header-nav-bar">

    <div class="logo">
      <h1>
        <router-link to="/">Aurora</router-link>
      </h1>
    </div>

  </header>
</template>

<script setup lang="ts">

</script>
<style lang="scss" scoped>
header{
  height:50px;
  display: flex;
  align-items: center;
  padding:0 10px;
  background-color:white;
  border-bottom:solid 1px #efefef;
  margin-bottom: 7px;
}
a{
  text-decoration:none;
  color:#409EFF;
}
</style>
