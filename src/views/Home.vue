<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user_id: 1,
      movies: [],
      newMovieParams: {
        english: true,
      },
      movieToUpdate: "",
      updateMovieParams: {},
      movieToDelete: "",
      activeMovie: "",
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
    moviesCreate: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.movies.push(response.data);
          this.newMovieParams = {};
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    moviesShow: function (movie) {
      this.activeMovie = movie;
      this.updateMovieParams = movie;
      document.querySelector("#movie-details").showModal();
    },
    moviesUpdate: function (movie) {
      axios
        .patch(`/movies/${movie.id}`, movie)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    moviesDestroy: function (movie) {
      var index = this.movies.indexOf(movie);
      console.log(index);
      axios
        .delete(`/movies/${movie.id}`)
        .then((response) => {
          console.log(response.data);
          this.movies.splice(index, 1);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<template>
  <p>
    User Id: (1 = Admin)
    <input type="text" v-model="user_id" />
  </p>
  <h1>Corz Movie Database</h1>
  <p>All the movies you will ever need to know.</p>
  <div class="home" align="left">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>
        {{ movie.title }} ({{ movie.year }})
        <br />
        <button v-on:click="moviesShow(movie)">Additional Info</button>
      </h3>
    </div>
    <div>
      <h2>Not Seeing What You Like?</h2>
      <p>Add a movie to the database by entering the following details:</p>
      <p>
        Title:
        <input type="text" v-model="newMovieParams.title" />
      </p>
      <p>
        Year:
        <input type="text" v-model="newMovieParams.year" />
      </p>
      <p>
        Director:
        <input type="text" v-model="newMovieParams.director" />
      </p>
      <p>
        Plot:
        <input type="text" v-model="newMovieParams.plot" />
      </p>
      <button v-on:click="moviesCreate()">Add Movie</button>
      <br />
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h2>
          Title:
          <input type="text" v-model="updateMovieParams.title" />
        </h2>
        <p>
          Year:
          <input type="text" v-model="updateMovieParams.year" />
        </p>
        <p>
          Director:
          <input type="text" v-model="updateMovieParams.director" />
        </p>
        Plot:
        <textarea rows="4" cols="50" v-model="updateMovieParams.plot"></textarea>
        <br />
        <br />
        <button v-on:click="moviesUpdate(updateMovieParams)">Update</button>
        <button>Close</button>
        <button v-if="user_id == 1" v-on:click="moviesDestroy(activeMovie)">Remove</button>
      </form>
    </dialog>
  </div>
</template>
