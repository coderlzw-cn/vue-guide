<script setup lang="ts">
import {computed, ref} from "vue";

let books = ref([
  {title: 'Vue 3 Guide', author: 'John Doe', publishedAt: '2022-01-01', price: 20},
  {title: 'Vue 3 Cookbook', author: 'Jane Smith', publishedAt: '2021-12-3', price: 15},
]);

// 总价格
const totalPrice = computed(() => {
  return books.value.reduce((total, book) => total + book.price, 0);
})

</script>

<template>
  <div>
    <div class="title-container">
      <slot name="title">
        默认标题
      </slot>
    </div>
    <div class="main-container">
      <slot :books="books" :totalPrice="totalPrice"></slot>
    </div>
    <div class="footer-container">
      <slot name="footer">
        默认页脚
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>
