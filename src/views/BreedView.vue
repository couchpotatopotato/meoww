<template>
  <div class="home">
    <BreedDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreedDetails from "../components/BreedDetails.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    BreedDetails,
  },
});
</script>
