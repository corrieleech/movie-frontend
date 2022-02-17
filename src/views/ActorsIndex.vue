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
  <img
    src="https://creepyface.io/img/0/serious"
    data-creepyface
    data-src-hover="https://creepyface.io/img/0/hover"
    data-src-look-0="https://creepyface.io/img/0/0"
    data-src-look-45="https://creepyface.io/img/0/45"
    data-src-look-90="https://creepyface.io/img/0/90"
    data-src-look-135="https://creepyface.io/img/0/135"
    data-src-look-180="https://creepyface.io/img/0/180"
    data-src-look-225="https://creepyface.io/img/0/225"
    data-src-look-270="https://creepyface.io/img/0/270"
    data-src-look-315="https://creepyface.io/img/0/315"
  />
  <div class="actors-index">
    <table align="center">
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
