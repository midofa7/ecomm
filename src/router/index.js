import Vue from "vue";
import VueRouter from "vue-router";
import Hygiene from "../views/Hygiene";
import Home from "../views/Home.vue";
import paga1 from "../views/paje1";
import paga2 from "../views/paje2";
import paga3 from "../views/paje3";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Hygiene",
    name: "Hygiene",
    component: Hygiene
  },
  {
    path: "/p1",
    name: "",
    component: paga1
  },
  {
    path: "/p2",
    name: "",
    component: paga2
  },
  {
    path: "/p3",
    name: "",
    component: paga3
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
