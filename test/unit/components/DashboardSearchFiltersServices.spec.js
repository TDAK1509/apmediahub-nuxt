import DashboardSearchFiltersServices from "@/components/DashboardSearchFiltersServices";

describe("DashboardSearchFiltersServices.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersServices);
    wrapper.vm.services = ["Animation"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["Animation"]]);
  });
});
