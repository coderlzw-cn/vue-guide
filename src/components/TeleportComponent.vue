<script setup lang="ts">
import {ref} from "vue";

const open = ref(false);
</script>

<template>

  <button @click="open= true" class="button">open Model</button>
  <teleport to="body">
    <div class=" fixed   bg-[#83838398] w-screen h-screen top-0 z-50" :class="open ? 'block' : 'hidden'">
      <div class="bg-white w-2/6  h-32  absolute start-2/4 top-2/4 rounded-md model">
        <h2>我是一个模态框</h2>
        <button @click="open=false" class="close-button">关闭</button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.model {
  margin-left: -16%;
  margin-top: -4rem;
}

</style>
