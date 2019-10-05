import ThePostProjectPayment from "../ThePostProjectPayment.vue";

describe("ThePostProjectPayment.vue", () => {
  it("has 2 radio buttons", () => {
    const wrapper = mount(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-radio");
    expect(paymentMethod.length).toBe(2);
  });

  it("has 1 visible text field", () => {
    const wrapper = mount(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-text-field");
    expect(paymentMethod.length).toBe(1);
  });

  it("emit update value on change payment amount", () => {
    const wrapper = shallowMount(ThePostProjectPayment);
    wrapper.vm.paymentAmount = 100;
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("emit update value on change payment method", () => {
    const wrapper = shallowMount(ThePostProjectPayment);
    wrapper.vm.paymentMethod = "hahaha";
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
