<script>
import axios from "axios";

export default {
  data: function () {
    return {
      actorEditParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/actors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.actorEditParams = response.data;
    });
  },
  methods: {
    actorsUpdate: function () {
      axios.patch(`/actors/${this.actorEditParams.id}`).then((response) => {
        console.log("Actors Update Success:", response.data);
        this.$router.push(`/actors/${this.actorEditParams.id}`).catch((error) => {
          console.log("Errors:", error.response);
          this.errors = error.response.data;
        });
      });
    },
  },
};
</script>

<template>
  <h1>Corz Actor Database</h1>
  <p>All the actors you will ever need to know.</p>
  <div class="actors-edit">
    <img :src="`${actorEditParams.image}`" />
    <h3>Edit: {{ actorEditParams.first_name }} {{ actorEditParams.last_name }}</h3>
    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
    <form v-on:submit.prevent="actorsUpdate()">
      <p>
        First Name:
        <input type="text" v-model="actorEditParams.first_name" />
      </p>
      <p>
        Last Name:
        <input type="text" v-model="actorEditParams.last_name" />
      </p>
      <p>
        Gender:
        <input type="text" v-model="actorEditParams.gender" />
      </p>
      <p>
        Known For:
        <input type="text" v-model="actorEditParams.known_for" />
      </p>
      <p>
        Headshot:
        <input type="text" v-model="actorEditParams.image" />
      </p>
      <p>
        Associated Movie ID:
        <input type="text" v-model="actorEditParams.movie_id" />
      </p>
      <input type="submit" value="Submit" />
    </form>
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
