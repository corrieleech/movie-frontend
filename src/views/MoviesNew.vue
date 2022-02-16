<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {
        english: true,
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
</template>
