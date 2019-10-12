import DashboardSearchFiltersMedia from "@/components/DashboardSearchFiltersMedia";

describe("DashboardSearchFiltersMedia.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersMedia);
    wrapper.vm.media = ["maria"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["maria"]]);
  });
});
