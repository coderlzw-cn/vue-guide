<script setup lang="ts">
import {provide, readonly, ref} from "vue";
import ProvideInjectDemo1 from "./ProvideInjectDemo1.vue";

const app = ref<ProviderData>({
  theme: 'light',
  name: '测试盒子'
});

const changeTheme = () => {
  app.value.theme = app.value.theme === "light" ? "dark" : "light";
}

const changeName = () => {
  app.value.name = app.value.name === "测试盒子" ? "开发盒子" : "测试盒子";
}

provide("appObject", {changeTheme, changeName, app})

provide("readonlyAppObject", readonly({changeTheme, changeName, app}));

provide("theme", app.value.theme)

</script>

<template>
  <div class="card">
    <div>
      <span>当前主题： {{ app.theme }}</span>
      <span>当前名称： {{ app.name }}</span>
    </div>
    <button class="button" @click="changeTheme">修改主题</button>
    <button class="button" @click="changeName">修改应用</button>
    <ProvideInjectDemo1/>
  </div>
</template>

<style scoped>

</style>
