import ThePostProjectProjectCategory from "@/components/ThePostProjectProjectCategory.vue";

describe("ThePostProjectProjectCategory.vue", () => {
  it("Has variable 'serviceCategory' initialized as string", () => {
    const wrapper = shallowFactory(ThePostProjectProjectCategory);
    expect(wrapper.vm.serviceCategory).toBeDefined();
    expect(wrapper.vm.serviceCategory.push).not.toBeDefined();
  });

  it("Has variable 'services' initialized as array", () => {
    const wrapper = shallowFactory(ThePostProjectProjectCategory);
    expect(wrapper.vm.services).toBeDefined();
    expect(wrapper.vm.services.push).toBeDefined();
  });

  it("Emit 'update:value' when change services", () => {
    const wrapper = shallowFactory(ThePostProjectProjectCategory);
    const test = ["a"];

    wrapper.vm.services = test;

    // Emit is called
    expect(wrapper.emitted("update:value")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("update:value")[0][0];
    expect(emitPayload).toEqual(test);
  });
});
