import TheSearchForJournalistSearchPanel from "@/components/TheSearchForJournalistSearchPanel.vue";

describe("TheSearchForJournalistSearchPanel.vue", () => {
  it("Received countries prop", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });
    expect(wrapper.vm.countries).toHaveLength(1);
  });

  it("Received cities prop", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh", "Hanoi", "Danang", "Hue"] });
    expect(wrapper.vm.cities).toHaveLength(4);
  });

  it("Received segments prop", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ segments: [] });
    expect(wrapper.vm.segments).toHaveLength(0);
  });

  it("Received mediaTypes prop", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({
      mediaTypes: ["Tuoi Tre Newspaper", "Cabbage Newspaper"]
    });
    expect(wrapper.vm.mediaTypes).toHaveLength(2);
  });

  it("Emit 'removeCountry' when click country filter item", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")).toBeTruthy();
  });

  it("Emit 'removeCountry' with correct value", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);

    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")[0]).toEqual(["Vietnam"]);
  });
});
