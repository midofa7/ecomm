<template>
  <div class="">
       <div class=" block-Articles">
      <div class="container">
        
        <div class="row w-100 mx-auto">
          
          <div class="col-12 col-md-4"  v-for="(item,h) in datafetre " :key="h"><articl :data="item"  v-on:cc="f1($event)"/>   </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import articl from "./articl";
export default {
  name: "Home",
   components: {
    articl
  },
  
  data: function() {
    return {
    taypArticle:this.tayp,
    datafetre :[],
    aaa:[]
    };
  },
  props: ["tayp"],
  created () {
 // console.log("d")
this.datafetre = this.$store.getters.dataarticle(this.taypArticle)
  
  },
  methods: {
    f1:function(a){
      this.aaa =a;
      // console.log(this.aaa)
         this.$emit("datapany",this.aaa);
  }
 
  }
};
</script>
<style scoped>

</style>