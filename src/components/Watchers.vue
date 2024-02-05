<script setup lang="ts">
import {ref, watch} from "vue";

const value = ref<string>("");
const loading = ref<boolean>(false);
const answer = ref("")

watch(value, async (newValue ) => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  answer.value = newValue
  loading.value = false
})

</script>

<template>
  <div class="card">
  <input v-model.lazy="value" :disabled="loading" placeholder="place input here"/>
  {{ loading ? "loading..." : answer}}
  </div>
</template>

<style scoped>

</style>
