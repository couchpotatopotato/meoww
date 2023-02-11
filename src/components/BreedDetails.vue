<template>
  <div v-if="!cat"></div>
  <div v-else>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div
            class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
          >
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in catImages"
                :key="image.id"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }"
              >
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="image.url"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-indigo-500' : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-w-1 aspect-h-1 w-full">
            <TabPanel v-for="image in catImages" :key="image.id">
              <img
                :src="image.url"
                class="h-128 w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ cat.name }}
          </h1>

          <div class="mt-1">
            <p class="text-xl tracking-tight text-gray-900">
              {{ cat.origin }}
            </p>
          </div>

          <div class="mt-6">
            <div
              class="space-y-6 text-base text-gray-700"
              v-html="cat.description"
            />
          </div>

          <form class="mt-6">
            <div>
              <h3 class="text-sm font-semibold text-gray-600">Temperaments</h3>
              <span class="flex flex-wrap items-center space-x-3">
                <div
                  class="mt-2"
                  v-for="temperament in cat.temperament.split(', ')"
                  :key="temperament"
                >
                  <p
                    class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold leading-5 text-gray-800"
                  >
                    {{ temperament }}
                  </p>
                </div>
              </span>
            </div>

            <div class="sm:flex-col1 mt-10 flex">
              <a
                :href="cat.wikipedia_url"
                target="blank"
                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Wikipedia
              </a>

              <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { useRoute } from "vue-router";
import { getBreed } from "../lib/breeds";
import { Cat } from "types/models/cat";
import { Image } from "types/models/images";
import { useStorage } from "../contexts/useStorage";
import { getImagesFromId } from "../lib/images";

const route = useRoute();
const breed_id = route.params.breed as string;
const cat = ref<Cat>();
const images = ref<Image[]>();

const [catImages, setCatImage] = useStorage(breed_id);

getBreed(breed_id)
  .then((newCat: Cat | null) => {
    if (!newCat) {
      return;
    }
    cat.value = newCat;
  })
  .catch();

if (!catImages && cat.value) {
  getImagesFromId(cat.value.id)
    .then((newImages: Image[] | null) => {
      if (!newImages) {
        return;
      }
      images.value = newImages;
      setCatImage(newImages);
    })
    .catch();
}
</script>
