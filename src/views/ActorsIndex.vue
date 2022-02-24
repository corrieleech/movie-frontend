<script>
import axios from "axios";

export default {
  data: function () {
    return {
      actors: [],
    };
  },
  created: function () {
    this.actorsIndex();
  },
  methods: {
    actorsIndex: function () {
      axios.get("/actors").then((response) => {
        console.log(response.data);
        this.actors = response.data;
      });
    },
  },
};
</script>

<template>
  <h1>Corz Actor Database</h1>
  <p>All the actors you will ever need to know.</p>
  <div class="actors-index">
    <table>
      <tr v-for="actor in actors" v-bind:key="actor.id">
        <td><img :src="`${actor.image}`" /></td>
        <td>
          <h3>{{ actor.first_name }} {{ actor.last_name }}</h3>
          <p>Gender: {{ actor.gender }} | Age: {{ actor.age }}</p>
          <p>Known for: {{ actor.known_for }}</p>
        </td>
      </tr>
    </table>
    <!-- <div v-for="actor in actors" v-bind:key="actor.id">
      <h3>{{ actor.first_name }} {{ actor.last_name }}</h3>
      <p>Gender: {{ actor.gender }} | Age: {{ actor.age }}</p>
      <p>Known for: {{ actor.known_for }}</p>
    </div> -->
  </div>
</template>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
