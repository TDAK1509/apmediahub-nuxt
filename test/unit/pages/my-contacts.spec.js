import MyContacts from "@/pages/_lang/dashboard/my-contacts";

describe("my-contacts.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowFactory(MyContacts).isVueInstance()).toBe(true);
  });
});
