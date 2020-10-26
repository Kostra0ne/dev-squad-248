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
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>