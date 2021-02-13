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
this.data =
  console.log(this.data)

var tab = [];
var tab2 = [];
 tab =this.$store.getters.dataratle;
for (var i=0; i< tab.length ; i++){
  if(i<7){
    tab2.push(tab[i])
  }
}
this.data =tab2;

  },
  methods: {},
};
</script>
<style scoped>
</style>