import DashboardWhoCanSee from "@/components/DashboardWhoCanSee.vue";

describe("DashboardWhoCanSee.vue", () => {
  it("emit update value on change selected agencies change", () => {
    const wrapper = shallowFactory(DashboardWhoCanSee);
    wrapper.vm.selectedAgencies = [1, 2, 3];
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("emit update value on change selected freelancers change", () => {
    const wrapper = shallowFactory(DashboardWhoCanSee);
    wrapper.vm.selectedFreelancers = [1, 2, 3];
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
