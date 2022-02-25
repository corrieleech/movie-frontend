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
  <div class="container">
    <h1>Corz Actor Database</h1>
    <p>All the actors you will ever need to know.</p>
    <div class="actors-index">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="actor in actors" v-bind:key="actor.id">
          <div class="card h-100">
            <img :src="`${actor.image}`" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ actor.first_name }} {{ actor.last_name }}</h5>
              <p class="card-text">Gender: {{ actor.gender }} | Age: {{ actor.age }}</p>
              <p>Known for: {{ actor.known_for }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
