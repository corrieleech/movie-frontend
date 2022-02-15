import { createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesNew from "../views/MoviesNew.vue";

const routes = [
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
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
    path: "/movies/new",
    name: "MoviesNew",
    component: MoviesNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
