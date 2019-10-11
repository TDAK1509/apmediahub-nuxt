import DashboardSearchResultItem from "@/components/DashboardSearchResultItem.vue";

describe("DashboardSearchResultItem.vue", () => {
  let user;

  beforeEach(() => {
    user = { _id: "abc", name: "hahaha" };
  });

  it("Has prop 'user' as object", () => {
    const wrapper = shallowFactory(DashboardSearchResultItem, { user });
    expect(wrapper.props("user")._id).toBe("abc");
  });

  it("Has a checkbox", () => {
    const wrapper = factory(DashboardSearchResultItem, { user });
    expect(wrapper.contains("input[type='checkbox']")).toBe(true);
  });

  it("Has avatar", () => {
    const wrapper = factory(DashboardSearchResultItem, { user });
    const avatar = wrapper.find(".v-avatar");
    expect(avatar.contains("img")).toBe(true);
  });

  it("Emit 'checked' / 'unchecked' on checked/unchecked checkbox", () => {
    const wrapper = factory(DashboardSearchResultItem, { user });

    const checkbox = wrapper.find("input[type='checkbox']");
    checkbox.trigger("click");

    expect(wrapper.emitted("checked")).toBeTruthy();
    expect(wrapper.emitted("checked")[0]).toEqual([user._id]);

    checkbox.trigger("click");

    expect(wrapper.emitted("unchecked")).toBeTruthy();
    expect(wrapper.emitted("unchecked")[0]).toEqual([user._id]);
  });
});
