import DashboardSearchFiltersCities from "@/components/DashboardSearchFiltersCities";

describe("DashboardSearchFiltersCities.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersCities);
    wrapper.vm.cities = ["abcda"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["abcda"]]);
  });
});
