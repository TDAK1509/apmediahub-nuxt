import SearchForAgency from "@/pages/_lang/dashboard/search-for-agency.vue";

describe("SearchForAgency.vue", () => {
  it("Has variable 'countries' initialized as array", () => {
    const wrapper = shallowFactory(SearchForAgency);
    expect(wrapper.vm.countries).toEqual([]);
  });

  it("Has variable 'cities' initialized as array", () => {
    const wrapper = shallowFactory(SearchForAgency);
    expect(wrapper.vm.cities).toEqual([]);
  });

  it("Has variable 'serviceLevels' initialized as array", () => {
    const wrapper = shallowFactory(SearchForAgency);
    expect(wrapper.vm.serviceLevels).toEqual([]);
  });

  it("Has variable 'services' initialized as array", () => {
    const wrapper = shallowFactory(SearchForAgency);
    expect(wrapper.vm.services).toEqual([]);
  });
});
