<template>
  <div>
    <!-- here : link the input's value to the state value -->
    <input type="range" v-model.number="count" min="1" max="100" step="1" />
    <ul>
      <!-- here : loop through count and display one li per value -->
      <li v-for="(number, i) in count" :key="i">{{ number }}</li>
      <!-- v-for acts as a for loop AND also a for..in loop -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: "",
      count: 1,
    };
  }
};
</script>

<style>
</style>