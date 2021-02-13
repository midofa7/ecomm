<template>
  <div>{{datapanye.naberdecomonde}}
 
   <div class="slayder"><slayder/></div>
     <div class="aticle"><lesartics :tayp="tayepdete" v-on:datapany="f1($event)" /></div>
  
  </div>
</template>

<script>

import slayder from "../components/slayade";
import lesartics from "../components/lesartics";
export default {
  name: "",
  components: {
    
    lesartics,
    slayder
  },
  data: function() {
    return {
      tayepdete:this.type,
      datapanye:[]
    };
  },
  props: ["type"],
  created: function() {
  
  },

  methods: {
    f1:function(a){
      this.datapanye =a;
        console.log(this.datapanye,66)
  }
 
  }
};
</script>
<style scoped>

</style>