<template>
  <div>
    <h2 class="title">Users</h2>
    <input type="text" placeholder="add new user" v-model="newUser" />
    <button @click="addUser">add</button>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{ i + 1 }} - {{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: "",
      users: ["toto", "titi", "tutu", "tata"]
    };
  },
  methods: {
    addUser() {
      if (!this.newUser) return;
      this.users.push(this.newUser);
      this.newUser = "";
    }
  }
};
</script>

<style>
</style>