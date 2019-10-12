import DashboardSearchFiltersLanguages from "@/components/DashboardSearchFiltersLanguages";

describe("DashboardSearchFiltersLanguages.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersLanguages);
    wrapper.vm.languages = ["English", "Vietnamese"];

    expect(wrapper.emitted("update:value")[0]).toEqual([
      ["English", "Vietnamese"]
    ]);
  });
});
