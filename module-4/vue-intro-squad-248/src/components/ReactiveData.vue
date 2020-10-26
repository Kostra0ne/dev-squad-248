<template>
  <form @submit.prevent="registerPlayer">
    <h2 class="title">2way Binding Rocks !!!</h2>
    <span>{{ playerName }}</span> : <input type="text" placeholder="player name here" v-model="playerName" /><br>
    <span>{{ score }}</span> : <input type="number" v-model.number="score" />
    <button>submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      playerName: "default player name"
    };
  },
  methods: {
    registerPlayer() {
      console.log(this.playerName, this.score);
      // axios.post here ....
    }
  }
};
</script>