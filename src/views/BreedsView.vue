<template>
  <div class="home">
    <BreedsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreedsList from "../components/BreedsList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    BreedsList,
  },
});
</script>
