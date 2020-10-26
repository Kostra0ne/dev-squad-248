<template>
  <div>
    <h1>Nice trees in Paris :)</h1>
    <p v-if="!trees.length">...loading trees dataset</p>
    <ul>
      <li v-for="(tree, i) in trees" :key="i">
        {{ tree.fields.libellefrancais }}
      </li>
    </ul>
  </div>
</template>

<script>
// check the doc here : https://fr.vuejs.org/images/lifecycle.png
import axios from "axios";

export default {
  created() {
    try {
      this.getTrees();
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      trees: []
    };
  },
  methods: {
    async getTrees() {
      const res = await axios.get(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais"
      );
      this.trees = res.data.records; // conceptualy, that command represe,ts the react's setState
    }
  }
};
</script>

<style>
</style>