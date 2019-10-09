import SearchForFreelancer from "@/pages/_lang/dashboard/search-for-freelancer.vue";

describe("SearchForFreelancer.vue", () => {
  it("Has variable 'countries' initialized as array", () => {
    const wrapper = shallowFactory(SearchForFreelancer);
    expect(wrapper.vm.countries).toEqual([]);
  });

  it("Has variable 'cities' initialized as array", () => {
    const wrapper = shallowFactory(SearchForFreelancer);
    expect(wrapper.vm.cities).toEqual([]);
  });

  it("Has variable 'serviceLevel' initialized as string", () => {
    const wrapper = shallowFactory(SearchForFreelancer);
    expect(wrapper.vm.serviceLevel).toBeDefined();
  });

  it("Has variable 'services' initialized as array", () => {
    const wrapper = shallowFactory(SearchForFreelancer);
    expect(wrapper.vm.services).toEqual([]);
  });

  it("Has variable 'language' initialized as string", () => {
    const wrapper = shallowFactory(SearchForFreelancer);
    expect(wrapper.vm.language).toBeDefined();
  });
});
