<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user_id: 1,
      movies: [],
      newMovieParams: {
        title: "",
        year: null,
        plot: "",
        director: "",
        english: true,
      },
      movieToUpdate: "",
      updateMovieParams: {
        title: "",
        year: null,
        plot: "",
        director: "",
        english: true,
      },
      movieToDelete: "",
      activeMovie: "",
      moreInfo: false,
    };
  },
  created: function () {
    this.moviesIndex();
  },
  methods: {
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    moviesCreate: function () {
      axios
        .post("http://localhost:3000/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.movies.push(response.data);
          (this.newMovieParams.title = ""),
            (this.newMovieParams.year = null),
            (this.newMovieParams.plot = ""),
            (this.newMovieParams.director = "");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    moviesUpdate: function () {
      var movie = this.movies.find((movie) => movie.title == this.movieToUpdate);
      console.log(movie);
      var params = {};
      if (this.updateMovieParams.title) {
        params.title = this.updateMovieParams.title;
      }
      if (this.updateMovieParams.year) {
        params.year = this.updateMovieParams.year;
      }
      if (this.updateMovieParams.director) {
        params.director = this.updateMovieParams.director;
      }
      if (this.updateMovieParams.plot) {
        params.plot = this.updateMovieParams.plot;
      }
      axios
        .patch(`http://localhost:3000/movies/${movie.id}`, params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    moviesDestroy: function (movie) {
      axios
        .delete(`http://localhost:3000/movies/${movie.id}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    showMore: function (movie) {
      this.activeMovie = movie;
      this.moreInfo = !this.moreInfo;
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
        <button v-on:click="showMore(movie)">Additional Info</button>
      </h3>
      <p v-if="activeMovie == movie && moreInfo">
        Director: {{ movie.director }}
        <br />
        <i>Summary:</i>
        {{ movie.plot }}
        <br />
      </p>
      <button v-if="user_id == 1" v-on:click="moviesDestroy(movie)">Remove {{ movie.title }}</button>
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
    <div>
      <h2>Did We Get it Wrong?</h2>
      <p>
        Enter the title of the movie you'd like to update:
        <input type="text" v-model="movieToUpdate" />
      </p>
      <div>
        <p>Enter the updated information (note: fields left blank will not be updated):</p>
        <p>
          Title:
          <input type="text" v-model="updateMovieParams.title" />
        </p>
        <p>
          Year:
          <input type="text" v-model="updateMovieParams.year" />
        </p>
        <p>
          Director:
          <input type="text" v-model="updateMovieParams.director" />
        </p>
        <p>
          Plot:
          <input type="text" v-model="updateMovieParams.plot" />
        </p>
        <button v-on:click="moviesUpdate()">Update Movie Info</button>
        <br />
      </div>
    </div>
  </div>
</template>
