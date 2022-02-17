<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      titleSearch: "",
      yearSearch: "",
      MovieDirectorSearchParams: "",
      isActive: true,
      hasError: false,
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
  computed: {
    searchTitle() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.titleSearch.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <h1>Corz Movie Database</h1>
  <p><span data-inline-tweet>All the movies you will ever need to know.</span></p>
  <h3>Search by Title</h3>
  <input type="text" v-model="titleSearch" list="movieTitles" />
  <datalist id="movieTitles">
    <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
  </datalist>
  <div class="movies-index">
    <transition-group
      appear
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-for="movie in searchTitle" v-bind:key="movie.id">
        <h3>
          <router-link v-bind:to="`/movies/${movie.id}`">{{ movie.title }} ({{ movie.year }})</router-link>
        </h3>
      </div>
    </transition-group>
  </div>
  <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"><p>Test text</p></div>
</template>

<style></style>
