<script setup lang="ts">

import DefaultSlot from "./DefaultSlot.vue";
import ScopedSlot from "./ScopedSlot.vue";
</script>

<template>
  <div>
    <default-slot>


      <template v-slot:header>
        header 内容
      </template>
      1221
      <template #footer>
        footer 内容
      </template>

    </default-slot>

    <scoped-slot v-slot="slotProps">
      {{ slotProps.books }}
    </scoped-slot>

  </div>
</template>

<style scoped>

</style>
