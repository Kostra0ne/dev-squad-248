<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>
      usefull tut's : <br />
      https://www.youtube.com/watch?v=nyJSd6V2DRI&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07
      https://www.youtube.com/watch?v=2CSr2vBApSI&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo
      
    </p>
    <hr />
    <HelloWorld msg1="Hello World" msg2="FOO BAR BAZ !!!" />
    <hr />
    <Users />
    <hr />
    <MyLooper />
    <hr />
    <ReactiveData />
    <hr />
    <Counter :limit="10" />
    <Counter :limit="5" />
    <Counter :limit="10" />
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
