<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      this.movie = response.data.movie;
    });
  },
  methods: {
    moviesUpdate: function () {
      axios
        .patch(`/movies/${this.movie.id}`, this.movie)
        .then((response) => {
          console.log("Movies Update:", response.data);
          this.$router.push(`/movies/${this.movie.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    moviesDestroy: function () {
      axios.delete(`/movies/${this.movie.id}`).then((response) => {
        console.log("Movie has been removed from the database.", response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>

<template>
  <div class="movies-edit">
    <div>
      <h3>Edit: {{ movie.title }}</h3>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>
        Title:
        <input type="text" v-model="movie.title" />
      </p>
      <p>
        Year:
        <input type="text" v-model="movie.year" />
      </p>
      <p>
        Director:
        <input type="text" v-model="movie.director" />
      </p>
      <p>
        Plot:
        <input type="text" v-model="movie.plot" />
      </p>
      <button v-on:click="moviesUpdate()">Update Movie</button>
      <button v-on:click="moviesDestroy()">Delete Movie</button>
    </div>
  </div>
</template>
