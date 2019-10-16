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

  it("'addToUserList' push new id to 'userIdList'", () => {
    const wrapper = factory(DashboardSearchResultWrapper);
    wrapper.vm.addToUserList("test");
    expect(wrapper.vm.userIdList[0]).toBe("test");
  });

  it("'removeFromUserList' remove id from 'userIdList'", () => {
    const wrapper = factory(DashboardSearchResultWrapper);
    wrapper.vm.userIdList = ["haha", "test", "hihi"];
    wrapper.vm.removeFromUserList("test");
    expect(wrapper.vm.userIdList).toEqual(["haha", "hihi"]);
  });
});
