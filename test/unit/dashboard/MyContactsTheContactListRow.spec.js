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
      },

      stubs: {
        routerLink: "<div></div>"
      }
    });
  });

  it("Renders list name", () => {
    expect(wrapper.html()).toContain("List 1");
  });

  it("Renders users count", () => {
    expect(wrapper.find("[data-test=userCount]").html()).toContain("3");
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

  it("Call copy() on click 'copy emails'", () => {
    const copy = jest.fn();

    wrapper = factory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      },

      methods: {
        copy
      },

      stubs: {
        routerLink: "<div></div>"
      }
    });

    wrapper.find("[data-test=copyButton]").trigger("click");
    expect(copy).toHaveBeenCalled();
  });

  it("Call detele() on click 'delete'", () => {
    const showDeleteConfirmModal = jest.fn();

    wrapper = factory(ContactListRow, {
      propsData: {
        listItem: {
          id: 1,
          name: "List 1",
          users: [1, 2, 3]
        }
      },

      methods: {
        showDeleteConfirmModal
      },

      stubs: {
        routerLink: "<div></div>"
      }
    });

    wrapper.find("[data-test=deleteButton]").trigger("click");
    expect(showDeleteConfirmModal).toHaveBeenCalled();
  });
});
