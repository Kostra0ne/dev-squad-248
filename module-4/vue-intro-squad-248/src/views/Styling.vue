<template>
  <div>
    <PlayingWithCSS />
    <!-- D.I.Y -->
    <!-- create a new component (a simple div) -->
    <!-- taking/loosing a CSS is-active class @click -->
    <!-- yes, you guessed it : it's a toggle function, the Vue way -->
    <Toggler />
    <Toggler />
    <Toggler />
  </div>
</template>

<script>
import PlayingWithCSS from "@/components/PlayingWithCSS.vue";
import Toggler from "@/components/Toggler.vue";

export default {
  components: {
    PlayingWithCSS,
    Toggler
  }
};
</script>