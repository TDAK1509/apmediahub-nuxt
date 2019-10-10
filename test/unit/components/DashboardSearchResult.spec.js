import DashboardSearchResult from "@/components/DashboardSearchResult.vue";

describe("DashboardSearchResult.vue", () => {
  it("Has prop 'user' as object", () => {
    const wrapper = shallowFactory(DashboardSearchResult);
    const user = { _id: "abc", name: "hahaha" };
    wrapper.setProps({ user: user });

    expect(wrapper.props("user")).toBeTruthy();
  });

  it("Has a checkbox", () => {
    const wrapper = factory(DashboardSearchResult);
    expect(wrapper.contains("input[type='checkbox']")).toBe(true);
  });

  it("Has avatar", () => {
    const wrapper = factory(DashboardSearchResult);
    const avatar = wrapper.find(".v-avatar");
    expect(avatar.contains("img")).toBe(true);
  });
});
