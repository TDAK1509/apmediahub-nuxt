import TheSearchForMediaSearchPanel from "@/components/TheSearchForMediaSearchPanel.vue";

describe("TheSearchForMediaSearchPanel.vue", () => {
  it("Received countries prop", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });
    expect(wrapper.vm.countries).toHaveLength(1);
  });

  it("Received media prop", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ media: ["Ho Chi Minh", "Hanoi", "Danang", "Hue"] });
    expect(wrapper.vm.media).toHaveLength(4);
  });

  it("Received segments prop", () => {
    const wrapper = shallowFactory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ segments: [] });
    expect(wrapper.vm.segments).toEqual([]);
  });

  it("Emit 'removeCountry' with correct value when click country filter item", () => {
    const wrapper = factory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ countries: ["Vietnam"] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeCountry")).toBeTruthy();
    expect(wrapper.emitted("removeCountry")[0]).toEqual(["Vietnam"]);
  });

  it("Emit 'removeSegment' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ segments: [{ text: "Animation", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeSegment")).toBeTruthy();
    expect(wrapper.emitted("removeSegment")[0]).toEqual(["zzz"]);
  });

  it("Emit 'removeMedia' with correct value when click services filter item", () => {
    const wrapper = factory(TheSearchForMediaSearchPanel);
    wrapper.setProps({ media: [{ text: "Animation", value: "zzz" }] });

    const btn = wrapper.find(".btn-close");
    btn.trigger("click");

    expect(wrapper.emitted("removeMedia")).toBeTruthy();
    expect(wrapper.emitted("removeMedia")[0]).toEqual(["zzz"]);
  });
});
