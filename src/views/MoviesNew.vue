<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {
        plot: "",
      },
      errors: [],
    };
  },
  methods: {
    moviesCreate: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>

<template>
  <h1>Not Seeing What You Like?</h1>
  <div class="movies-new">
    <p>Add a movie to the database by entering the following details:</p>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="moviesCreate()">
      <p>
        <label for="title">Title:</label>
        <input type="text" v-model="newMovieParams.title" placeholder="(e.g., Titanic)" />
      </p>
      <p>
        <label for="year">Year:</label>
        <input type="text" v-model="newMovieParams.year" placeholder="(e.g., 1997)" />
      </p>
      <p>
        <label for="Director">Director:</label>
        <input type="text" v-model="newMovieParams.director" placeholder="(e.g., James Cameron)" />
      </p>
      <p>
        Plot:
        <textarea
          v-model="newMovieParams.plot"
          placeholder="(e.g., Two people meet on a doomed boat. Boy lets go.)"
          rows="2"
          cols="50"
        ></textarea>
        <br />
        <small v-if="newMovieParams.plot.length > 200">
          <i>{{ 250 - newMovieParams.plot.length }} characters remaining</i>
        </small>
      </p>
      <p>
        Language:
        <label for="english">English</label>
        <input type="radio" id="english" v-model="newMovieParams.english" name="english" value="true" />
        <label for="notenglish">Other</label>
        <input type="radio" id="notenglish" v-model="newMovieParams.english" name="english" value="false" />
      </p>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <br />
    </form>
  </div>
</template>

<style>
input[type="text"] {
  width: 25%;
}
textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 25%;
}
</style>
