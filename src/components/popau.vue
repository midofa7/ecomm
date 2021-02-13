<template>
  <div>

     <div class="modal-content">
              
              <div class="mod">
                <div class="block-Articles_article__nouveau">
                    <p>{{ardata.type}}</p>
                    <img class="img-nouveau" src="../assets/image/nouveau.png">
                  </div>
                <button type="button" class="close" data-dismiss="modal">&times;</button>

    <div class="bloocl-detay block-detail_Article">
        <div class="container"><div class="popapanry">
          <div class="block_containu">
            <div class="row">
              <div class="col-12 col-md-3">
                <div class="row">
                  
                  <div class="col-12 col-md-12">
                    <div class="block-image">
                      <img :src="ardata.img" />
                      <span>En stock</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="block-taitell">
                  
                  <h2>{{ardata.nema}}</h2>
                
                </div>
                <div class="block-list">
                  <p class="text-detrepsint">
                  {{ardata.decripson}}          
               </p>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="block-prix">
                  <h2>
                    <var>{{ardata.prix}} <sup> dh</sup></var>
                  </h2>
                 
                </div>
              </div>
            </div>
            <div class="block-bt" v-on:click="AjouteApanye(ardata.id)">
                  <a class="" href="#"><span>Ajouter au panier</span></a>
              
            </div>
          </div>
          <div :class="classlacess" >
          <div class="lefromular-decomonde">
          <h2>NE SOYEZ PAS TIMIDE!</h2>
           <div class="line">
            <div class="row">
               <div class="col-6">
                  <div class="input">
                  
                  <input type="text" placeholder="Name" v-model="comende.NemaPersone"/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="input">
                  
                  <input type="text" placeholder="email" v-model="comende.email"/>
                  </div>
               </div>
            </div>
           </div>
            <div class="line">
            <div class="row">
               <div class="col-6">
                  <div class="input">
                  <input type="text" placeholder="adress" v-model="comende.aderss_cline"/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="input">
                
                  <input type="text" placeholder="tel" v-model="comende.tel"/>
                  </div>
               </div>
            </div>
           </div>
             <div class="line">
            <div class="row">
               <div class="col-6">
                  <div class="number">
                  <input type="number" placeholder="Qontute"  v-model="comende.leprdoui.Qontute"/>
                  </div>
               </div>
               <div class="col-6">
                  <div class="botton">
                  <button   v-on:click="ajetecomende(comende)" >vlide</button>
                  </div>
               </div>
            </div>
           </div>
           

          </div>
          </div>
          </div>
        </div>
      </div>
              </div>
              
            </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
    ardata: this.deteAr,
    numble:null,
    classlacess:"from",
    comende:{
            id: "",
            NemaPersone: "",
            email: "",
            aderss_cline:"",
            tel:"",
            leprdoui: 
                {
                    id:"",
                    type:"",
                    nemaProduit:"",
                    prex:0,
                    Qontute:0
                }
            ,
            totaldePrex: 0
        }


    
    }
  },
  props: ["deteAr"],
  created: function() {
    
  },
  methods: {
      ajetecomende:function(a){
       // console.log(a);
          a.leprdoui.prex = this.ardata.prix;
        a.leprdoui.nemaProduit= this.ardata.nema;
        a.leprdoui.type= this.ardata.type;
        a.leprdoui.id= this.ardata.id;
        a.totaldePrex=this.ardata.prix *a.leprdoui.Qontute
      //  console.log(a)
      
     
   this.$store.commit("ajoutecomend",a);
   var data =  this.$store.getters.getdatacomend;
   console.log(data);
      }
   ,
  AjouteApanye:function(id){
   this.$store.commit("ajouteapeny",id);
   var datapaane =  this.$store.getters.datapanye;
    
   this.numble =datapaane.naberdecomonde
  // console.log(datapaane);
    this.$emit("a",datapaane);
    if(this.classlacess.indexOf("fachelalacess")<0){
      this.classlacess =this.classlacess
      +" fachelalacess";
    }else{
      this.classlacess="from";
    }
  }

  },

  

};
</script>
<style scoped>
.from {
  display: none;
}
.bloocl-detay.block-detail_Article .popapanry {
    position: relative;
}
.bloocl-detay.block-detail_Article .popapanry .from.fachelalacess {
    background-color: #e2dcdc;
    height: 455px;
    position: absolute;
    display: block;
    top: 0px;
    width: 100%;
    border-radius: 35px;
}
.lefromular-decomonde .input input {
    border: none;
    width: 90%;
    margin: 16px 5%;
    height: 29px;
    padding-left: 10px;
    border-radius: 6px;
}
.lefromular-decomonde .number input {
    width: 51%;
    margin-left: 6%;
    border: none;
    height: 31px;
    padding-left: 5px;
    border-radius: 7px;

}
.lefromular-decomonde button {
    border: none;
    color: white;
    background-color: #7ec518;
    width: 80%;
    margin-left: 11%;
    padding: 4px 5px;
    border-radius: 10px;
}
.lefromular-decomonde {
    padding: 50px 5%;
}

.lefromular-decomonde h2 {
    text-align: center;
    font-size: 26px;
    color: #ca3f4da6;
    padding-bottom: 41px;
}
</style>