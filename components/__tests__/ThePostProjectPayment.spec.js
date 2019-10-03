import ThePostProjectPayment from "../ThePostProjectPayment.vue";

describe("ThePostProjectPayment.vue", () => {
  it("has 2 radio buttons", () => {
    const wrapper = factory(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-radio");
    expect(paymentMethod.length).toBe(2);
  });

  it("has 1 visible text field", () => {
    const wrapper = factory(ThePostProjectPayment);
    const paymentMethod = wrapper.findAll(".v-text-field");
    expect(paymentMethod.length).toBe(1);
  });
});
