import DashboardWhoCanSee from "../DashboardWhoCanSee.vue";

describe("DashboardWhoCanSee.vue", () => {
  it("emit update value on change selected agencies change", () => {
    const wrapper = shallowMount(DashboardWhoCanSee);
    wrapper.vm.selectedAgencies = [1, 2, 3];
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("emit update value on change selected freelancers change", () => {
    const wrapper = shallowMount(DashboardWhoCanSee);
    wrapper.vm.selectedFreelancers = [1, 2, 3];
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
