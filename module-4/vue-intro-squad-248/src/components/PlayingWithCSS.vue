<template>
  <div>
    <span>current level : </span>
    <b
      :style="{ 'font-weight': hasLowLevel ? 'bold' : 'normal' }"
      :class="{ danger: hasLowLevel, safe: !hasLowLevel }"
      >{{ level }}
    </b>
    <br />
    <input type="range" v-model="level" max="10" min="0" />
    <!-- bonus : add a warning message if level's value is less than 5 -->
    <p v-if="hasLowLevel">
      Watchaaa : the level is super low !!!
    </p>
    <p v-else>
      All good mate : the level is totaly fine !!!
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    hasLowLevel() {
      // when level's value is changing, this function is executed
      // if the returned value changes, the component will re-render
      return this.level < 4;
    }
  },
  data() {
    return {
      level: 10
    };
  }
};
</script>

<style scoped>
.safe {
  color: forestgreen;
}
.danger {
  color: firebrick;
}
</style>