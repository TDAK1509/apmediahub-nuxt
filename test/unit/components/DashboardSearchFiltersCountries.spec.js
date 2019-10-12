import DashboardSearchFiltersCountries from "@/components/DashboardSearchFiltersCountries";

describe("DashboardSearchFiltersCountries.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersCountries);
    wrapper.vm.countries = ["Vietnam"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["Vietnam"]]);
  });
});
