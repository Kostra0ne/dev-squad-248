<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Users />
    <hr>
    <MyLooper />
    <hr>
    <ReactiveData />
    <hr>
    <Counter :limit="10" />
    <Counter :limit="5" />
    <Counter :limit="10" />
    <hr>
    <HelloWorld msg1="Hello World" msg2="FOO BAR BAZ !!!" />
  </div>
</template>

<script>
// @ is an alias to /src
import Looper from "@/components/Looper.vue";
import Users from "@/components/Users.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import ReactiveData from "@/components/ReactiveData.vue";

export default {
  name: "Home",
  components: {
    Users,
    MyLooper: Looper,
    HelloWorld,
    Counter,
    ReactiveData
  }
};
</script>
