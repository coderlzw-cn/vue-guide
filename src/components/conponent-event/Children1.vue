<script setup lang="ts">
import {ref} from "vue";

const count = ref(0);
const emits = defineEmits(["clickEvent"]);
const buttonClick = () => {
  count.value++;
  emits("clickEvent", count.value);
}
</script>

<template>
  <button class="button" @click="buttonClick">button</button>
</template>

<style scoped>

</style>
