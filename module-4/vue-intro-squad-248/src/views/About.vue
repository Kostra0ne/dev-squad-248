<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>

    <h2>DIY 1</h2>
    <p>
      Create a TextBlock component accepting a String as prop.<br />
      Use several TextBlocks components in this about page to display some
      variable content.<br />
    </p>
    <a href="https://fr.vuejs.org/v2/guide/components-props.html">props</a>
    <hr />

    <h2>DIY 2</h2>
    <p>
      Create a UserCard component accepting an Object as prop.<br />
      The prop is an object representing a User.<br />
      Display the users keys/values (name, lastname, age email).<br />
      Bonus : create an array of users objects in data() {}, then loop through
      it to display several UserCard components !!!

      <a href="https://fr.vuejs.org/v2/guide/list.html">loops</a>
    </p>

    <hr />
    <UserFormAdd v-on:add-new-user="handleAddUser" />
    <hr />

    <div v-if="selectedUser">
      <span>the selected user is {{ selectedUser.name }}</span>
      <button @click="selectedUser = null">unselect</button>
    </div>

    <UserCard
      v-for="(user, i) in users"
      :key="i"
      :user="user"
      v-on:user-select="handleUserSelect"
      v-on:user-remove="handleUserRemove"
    />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import UserFormAdd from "@/components/UserFormAdd.vue";

export default {
  components: {
    UserCard,
    UserFormAdd
  },
  methods: {
    handleAddUser(newUser) {
      this.users.push(newUser);
    },
    handleUserSelect(user) {
      this.selectedUser = user;
    },
    handleUserRemove(user) {
      this.users = this.users.filter(u => u.name != user.name);
    }
  },
  data() {
    return {
      selectedUser: null,
      users: [
        { name: "toto", age: 23, email: "foo@shop.com" },
        { name: "titi", age: 44, email: "bar@dev.com" },
        { name: "tutu", age: 55, email: "baz@code.com" }
      ]
    };
  }
};
</script>
<style scoped>
.title {
  color: red;
}
</style>