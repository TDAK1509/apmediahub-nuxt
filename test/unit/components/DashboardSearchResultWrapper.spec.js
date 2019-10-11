import DashboardSearchResultWrapper from "@/components/DashboardSearchResultWrapper";

describe("DashboardSearchResultWrapper.vue", () => {
  let users;

  beforeEach(() => {
    users = [{ _id: "hahaha" }];
  });

  it("Receive 'users' prop", () => {
    const wrapper = shallowFactory(DashboardSearchResultWrapper);
    wrapper.setProps({ users });
    expect(wrapper.props("users")).toBeTruthy();
  });

  it("Has local variable 'userIdList' initialized as array", () => {
    const wrapper = shallowFactory(DashboardSearchResultWrapper);
    expect(wrapper.vm.userIdList).toEqual([]);
  });

  it("Emit update:value on change userIdList", () => {
    const wrapper = factory(DashboardSearchResultWrapper);
    wrapper.vm.userIdList.push("hahaha");
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("Update userIdList on checkbox checked/unchecked", () => {
    const wrapper = factory(DashboardSearchResultWrapper);
    wrapper.setProps({ users });

    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger("click");

    const userIdList = wrapper.vm.userIdList;

    expect(userIdList).toHaveLength(1);
    // Has correct value
    expect(userIdList[0]).toBe(users[0]._id);

    checkbox.trigger("click");

    expect(userIdList).toEqual([]);
  });

  it("Has number of checkbox equals to 'users' length", () => {
    const wrapper = factory(DashboardSearchResultWrapper);
    const usersLong = [{ _id: "hahaha" }, { _id: "hehehe" }, { _id: "hihihi" }];

    wrapper.setProps({ users: usersLong });

    const checkbox = wrapper.findAll('input[type="checkbox"]');

    expect(checkbox).toHaveLength(usersLong.length);
  });
});
