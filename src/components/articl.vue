<template>
  <div>
    <div class=" block-Articles_article">
      <div class="block-Articles_article__img">
        <img :src="uneArticle.img" /> 
       
      </div>
      <div class="block-Articles_article__title">
        <div class="block-Articles_article__nouveau">
          <p>{{uneArticle.type}}</p>
          <img class="img-nouveau" src="../assets/image/nouveau.png" />
          
        </div>
        <h2>{{uneArticle.nema}}</h2>
      </div>
      <div class="block-Articles_article__stok">
        <span> le prix</span>
        <h2>
          <var>{{uneArticle.prix}} <sup> dh</sup></var>
        </h2>
      </div>
      

      <div
        class="block-Articles_article__buttn"
        data-toggle="modal"
        data-target="#myModal"
      >
        <a href="#"
          ><div class="container">
            <div class="row">
              <div class="col-3"><img src="../assets/image/panier.svg" /></div>
              <span class="col-9">ajouter au panier </span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div></div>
     <div class="blokpopqp">
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <popuep :deteAr="uneArticle" v-on:a="f1($event)"/>
      </div>
    </div>
  </div></div>
</template>

<script>
import popuep from "./popau";
export default {
  name: "Home",
  components: {
    popuep,
  },
  data: function() {
    return {
      uneArticle :{},
      aaa:[]
    };
  },
  props: ["data"],
  created: function() {
    this.uneArticle =this.data;
  },
  methods: {
  f1:function(a){
      this.aaa =a;
      // console.log(this.aaa,8)
       this.$emit("cc",this.aaa);
  }
  },
  
};
</script>
<style scoped></style>
