<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newActor: {},
      errors: [],
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies").then((response) => {
      console.log(response.data);
      this.movies = response.data;
    });
  },
  methods: {
    actorsCreate: function () {
      axios
        .post("/actors", this.newActor)
        .then((response) => {
          console.log("Actors Create:", response.data);
          this.actors = response.data;
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data;
        });
    },
  },
};
</script>

<template>
  <h1>Add An Actor</h1>
  <div class="actors-new">
    <p v-for="error in errors" v-bind:key="error">
      {{ error }}
      <br />
    </p>
    <form v-on:submit.prevent="actorsCreate()">
      First Name:
      <input type="text" v-model="newActor.first_name" />
      <br />
      Last Name:
      <input type="text" v-model="newActor.last_name" />
      <br />
      Age:
      <input type="text" v-model="newActor.age" />
      <br />
      Gender:
      <input type="text" v-model="newActor.gender" />
      <br />
      Known For (Movie Title):
      <input type="text" v-model="newActor.known_for" />
      <br />
      Headshot:
      <input type="text" v-model="newActor.image" />
      <br />
      Associated Movie ID:
      <input type="text" v-model="newActor.movie_id" />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
    <p>_____________________________________________________________</p>
    <p><b>Movie Reference:</b></p>
    <p v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }} ({{ movie.id }})</p>
  </div>
</template>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
