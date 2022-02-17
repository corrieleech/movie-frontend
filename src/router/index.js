import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import ActorsIndex from "../views/ActorsIndex.vue";
import ActorsNew from "../views/ActorsNew.vue";
import ActorsShow from "../views/ActorsShow.vue";
import ActorsEdit from "../views/ActorsEdit.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/movies",
    name: "MoviesIndex",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "MoviesNew",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "MoviesShow",
    component: MoviesShow,
  },
  {
    path: "/movies/:id/edit",
    name: "MoviesEdit",
    component: MoviesEdit,
  },
  {
    path: "/actors/",
    name: "ActorsIndex",
    component: ActorsIndex,
  },
  {
    path: "/actors/new/",
    name: "ActorsNew",
    component: ActorsNew,
  },
  {
    path: "/actors/:id",
    name: "ActorsShow",
    component: ActorsShow,
  },
  {
    path: "/actors/:id/edit",
    name: "ActorsEdit",
    component: ActorsEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
