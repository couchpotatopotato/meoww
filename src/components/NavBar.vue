<template>
  <div as="nav" class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="block h-8 w-auto" src="../assets/logo.svg" alt="Meow" />
          </div>
          <div class="ml-6">
            <div class="flex space-x-4">
              <div v-for="route in routes" :key="route.name">
                <div v-if="active === route.name">
                  <router-link
                    :to="route.route"
                    @click="active = route.name"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    >{{ route.name }}</router-link
                  >
                </div>
                <div v-else>
                  <router-link
                    :to="route.route"
                    @click="active = route.name"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                    >{{ route.name }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      active: "Breeds",
      routes: [
        {
          name: "Breeds",
          route: "/",
        },
      ],
    };
  },
});
</script>
