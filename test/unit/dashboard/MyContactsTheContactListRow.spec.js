import ContactListRow from "@/components/dashboard/MyContactsTheContactListRow.vue";

describe("MyContactsTheContactListRow.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowFactory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      }
    });
  });

  it("Renders list name", () => {
    expect(wrapper.html()).toContain("List 1");
  });

  it("Renders open button", () => {
    expect(wrapper.find("[data-test=openButton]").exists()).toBe(true);
  });

  it("Renders copy emails button", () => {
    expect(wrapper.find("[data-test=copyButton]").exists()).toBe(true);
  });

  it("Renders delete button", () => {
    expect(wrapper.find("[data-test=deleteButton]").exists()).toBe(true);
  });

  it("Open list details page on click 'open'", () => {
    wrapper = shallowFactory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      },

      mocks: {
        $router: {
          push: () => {}
        }
      }
    });

    const spy = jest.spyOn(wrapper.vm.$router, "push");
    wrapper.find("[data-test=openButton]").trigger("click");
    expect(spy).toHaveBeenCalled();
  });

  it("Call copyEmails() on click 'copy emails'", () => {
    const copy = jest.fn();

    wrapper = shallowFactory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      },

      methods: {
        copy
      }
    });

    wrapper.find("[data-test=copyButton]").trigger("click");
    expect(copy).toHaveBeenCalled();
  });

  it("Call detele() on click 'delete'", () => {
    const deleteList = jest.fn();

    wrapper = shallowFactory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      },

      methods: {
        deleteList
      }
    });

    wrapper.find("[data-test=deleteButton]").trigger("click");
    expect(deleteList).toHaveBeenCalled();
  });
});
