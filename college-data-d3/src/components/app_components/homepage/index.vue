<template>
  <div id="homepage">
    HELLO WORLD
  </div>
</template>

<script>
import * as api from "../../../api";

export default {
  name: "HomePage",
  created() {
    api.getData();
  }
};
</script>

<style >
</style>
