import ThePostProjectPayment from "@/components/ThePostProjectPayment.vue";

describe("ThePostProjectPayment.vue", () => {
  it("has 2 radio buttons", () => {
    const wrapper = factory(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-radio");
    expect(paymentMethod).toHaveLength(2);
  });

  it("has 1 visible text field", () => {
    const wrapper = factory(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-text-field");
    expect(paymentMethod).toHaveLength(1);
  });

  it("emit update value on change payment amount", () => {
    const wrapper = shallowFactory(ThePostProjectPayment);
    wrapper.vm.paymentAmount = 100;
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("emit update value on change payment method", () => {
    const wrapper = shallowFactory(ThePostProjectPayment);
    wrapper.vm.paymentMethod = "hahaha";
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
