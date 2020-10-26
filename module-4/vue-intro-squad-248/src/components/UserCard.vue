<template>
  <!--  here: defined a custom event named user-clicked (can be whatever name you need) -->
  <div class="user card">
    name: {{ user.name }} <br />
    lastname: {{ user.lastname }} <br />
    age: {{ user.age }} <br />
    email: {{ user.email }}
    <button @click="$emit('user-select', user)">select</button>
    <button @click="$emit('user-remove', user)">remove</button>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style scoped>
.card {
  margin: 20px auto;
  border: 1px solid;
  padding: 10px;
  border-radius: 0.4rem;
  max-width: 300px;
}
</style>