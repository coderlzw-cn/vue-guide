<script setup lang="ts">
import {ref} from "vue";

const active = ref(false)

</script>

<template>
  <div class="card">
    <div :class="{active}">
      <span>ClassAndStyle</span>
      <button @click="active=!active">修改 active {{ active }}</button>
    </div>

    <div>
      <span :style="{color: active? 'red': '#747bff'}">ClassAndStyle</span>
      <button @click="active=!active">修改 active {{ active }}</button>
    </div>
  </div>

</template>

<style scoped>

div.active {
  color: #747bff;
}

</style>
