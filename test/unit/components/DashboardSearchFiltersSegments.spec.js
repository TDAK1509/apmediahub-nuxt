import DashboardSearchFiltersSegments from "@/components/DashboardSearchFiltersSegments";

describe("DashboardSearchFiltersSegments.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersSegments);
    wrapper.vm.segments = ["sssss"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["sssss"]]);
  });
});
