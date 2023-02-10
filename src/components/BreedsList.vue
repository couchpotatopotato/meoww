<template>
  <ul
    class="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <template v-for="cat in cats" :key="cat.id">
      <BreedCard :cat="cat"></BreedCard>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllBreeds } from "../lib/breeds";
import { Cat } from "../types/models/cat";
import BreedCard from "./BreedCard.vue";

export default defineComponent({
  name: "BreedsList",
  data() {
    return {
      cats: [] as Cat[],
    };
  },
  created() {
    getAllBreeds()
      .then((cats: Cat[] | null) => {
        if (!cats) {
          return;
        }
        this.cats = cats;
      })
      .catch();
  },
  components: { BreedCard },
});
</script>
