import DashboardSearchFiltersJobTitles from "@/components/DashboardSearchFiltersJobTitles";

describe("DashboardSearchFiltersJobTitles.vue", () => {
  it("Emit 'update:value' with correct value on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFiltersJobTitles);
    wrapper.vm.jobTitles = ["haha"];

    expect(wrapper.emitted("update:value")[0]).toEqual([["haha"]]);
  });
});
