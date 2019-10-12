import DashboardSearchFiltersServiceLevels from "@/components/DashboardSearchFiltersServiceLevels";

describe("DashboardSearchFiltersServiceLevels.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersServiceLevels);
    wrapper.vm.serviceLevels = ["expert"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["expert"]]);
  });
});
