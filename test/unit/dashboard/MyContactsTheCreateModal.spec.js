import CreateModal from "@/components/dashboard/MyContactsTheCreateModal.vue";

describe("MyContactsTheCreateModal.vue", () => {
  let wrapper;

  it("Has input field for list name", () => {
    wrapper = shallowFactory(CreateModal);
    const input = wrapper.find("[data-test=listNameInput]");
    expect(input.exists()).toBe(true);
  });

  it("Emit 'save' with input value when click 'save'", () => {
    wrapper = factory(CreateModal);

    wrapper.find("[data-test=listNameInput]").setValue("hahaha");

    wrapper.find("[data-test=saveButton]").trigger("click");

    expect(wrapper.emitted("save")).toBeTruthy();
    expect(wrapper.emitted("save")[0]).toEqual(["hahaha"]);
  });
});
