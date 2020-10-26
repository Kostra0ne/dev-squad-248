<template>
  <!-- webcomponents : check devbytes videos (youtube)  -->
  <div
    class="toggler"
    :class="{ 'is-active': isActive }"
    @click="isActive = !isActive;"
  >
    im toggler !!!
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.toggler {
  border: 2px solid;
  border-radius: 0.4rem;
  cursor: pointer;
  margin: 20px auto;
  max-width: 300px;
}

.is-active {
  background: firebrick;
  color: whitesmoke;
}
</style>