import DashboardWhoCanSee from "../DashboardWhoCanSee.vue";

describe("DashboardWhoCanSee.vue", () => {
  it("emit update value on user id list change", () => {
    const wrapper = shallowMount(DashboardWhoCanSee);
    wrapper.vm.userIdList = [1, 2, 3];
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
