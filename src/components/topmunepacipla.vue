<template>
  <div>
    <div class="mounadelapaje_le">
      <div class="top__munePrcipal">
        <div class="contuunenuu__">
          <div class="row">
            <div class="col-3">
              <div class="tet___email">
                <h3>halfyamehdi@gmail.com</h3>
              </div>
            </div>
            <div class="col-6">
              <div class="logo_de_image">
                <img src="../assets/image/1.png" />
              </div>
            </div>
            <div class="col-3">
              <div class="icon">
                <div class="row">
                  <div class="col-6">
                  </div>
                  <div class="col-6">
                    <div class="elco"><img src="../assets/image/3q.png" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mune___bottn">
        <div class="container">
          <div class="mun__prancipaldecite">
            <div class="menu">
              <ul class="un_elemet">
                <li class="">
                  <a class="link" href="#">
                    <router-link :to="{ path: '/', name: 'Home',  }"
                      >Visage</router-link
                    >
                  </a>
                </li>
                <li class="">
                  <a class="link" href="#"><router-link :to="{ path: '/Hygiene', name: 'Hygiene', }"
                      >Hygiène</router-link
                    > </a>
                </li>
                <li class="">
                  <a class="link" href="#">
                  <router-link :to="{ path: '/p1', name: '',  }"
                      >Santé</router-link
                    >
                   </a>
                </li>
                <li class="">
                  <a class="link" href="#">
                  <router-link :to="{ path: '/p2', name: 'Home',  }"
                      >Solaire</router-link
                    > </a>
                </li>

                <li class="">
                  <a class="link" href="#">
                  <router-link :to="{ path: '/p3', name: '',  }"
                      >AROMATHÉRAPIE</router-link
                    ></a>
                </li>
              </ul>
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
  data: function () {
    return {
      nuberdecode : null
    };
  },
  props: [],
  
  created: function () {
   
  },
  methods: {},
  
};
</script>
<style scoped>
</style>