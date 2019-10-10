import TheSearchForMediaSearchSelector from "@/components/TheSearchForMediaSearchSelector.vue";

describe("TheSearchForMediaSearchSelector.vue", () => {
  it("Has local variables for search values", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
    expect(wrapper.vm.countries).toBeDefined();
    expect(wrapper.vm.segments).toBeDefined();
    expect(wrapper.vm.media).toBeDefined();
    expect(wrapper.vm.language).toBeDefined();
  });

  it("Local variable 'countries', 'media', 'segments' is initialized as array", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
    expect(wrapper.vm.countries.push).toBeDefined();
    expect(wrapper.vm.media.push).toBeDefined();
    expect(wrapper.vm.segments.push).toBeDefined();
  });

  it("Emit 'change' when change countries", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
    const test = ["Vietnam"];
    const result = { key: "countries", value: test };

    wrapper.vm.countries = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change media", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
    const test = ["a"];
    const result = { key: "media", value: test };

    wrapper.vm.media = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change segments", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
    const test = ["a"];
    const result = { key: "segments", value: test };

    wrapper.vm.segments = test;

    // Emit is called
    expect(wrapper.emitted("change")).toBeTruthy();

    // Emit value contains test value
    const emitPayload = wrapper.emitted("change")[0][0];
    expect(emitPayload).toEqual(result);
  });

  it("Emit 'change' when change language", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchSelector);
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
