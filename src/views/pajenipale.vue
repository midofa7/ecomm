<template>
  <div>
    <div class="block_headre"><topmunepacipla /></div>
    <div class="block_conntune"><router-view /></div>
    <div class="footre"><footrr /></div>
  </div>
</template>

<script>
import topmunepacipla from "../components/topmunepacipla";

import footrr from "../components/footer";
export default {
  name: "Home",
  components: {
    footrr,
    topmunepacipla,
  },
  data: function () {
    return {};
  },
  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>