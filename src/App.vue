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
          <router-link to="/signup" class="nav-link" v-if="!isLoggedIn">Sign Up</router-link>
          <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Sign In</router-link>
          <router-link to="/logout" class="nav-link" v-if="isLoggedIn">Log Out</router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/movies" class="nav-link active">Movies</router-link></li>
                <li><router-link to="/movies/new" class="nav-link" v-if="isLoggedIn">Add A Movie</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actors
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/actors" class="nav-link">Actors</router-link></li>
                <li><router-link to="/actors/new" class="nav-link" v-if="isLoggedIn">Add An Actor</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="jumbotron jumbotron-fluid p-5">
    <h1 class="display-4">Whence Upon A Time</h1>
    <p class="lead">Artisanally crafted Hollywood content.</p>
  </div>
  <router-view />
</template>

<style>
.jumbotron {
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-042517-oldhollywood-1493167401.jpg");
  background-size: cover;
  color: azure;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
</style>
