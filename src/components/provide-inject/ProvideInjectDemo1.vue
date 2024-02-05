<script setup lang="ts">
import {inject} from "vue";

const {app} = inject<Record<string, any>>("appObject", {
  theme: "light",
  name: "测试盒子"
})

const themeHandler = () => {
  app.value.theme = app.value.theme === "light" ? "dark" : "light";
}
</script>


<template>
  <div>
    <h4>子组件1</h4>
    <span>当前主题： {{ app?.theme }}</span>
    <button @click="themeHandler">修改主题 {{ app.theme }}</button>
    <button @click="() => {app.name = '修改后的名字'}">修改名字</button>
  </div>
</template>

<style scoped>

</style>
