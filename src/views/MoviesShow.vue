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
  <div class="container">
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
        <router-link v-bind:to="`/movies/${movie.id}/edit`" class="btn btn-primary" role="button">
          Edit Movie
        </router-link>
        <router-link v-bind:to="`/movies/`" class="btn btn-secondary" role="button">Back</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
