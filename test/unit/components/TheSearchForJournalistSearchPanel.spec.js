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

  it("Received media prop", () => {
    const wrapper = shallowFactory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({
      media: ["Tuoi Tre Newspaper", "Cabbage Newspaper"]
    });
    expect(wrapper.vm.media).toHaveLength(2);
  });

  it("Emit 'removeCountry' with correct value when click country filter item", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")).toBeTruthy();
    expect(wrapper.emitted("removeCountry")[0]).toEqual(["Vietnam"]);
  });

  it("Emit 'removeCity' with correct value when click city filter item", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ cities: ["Ho Chi Minh"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCity")).toBeTruthy();
    expect(wrapper.emitted("removeCity")[0]).toEqual(["Ho Chi Minh"]);
  });

  it("Emit 'removeSegment' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ segments: [{ text: "Segment A", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeSegment")).toBeTruthy();
    expect(wrapper.emitted("removeSegment")[0]).toEqual(["zzz"]);
  });

  it("Emit 'removeMedia' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForJournalistSearchPanel);
    wrapper.setProps({ media: [{ text: "Mediaaaaaaaaa A", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeMedia")).toBeTruthy();
    expect(wrapper.emitted("removeMedia")[0]).toEqual(["zzz"]);
  });
});
