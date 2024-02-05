<script setup lang="ts">
import {computed, ref} from "vue";

interface Book {
  name: string;
  price: number;
  author: string;
}


// 生成20本书
const initBooks: Array<Book> = [
  {name: '《UNIX编程艺术》', price: 59, author: 'Eric S. Raymond'},
  {name: '《编程珠玑》', price: 39, author: 'Jon Bentley'},
  {name: '《代码大全》', price: 128, author: 'Steve McConnell'},
  {name: '《人月神话》', price: 98, author: 'Frederick P. Brooks Jr.'},
  {name: '《计算机程序设计艺术》', price: 75, author: 'Donald E. Knuth'},
  {name: '《深入理解计算机系统》', price: 105, author: 'Randal E. Bryant, David R. O\'Hallaron'},
  {name: '《Java编程思想》', price: 99, author: 'Bruce Eckel'},
  {name: '《数据库系统概念》', price: 120, author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan'},
  {name: '《人工智能：一种现代方法》', price: 88, author: 'Stuart Russell, Peter Norvig'},
  {name: '《计算机网络》', price: 110, author: 'Andrew S. Tanenbaum, David J. Wetherall'},
  {name: '《Effective Java》', price: 79, author: 'Joshua Bloch'},
  {name: '《图解HTTP》', price: 45, author: '上野宣'},
  {name: '《Python编程：从入门到实践》', price: 55, author: 'Eric Matthes'},
  {name: '《重构：改善既有代码的设计》', price: 92, author: 'Martin Fowler'},
  {name: '《机器学习》', price: 105, author: 'Tom M. Mitchell'},
  {name: '《操作系统概念》', price: 98, author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne'},
  {name: '《编译原理》', price: 115, author: 'Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman'},
  {name: '《设计模式》', price: 69, author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'},
  {name: '《软件工程：现代方法》', price: 82, author: 'Ian Sommerville'}
]


const books = ref<Array<Book>>([
  {name: '《算法导论》', price: 85, author: 'Thomas H. Cormen'},
])

const userinfo = ref({
  name: '张三',
  age: 18,
  height: 1.88
})


const indexComputed = computed(() => {
  return (index: number) => {
    return (index + 1).toString().padStart(2, '0')
  }
})

// <editor-fold desc="书籍数组操作">

const takeOutBook = (): Book | null => {
  const availableBooks = initBooks.filter(book => !books.value.find(({name}) => book.name === name));
  if (availableBooks.length === 0) {
    return null;
  }
  const randomInt = Math.floor(Math.random() * availableBooks.length);
  return availableBooks[randomInt];  // 随机获取一本书
}
const addBook = () => {
  const book = takeOutBook();
  if (book == null) {
    alert('没有书了')
    return
  }
  books.value.push(book);
}

const unshiftBook = () => {
  const book = takeOutBook();
  if (book == null) {
    alert('没有书了')
    return
  }
  books.value.unshift(book);
}


const sortBooks = () => {
  books.value.sort((a, b) => a.price - b.price)
}

const booksPriceSum = computed(() => {
  return books.value.reduce((total, {price}) => total + price, 0)
})

const removeBook = (index: number) => {
  books.value.splice(index, 1)
}

// </editor-fold>


</script>

<template>
  <div class="card">
    <div>
      <svg-icon name="link"/>
      v-for循环
    </div>


    <div class="flex gap-x-4">

      <div class="card-item">
        <div class="space-x-5 mb-4">
          <button class="button" @click="addBook">尾部追加 push</button>
          <button class="button" @click="books.pop()">尾部弹出 pop()</button>
          <button class="button" @click="books.shift()">头部弹出 shift()</button>
          <button class="button" @click="unshiftBook">头部追加 unshift()</button>
          <button class="button" @click="addBook">头部追加 splice()</button>
          <button class="button" @click="sortBooks">sort</button>
          <button class="button" @click="books.reverse()">reverse</button>
        </div>
        <table class="w-2/4 table-fixed w-full">
          <thead class="h-8">
          <tr class="bg-gray-100 ">
            <th class="w-2/50">序号</th>
            <th class="w-2/20">书名</th>
            <th class="w-2/50">价格</th>
            <th class="w-2/20">作者</th>
            <th class="w-2/50">操作</th>
          </tr>
          </thead>
          <TransitionGroup name="list" tag="tbody" class="bg-gray-50">
            <tr v-for="({name, price, author}, index) in books" :key="name" class="h-8">
              <td>{{ indexComputed(index) }}</td>
              <td>{{ name }}</td>
              <td>{{ price }}</td>
              <td class="">{{ author }}</td>
              <td @click="removeBook(index)"> 删除</td>
            </tr>
          </TransitionGroup>
          <tfoot>
          <tr class="bg-gray-100">
            <td colspan="2">总计：{{ books.length }} 本</td>
            <td colspan="3">总价：{{ booksPriceSum }} 元</td>
          </tr>
          </tfoot>
        </table>

      </div>
      <div class="card-item">
        <ul >
          <li class="flex " v-for="(value, key, index) in userinfo" :key="index">
            <span class="flex-1 text-left">【{{ indexComputed(index) }}】</span>
            <span class="flex-1 text-left">{{ key }}</span>
            <span class="flex-1 text-left">{{ value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}


.list-enter-from,
.list-leave-to {
  height: 2rem;
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  height: 0;
  position: absolute;
}
</style>
