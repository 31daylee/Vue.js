<script setup>
import { ref } from "vue";
import { useTodos } from "../store/todos";

// 전역스토어 가져오기
const todosStore = useTodos();

const text = ref(null);

const btnbAdd = () => {
  todosStore.addTodo(text.value);
};

const btnDone = (id) => {
  todosStore.doneTodo(id);
};

const btnRemove = (id) => {
  todosStore.removeTodo(id);
};
const btnClear = () => {
  todosStore.clearTodo();
};
const btnFinishedTodos = () => {
  todosStore.finishedTodos();
};
const btnNotFinishedTodos = () => {};
</script>

<template>
  <h4>MyComponent2</h4>
  <p>
    <input type="text" v-model="text" placeholder="할일 입력" />
    <button @click="btnbAdd">등록</button>
    <button @click="btnClear">초기화</button>
  </p>
  <button @click="btnFinishedTodos">완료된 할일들</button>
  <button @click="btnNotFinishedTodos">미완료된 할일들</button>
  <table border="1">
    <caption>
      완료된 할일
    </caption>
    <tr>
      <td>번호</td>
      <td>할일</td>
      <td>상태</td>
      <td>관리</td>
    </tr>
    <tr v-for="todo in todosStore.finishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done">완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>
  <table border="1">
    <caption>
      미완료된 할일
    </caption>
    <tr>
      <td>번호</td>
      <td>할일</td>
      <td>상태</td>
      <td>관리</td>
    </tr>
    <tr v-for="todo in todosStore.unfinishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="notyet">미완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
.done {
  color: green;
}
.notyet {
  color: red;
}
</style>
