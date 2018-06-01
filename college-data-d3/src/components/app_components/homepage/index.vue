<template>
  <div id="homepage">
    {{pageData}}
  </div>
</template>

<script>
import * as api from "../../../api";

const initialState = () => {
  return {
    pageData: {}
  };
};

export default {
  name: "HomePage",
  data() {
    return initialState();
  },
  methods: {
    loadData(data) {
      this.$data.pageData = data;
    }
  },
  created() {
    let value;
    api.getData(value);
    this.loadData(value);
  }
};
</script>

<style >
</style>
