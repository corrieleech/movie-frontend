<script>
import axios from "axios";

export default {
  data: function () {
    return {
      actor: {},
    };
  },
  created: function () {
    axios.get(`/actors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.actor = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <h1>Corz Actor Database</h1>
  <p>All the actors you will ever need to know.</p>
  <div class="actors-show">
    <img :src="`${actor.image}`" />
    <h3>{{ actor.first_name }} {{ actor.last_name }}</h3>
    <p>Gender: {{ actor.gender }} | Age: {{ actor.age }}</p>
    <p>Known for: {{ actor.known_for }}</p>
    <button><router-link v-bind:to="`/actors/${actor.id}/edit`">Edit Details</router-link></button>
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
