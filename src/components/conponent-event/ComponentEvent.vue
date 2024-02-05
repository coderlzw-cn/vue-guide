<script setup lang="ts">

import Children1 from "./Children1.vue";

const clickEvent = (count: number) => {
  console.log(count)
}

</script>

<template>
  <Children1 @click-event="clickEvent"/>
</template>

<style scoped>

</style>
