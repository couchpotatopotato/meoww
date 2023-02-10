<template>
  <li class="group relative rounded-3xl bg-slate-50 p-6 hover:bg-slate-100">
    <div
      class="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700"
    >
      <img class="absolute inset-0 w-full h-full object-cover" :src="image" />
    </div>
    <div class="flex flex-wrap items-center mt-6">
      <h2
        class="text-lg leading-6 text-slate-900 font-semibold group-hover:text-sky-500"
      >
        <router-link :to="cat.id"
          ><span class="absolute inset-0 rounded-3xl"></span
          >{{ cat.name }}</router-link
        >
      </h2>
      <p class="w-full flex-none text-[0.8125rem] leading-6 text-slate-500">
        {{ cat.origin }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { getThumbnailFromId } from "../lib/images";
import { Cat } from "../types/models/cat";

export default defineComponent({
  name: "BreedsCard",
  props: {
    cat: {
      type: Object as PropType<Cat>,
      required: true,
    },
  },
  data() {
    return {
      image: "",
    };
  },
  created() {
    getThumbnailFromId(this.cat.id)
      .then((image: string | null) => {
        if (!image) {
          return;
        }
        this.image = image;
      })
      .catch();
  },
});
</script>
