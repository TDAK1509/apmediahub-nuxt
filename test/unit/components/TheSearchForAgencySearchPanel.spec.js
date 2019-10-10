import TheSearchForAgencySearchPanel from "@/components/TheSearchForAgencySearchPanel.vue";

describe("TheSearchForAgencySearchPanel.vue", () => {
  it("Received countries prop", () => {
    const wrapper = shallowFactory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });
    expect(wrapper.vm.countries).toHaveLength(1);
  });

  it("Received cities prop", () => {
    const wrapper = shallowFactory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh", "Hanoi", "Danang", "Hue"] });
    expect(wrapper.vm.cities).toHaveLength(4);
  });

  it("Received services prop", () => {
    const wrapper = shallowFactory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ services: [] });
    expect(wrapper.vm.services).toEqual([]);
  });

  it("Emit 'removeCountry' with correct value when click country filter item", () => {
    const wrapper = factory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")).toBeTruthy();
    expect(wrapper.emitted("removeCountry")[0]).toEqual(["Vietnam"]);
  });

  it("Emit 'removeCity' with correct value when click city filter item", () => {
    const wrapper = factory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCity")).toBeTruthy();
    expect(wrapper.emitted("removeCity")[0]).toEqual(["Ho Chi Minh"]);
  });

  it("Emit 'removeService' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForAgencySearchPanel);
    wrapper.setProps({ services: [{ text: "Animation", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeService")).toBeTruthy();
    expect(wrapper.emitted("removeService")[0]).toEqual(["zzz"]);
  });
});
