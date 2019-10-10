import SearchForMedia from "@/pages/_lang/dashboard/search-for-media.vue";

describe("SearchForMedia.vue", () => {
  it("Has variable 'countries' initialized as array", () => {
    const wrapper = shallowFactory(SearchForMedia);
    expect(wrapper.vm.countries).toEqual([]);
  });

  it("Has variable 'segments' initialized as array", () => {
    const wrapper = shallowFactory(SearchForMedia);
    expect(wrapper.vm.segments).toEqual([]);
  });

  it("Has variable 'media' initialized as array", () => {
    const wrapper = shallowFactory(SearchForMedia);
    expect(wrapper.vm.media).toEqual([]);
  });

  it("Has variable 'language' initialized as string", () => {
    const wrapper = shallowFactory(SearchForMedia);
    expect(wrapper.vm.language).toBeDefined();
  });
});
