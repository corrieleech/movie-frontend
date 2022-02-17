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
  <div id="nav">
    <router-link to="/movies">Movies</router-link>
    |
    <router-link to="/actors">Actors</router-link>
    |
    <span v-if="isLoggedIn">
      <router-link to="/logout">Log Out</router-link>
      |
      <router-link to="/movies/new">Add A Movie</router-link>
    </span>
    <span v-else>
      <router-link to="/signup">Sign Up</router-link>
      |
      <router-link to="/login">Log In</router-link>
    </span>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
