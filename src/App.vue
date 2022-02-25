methods: { isLoggedIn: function() { return localStorage.getItem('jwt'); } }
<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Movies Database
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/movies" class="nav-link active">Movies</router-link>
          <router-link to="/actors" class="nav-link">Actors</router-link>
          <router-link to="/signup" class="nav-link" v-if="!isLoggedIn">Sign Up</router-link>
          <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Sign In</router-link>
          <router-link to="/logout" class="nav-link" v-if="isLoggedIn">Log Out</router-link>
          <router-link to="/movies/new" class="nav-link" v-if="isLoggedIn">Add A Movie</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style></style>
