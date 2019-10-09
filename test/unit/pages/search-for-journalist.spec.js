import SearchForJournalist from "@/pages/_lang/dashboard/search-for-journalist.vue";

describe("SearchForJournalist.vue", () => {
  it("Has variable 'countries' initialized as array", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.countries).toEqual([]);
  });

  it("Has variable 'cities' initialized as array", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.cities).toEqual([]);
  });

  it("Has variable 'segments' initialized as array", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.segments).toEqual([]);
  });

  it("Has variable 'jobTitle' initialized as string", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.jobTitle).toBeDefined();
  });

  it("Has variable 'media' initialized as array", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.media).toEqual([]);
  });

  it("Has variable 'language' initialized as string", () => {
    const wrapper = shallowFactory(SearchForJournalist);
    expect(wrapper.vm.language).toBeDefined();
  });
});
