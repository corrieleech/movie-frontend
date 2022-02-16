<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.moviesIndex();
  },
  methods: {
    moviesIndex: function () {
      axios.get("/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>

<template>
  <h1>Corz Movie Database</h1>
  <p>All the movies you will ever need to know.</p>
  <div class="movies-index">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>
        <router-link v-bind:to="`/movies/${movie.id}`">{{ movie.title }} ({{ movie.year }})</router-link>
      </h3>
    </div>
  </div>
</template>
