import TheSearchForFreelancerSearchPanel from "@/components/TheSearchForFreelancerSearchPanel.vue";

describe("TheSearchForFreelancerSearchPanel.vue", () => {
  it("Received countries prop", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });
    expect(wrapper.vm.countries).toHaveLength(1);
  });

  it("Received cities prop", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh", "Hanoi", "Danang", "Hue"] });
    expect(wrapper.vm.cities).toHaveLength(4);
  });

  it("Received services prop", () => {
    const wrapper = shallowFactory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ services: [] });
    expect(wrapper.vm.services).toEqual([]);
  });

  it("Emit 'removeCountry' when click country filter item", () => {
    const wrapper = factory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")).toBeTruthy();
  });

  it("Emit 'removeCountry' with correct value", () => {
    const wrapper = factory(TheSearchForFreelancerSearchPanel);

    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")[0]).toEqual(["Vietnam"]);
  });

  it("Emit 'removeCity' when click city filter item", () => {
    const wrapper = factory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCity")).toBeTruthy();
  });

  it("Emit 'removeCity' with correct value", () => {
    const wrapper = factory(TheSearchForFreelancerSearchPanel);

    wrapper.setProps({ cities: ["Ho Chi Minh"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCity")[0]).toEqual(["Ho Chi Minh"]);
  });

  it("Emit 'removeService' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForFreelancerSearchPanel);
    wrapper.setProps({ services: [{ text: "Animation", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeService")).toBeTruthy();
    expect(wrapper.emitted("removeService")[0]).toEqual(["zzz"]);
  });
});
