import { mount, shallowMount } from "@vue/test-utils";
import { Cat } from "../../src/types/models/cat";
import BreedCard from "../../src/components/BreedCard.vue";
import { createRouter, createWebHistory } from "vue-router";
import BreedsList from "../../src/components/BreedsList.vue";
import BreedDetails from "../../src/components/BreedDetails.vue";
import NavBar from "../../src/components/BreedCard.vue";

// Testing BreedCard
describe("BreedCard.vue", () => {
  it("BreedCard renders cat with the correct props", () => {
    const cat: Cat = {
      id: "string",
      name: "string",
      width: 0,
      height: 0,
      url: "string",
      temperament: "string",
      origin: "string",
      description: "string",
      life_span: "string",
      wikipedia_url: "string",
    };

    const wrapper = mount(BreedCard, {
      props: {
        cat: cat,
      },
    });

    const breedCard = wrapper.getComponent(BreedCard);

    expect(breedCard.props()).toEqual({
      cat: cat,
    });
  });
});

// Testing routings

// Testing BreedView
describe("BreedDetails", () => {
  it("Renders a BreedDetails via routing", async () => {
    // create local router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/breeds/:breed",
          name: "breed",
          component: BreedDetails,
        },
      ],
    });

    router.push("/breeds/:breed");
    await router.isReady();
    const wrapper = mount(BreedDetails, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(BreedDetails).exists()).toBe(true);
  });
});

// Testing BreedsView
describe("BreedList", () => {
  it("Renders a BreedList via routing", async () => {
    // create local router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "breeds",
          component: BreedsList,
        },
      ],
    });

    router.push("/");

    await router.isReady();

    const wrapper = mount(BreedsList, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(BreedsList).exists()).toBe(true);
  });
});
