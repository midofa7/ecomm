<template>
  <div>
    <div class="salydar-dela-paje">
      <div class="container">
        <div class="block-sou2al">
          <div class="">
            <div class="- sou2als_2-de-site ">
              <div class="">
                <div class=""><carousel items="1" loop="true">
                  <div class=""  v-for="(item,h) in data" :key="h"><itemeblockslayder :iten="item"/></div>
                </carousel></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemeblockslayder from "../components/itemeblockslayder_item";
import carousel from 'vue-owl-carousel'

export default {
  name: "",
  components: {
    itemeblockslayder,
    carousel
  },
  data: function () {
    return {
      data :[]
    };
  },
  props: ["tayp"],
  created: function() {
 // console.log("d")
this.data = this.$store.getters.dataratle;
  console.log(this.data)
  },
  methods: {},
};
</script>
<style scoped>
</style>