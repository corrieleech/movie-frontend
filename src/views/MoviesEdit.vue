<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
      editMovieParams: {
        plot: "",
      },
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      this.movie = response.data.movie;
      this.editMovieParams = response.data.movie;
    });
  },
  methods: {
    moviesUpdate: function () {
      axios
        .patch(`/movies/${this.movie.id}`, this.editMovieParams)
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
  <div class="container">
    <div class="movies-edit">
      <form v-on:submit.prevent="moviesUpdate()">
        <div>
          <h3>Edit: {{ editMovieParams.title }}</h3>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <p>
            <label for="title">Title:</label>
            <input type="text" v-model="editMovieParams.title" placeholder="(e.g., Titanic)" />
          </p>
          <p>
            <label for="year">Year:</label>
            <input type="text" v-model="editMovieParams.year" placeholder="(e.g., 1997)" />
          </p>
          <p>
            <label for="Director">Director:</label>
            <input type="text" v-model="editMovieParams.director" placeholder="(e.g., James Cameron)" />
          </p>
          <p>
            Plot:
            <textarea
              v-model="editMovieParams.plot"
              placeholder="(e.g., Two people meet on a doomed boat. Boy lets go.)"
              rows="2"
              cols="50"
            ></textarea>
            <br />
            <small v-if="editMovieParams.plot.length > 200">
              <i>{{ 250 - editMovieParams.plot.length }} characters remaining</i>
            </small>
          </p>
          <p>
            Language:
            <label for="english">English</label>
            <input type="radio" id="english" v-model="editMovieParams.english" name="english" value="true" />
            <label for="notenglish">Other</label>
            <input type="radio" id="notenglish" v-model="editMovieParams.english" name="english" value="false" />
          </p>
          <input class="btn btn-primary" type="submit" value="Update" />
          <button class="btn btn-secondary" v-on:click="moviesDestroy()">Delete Movie</button>
        </div>
      </form>
    </div>
  </div>
</template>
