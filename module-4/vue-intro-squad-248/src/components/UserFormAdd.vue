<template>
  <form @submit.prevent="$emit('add-new-user', user)">
    <input type="text" placeholder="name" v-model="user.name" />
    <input type="number" placeholder="age" v-model.number="user.age" />
    <input type="text" placeholder="email" v-model="user.email" />
    <button>add user</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
};
</script>
