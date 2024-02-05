<script setup lang="ts">
import {ref} from "vue";

const value = ref("hello world");


interface Book {
  name: string,
  price: number,
  readonly author: string
}

const books = ref<Array<Book>>([
  {name: '《UNIX编程艺术》', price: 59, author: 'Eric S. Raymond'},
  {name: '《编程珠玑》', price: 39, author: 'Jon Bentley'},
  {name: '《代码大全》', price: 128, author: 'Steve McConnell'},
  {name: '《人月神话》', price: 98, author: 'Frederick P. Brooks Jr.'},
  {name: '《计算机程序设计艺术》', price: 75, author: 'Donald E. Knuth'},
  {name: '《深入理解计算机系统》', price: 105, author: 'Randal E. Bryant, David R. O\'Hallaron'},
  {name: '《Java编程思想》', price: 99, author: 'Bruce Eckel'},
])

const checkedArray = ref(["《UNIX编程艺术》"]);

</script>

<template>
  <div class="card ">
    <div class="title">
      Form 表单双向绑定
    </div>
    <div flex gap-4>
      <div class="card-item space-y-3">
        <input class="input block w-full"
               :value="value" placeholder="place input here" @input="(event:any) => value=event.target.value"/>
        <input class="input block w-full" v-model="value" placeholder="place input here"/>
        <textarea class="input w-full" v-model="value" placeholder="place textarea here"/>
      </div>
      <div class="card-item">
        <div v-for="item in books" :key="item.name">
          <input type="checkbox" :value="item.name" v-model="checkedArray"/>
          <label>{{ item.name }}</label>
        </div>
        <div>{{ checkedArray.join("、") }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
