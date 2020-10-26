<template>
  <div class="counter home">
    <button @click="decrementCount">decrement</button>
    <button @click="incrementCount">increment</button>
    <hr />
    <span>{{ count }}</span>
    <hr />
    <span v-if="count >= limit">limit reached !!!</span>
    <span v-else>limit not reached yet !!!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    }
  },
  props: {
    limit: Number
  }
};
</script>

<style lang="scss" scoped>
$blue: dodgerblue;

.counter {
  max-width: 320px;
  margin: 10px auto 10px;
  border: 2px solid;
  border-radius: 0.4rem;
  padding: 10px;
  // .counter button
  button {
    background: whitesmoke;
    color: $blue;
    font-weight: bold;
    border-radius: inherit;
    padding: 10px;
  }
}
</style>