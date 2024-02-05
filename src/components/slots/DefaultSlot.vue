<script setup lang="ts">

</script>

<template>
  <header>
    <!-- 具名查插槽，插槽名称为 header -->
    <slot name="header">
      我是默认的header
    </slot>
  </header>
  <main>
    <!-- 默认插槽 -->
    <slot>
      我是默认的main
    </slot>
  </main>
  <footer>
    <slot name="footer">
      我是默认的footer
    </slot>
  </footer>
</template>

<style scoped>

</style>
