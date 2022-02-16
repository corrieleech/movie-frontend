<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Movies Show:", response.data);
      this.movie = response.data.movie;
    });
  },
};
</script>

<template>
  <div class="movies-show">
    <div>
      <h3>{{ movie.title }}</h3>
      <p>
        <b>Director:</b>
        {{ movie.director }}
      </p>
      <p>
        <b>Year:</b>
        {{ movie.year }}
      </p>
      <p>
        <b>Summary:</b>
        {{ movie.plot }}
      </p>
      <button><router-link v-bind:to="`/movies/${movie.id}/edit`">Edit Movie</router-link></button>
      <br />
      <br />
      <button><router-link v-bind:to="`/movies/`">Back</router-link></button>
    </div>
  </div>
</template>
