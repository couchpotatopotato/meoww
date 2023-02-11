<template>
  <li class="group relative rounded-3xl bg-slate-50 p-6 hover:bg-slate-100">
    <div
      class="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover"
        :src="thumbnail"
      />
    </div>
    <div class="flex flex-wrap items-center mt-6">
      <h2
        class="text-lg leading-6 text-slate-900 font-semibold group-hover:text-sky-500"
      >
        <router-link :to="'breeds/' + cat.id"
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
import { useStorage } from "../contexts/useStorage";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { getImagesFromId } from "../lib/images";
import { Cat } from "../types/models/cat";
import { Image } from "../types/models/images";

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
      thumbnail: "",
      images: [] as Image[],
    };
  },
  created() {
    const [catImages, setCatImage] = useStorage(this.cat.id);
    if (!catImages) {
      getImagesFromId(this.cat.id)
        .then((images: Image[] | null) => {
          if (!images) {
            return;
          }
          this.images = images;
          setCatImage(this.images);
          this.thumbnail = this.images[0]?.["url"];
        })
        .catch();
    } else {
      this.images = catImages;
      this.thumbnail = this.images[0]?.["url"];
    }
  },
});
</script>
