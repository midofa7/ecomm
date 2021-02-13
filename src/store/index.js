import Vue from "vue";
import Vuex from "vuex";
import ARdajta from "../data/jjdata.json";
import panye from "../data/panye.json";
import commend from "../data/comende.json";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    ARdata: ARdajta.articls,
    lapanye: panye,
    comende: commend.comende

  },
  mutations: {
    ajouteapeny (state,id)   {

      var dataPanye = state.lapanye;
      dataPanye.naberdecomonde++;
      dataPanye.idPrdou.push(id);
   //   console.log(dataPanye);
      state.lapanye = dataPanye;
    },
    ajoutecomend (state,comend)   {

      var data = state.comende;
      data.push(comend);
      console.log(data);
      state.comende = data;
    }
  },
  actions: {},
  modules: {},
  getters: {

    datapanye: (state) => {



      return state.lapanye;
    },
    dataratle: (state) => {



      return state.ARdata;
    },
    getdatacomend: (state) => {



      return state.comende;
    },
    dataarticle: (state) => (tayep) => {


      var tab = state.ARdata;
      var dataAr = [];
      tab.map(function (e) {

        if (e.type == tayep) {
          dataAr.push(e);
        }

      })

      return dataAr;
    },


  },
});
