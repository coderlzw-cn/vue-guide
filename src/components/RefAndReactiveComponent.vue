<script setup lang="ts">
import {reactive, ref, toRef, toValue} from "vue";

const reactiveState = reactive({
  user: {
    name: '张三',
    age: 20,
    other: {
      hobby: 'basketball'
    }
  },
  count: 0
})
const refState = ref({
  user: {
    name: '张三',
    age: 20,
    other: {
      hobby: 'basketball'
    }
  },
  count: 0
})

// ------ reactive 基本使用 start------
const changeReactiveState = () => {
  reactiveState.user = {
    name: '李四',
    age: 30,
    other: {
      hobby: 'football'
    }
  }

  // ✅ 可以这样写
  reactiveState.count = reactiveState.count + 1
  /**
   * ❌ 不能这样写，因为这样写的话，count的值不会变化，会丢失响应式
   * let {count}= reactiveState
   * count++;
   */

}

const changeReactiveStateItem = () => {
  reactiveState.user.age = 30
  reactiveState.user.name = "李四"
  reactiveState.user.other.hobby = "football"
  reactiveState.count = reactiveState.count + 1
}
// ------ reactive 基本使用 end------

// ------ ref 基本使用 start------
const changeRefState = () => {
  refState.value.user = {
    name: '李四',
    age: 30,
    other: {
      hobby: 'football'
    }
  }
  // ✅ 保持响应式
  refState.value.count++;
  /**
   * ❌ 不能这样写，因为这样写的话，count的值不会变化，会丢失响应式
   * let {count} = refState.value
   * count++;
   */
}

const changeRefStateItem = () => {
  refState.value.user.age = 30
  refState.value.user.name = "李四"
  refState.value.user.other.hobby = "football"
  refState.value.count = refState.value.count + 1
}
// ------ ref 基本使用 end------

// 创建一个只读的响应式引用，它指向另一个响应式的值或 ref，并且当源发生变更时，也会跟着变更。
const readonlyCount = toRef(() => refState.value.count);
// 双向 ref，会与源属性同步
const refCount = toRef(refState.value, 'count');

// ------ toValue start------
const toValue1 = toValue(refState.value.count); // 0


</script>

<template>

  <div class="card flex flex-wrap">
    <!--  Reactive 基本使用  -->
    <div class="card-item">
      <div class="mb-4">
        Reactive 基本使用
      </div>
      <div class="space-x-3">
        <button class="button" @click="changeReactiveStateItem">修改单个属性</button>
        <button class="button" @click="changeReactiveState">批量修改属性</button>
      </div>
      <p>name：{{ reactiveState.user.name }}</p>
      <p>age：{{ reactiveState.user.age }}</p>
      <p>hobby：{{ reactiveState.user.other.hobby }}</p>
      <p>点击次数：{{ reactiveState.count }}</p>
    </div>
    <!-- Ref 基本使用 -->
    <div class="card-item">
      <div class="mb-4">
        Ref 基本使用
      </div>
      <div class="space-x-3">
        <button class="button" @click="changeRefStateItem">修改单个属性</button>
        <button class="button" @click="changeRefState">批量修改属性</button>
      </div>
      <p>name：{{ refState.user.name }}</p>
      <p>age：{{ refState.user.age }}</p>
      <p>hobby：{{ refState.user.other.hobby }}</p>
      <p>点击次数：{{ refState.count }}</p>
    </div>


    <div class="card-item ">
      <div class="mt-4">响应式工具</div>
      <button class="button" @click="refCount++">修改双向ref的值</button>
      <p>普通值，没有响应式：{{ toValue1 }}</p>
      <p>双向ref，具有响应式：{{ refCount }}</p>
      <p>只读，跟随源变化：{{ readonlyCount }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
