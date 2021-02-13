<template>
  <div>
         <div class="block_containu">
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="block-taitell">

                                                    <h2>{{datadety.nema}}</h2>

                                                </div>
                                                <div class="block-list">
                                                    <p class="text-detrepsint">
                                               {{datadety.decripson}}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5">
                                                <div class="row">

                                                    <div class="col-12 col-md-12">
                                                        <div class="block-image">
                                                            <img :src="datadety.img" />
                                                            
                                                            <span>En stock</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="block-bt">
                                            <a class="" href="#">
                                                <h2>
                                                    <var>{{datadety.prix}} <sup> dh</sup></var>
                                                </h2>
                                            </a>

                                        </div>
                                    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
    datadety: {}
    };
  },
  props: ["iten"],
  created: function() {
    this.datadety= this.iten;
     // console.log(this.datadety.img)

  },
  methods: {
   
 
  }
};
</script>
<style scoped>

</style>