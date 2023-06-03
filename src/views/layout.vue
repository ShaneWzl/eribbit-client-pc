<template>
  <!-- 顶部组件 -->
  <nav>顶部组件</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
    <router-view/> 
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
export default {
   name: 'LayOut'
}
</script>

<style>

</style>