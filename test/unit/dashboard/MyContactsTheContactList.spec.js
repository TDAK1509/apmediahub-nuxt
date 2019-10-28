import ContactList from "@/components/dashboard/MyContactsTheContactList.vue";

describe("MyContactsTheContactList.vue", () => {
  it("Renders ContactListRow equals to the length of 'list'", () => {
    const wrapper = factory(ContactList, {
      propsData: {
        list: [
          {
            id: 1,
            name: "List 1",
            users: [1, 3, 4]
          },

          {
            id: 2,
            name: "List 2",
            users: [4]
          }
        ]
      }
    });

    expect(wrapper.html()).toContain("List 1");
    expect(wrapper.html()).toContain("List 2");
  });
});
