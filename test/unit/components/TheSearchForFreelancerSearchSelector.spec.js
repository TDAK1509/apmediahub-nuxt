import TheSearchForFreelancerSearchSelector from "@/components/TheSearchForFreelancerSearchSelector.vue";

describe("TheSearchForFreelancerSearchSelector.vue", () => {
  it("Has local variables for search values", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    expect(wrapper.vm.countries).toBeDefined();
    expect(wrapper.vm.cities).toBeDefined();
    expect(wrapper.vm.services).toBeDefined();
    expect(wrapper.vm.serviceLevel).toBeDefined();
    expect(wrapper.vm.language).toBeDefined();
  });

  it("Local variable 'countries', 'cities', 'services' is initialized as array", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    expect(wrapper.vm.countries.push).toBeDefined();
    expect(wrapper.vm.cities.push).toBeDefined();
    expect(wrapper.vm.services.push).toBeDefined();
  });

  it("Emit 'change' when change countries", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    const test = ["Vietnam"];
    const result = { key: "countries", value: test };

    wrapper.vm.countries = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change cities", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    const test = ["Ho Chi Minh", "Hanoi"];
    const result = { key: "cities", value: test };

    wrapper.vm.cities = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change services", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    const test = ["a"];
    const result = { key: "services", value: test };

    wrapper.vm.services = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change serviceLevel", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    const test = "Expert";
    const result = { key: "serviceLevel", value: test };

    wrapper.vm.serviceLevel = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change language", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchSelector);
    const test = "English";
    const result = { key: "language", value: test };

    wrapper.vm.language = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });
});
