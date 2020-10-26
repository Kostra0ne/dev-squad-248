<template>
  <div>
    <div>Display D.I.Y ? <input type="checkbox" v-model="hasDIY" /></div>

    <Trees v-show="!hasDIY" />

    <div v-if="hasDIY">
      <hr />
      <h2>D.I.Y</h2>
      <p>
        Pick any API you like.<br />
        Remember :
        <a href="https://www.programmableweb.com/" target="_blank">
          <b>programmableweb</b></a
        >
        is a great resource website !<br />
        Then fetch and display a data set !
      </p>
    </div>
  </div>
</template>

<script>
import Trees from "@/components/Trees.vue";

export default {
  name: "AJAX",
  data() {
    return {
      hasDIY: false
    };
  },
  components: {
    Trees
  }
};
</script>
