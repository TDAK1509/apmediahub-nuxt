import TheSearchForJournalistSearchSelector from "@/components/TheSearchForJournalistSearchSelector.vue";

describe("TheSearchForJournalistSearchSelector.vue", () => {
  it("Has local variables for search values", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    expect(wrapper.vm.countries).toBeDefined();
    expect(wrapper.vm.cities).toBeDefined();
    expect(wrapper.vm.segments).toBeDefined();
    expect(wrapper.vm.jobTitle).toBeDefined();
    expect(wrapper.vm.mediaTypeParent).toBeDefined();
    expect(wrapper.vm.mediaTypes).toBeDefined();
    expect(wrapper.vm.language).toBeDefined();
  });

  it("Local variable 'countries', 'cities', 'segments', 'mediaTypes' is initialized as array", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    expect(wrapper.vm.countries.push).toBeDefined();
    expect(wrapper.vm.cities.push).toBeDefined();
    expect(wrapper.vm.segments.push).toBeDefined();
    expect(wrapper.vm.mediaTypes.push).toBeDefined();
  });

  it("Emit 'change' when change countries", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
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
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    const test = ["Ho Chi Minh", "Hanoi"];
    const result = { key: "cities", value: test };

    wrapper.vm.cities = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change segments", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    const test = ["a"];
    const result = { key: "segments", value: test };

    wrapper.vm.segments = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change jobTitle", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    const test = "Job title";
    const result = { key: "jobTitle", value: test };

    wrapper.vm.jobTitle = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change mediaTypes", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
    const test = ["Tien Phong", "Thanh Nien"];
    const result = { key: "mediaTypes", value: test };

    wrapper.vm.mediaTypes = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change language", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchSelector);
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
