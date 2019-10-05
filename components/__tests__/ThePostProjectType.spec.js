import ThePostProjectProjectType from "../ThePostProjectProjectType.vue";

describe("ThePostProjectProjectType.vue", () => {
  it("has 3 radio buttons", () => {
    const wrapper = mount(ThePostProjectProjectType);
    const radio = wrapper.findAll(".v-radio");
    expect(radio.length).toBe(3);
  });

  it("emit update value on select radio buttons", () => {
    const wrapper = shallowMount(ThePostProjectProjectType);
    wrapper.vm.radio = "hahaha";
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("emit update value on change selectedProjecType", () => {
    const wrapper = shallowMount(ThePostProjectProjectType);
    wrapper.vm.selectedProjectType = "hahaha";
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
