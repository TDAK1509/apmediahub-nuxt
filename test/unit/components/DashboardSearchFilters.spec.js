import DashboardSearchFilters from "@/components/DashboardSearchFilters";

describe("DashboardSearchFilters.vue", () => {
  it("Emit 'change' with correct pair (key, value) on value change", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);
    let index = 0;

    wrapper.vm.countries.push("Vietnam");
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "countries", value: ["Vietnam"] }
    ]);

    wrapper.vm.cities.push("abc");
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "cities", value: ["abc"] }
    ]);

    wrapper.vm.services = ["abc", "def"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "services", value: ["abc", "def"] }
    ]);

    wrapper.vm.serviceLevels = ["123", "expert"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "serviceLevels", value: ["123", "expert"] }
    ]);

    wrapper.vm.segments = ["seggggg"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "segments", value: ["seggggg"] }
    ]);

    wrapper.vm.media = ["newspaper"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "media", value: ["newspaper"] }
    ]);

    wrapper.vm.languages = ["English"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "languages", value: ["English"] }
    ]);

    wrapper.vm.jobTitles = ["Hacker"];
    expect(wrapper.emitted("change")[index++]).toEqual([
      { key: "jobTitles", value: ["Hacker"] }
    ]);
  });

  it("Only show country block if 'showCountries' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".countries-container").exists()).toBe(false);

    wrapper.setProps({ showCountries: true });

    expect(wrapper.find(".countries-container").exists()).toBe(true);
  });

  it("Only show city block if 'showCities' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".cities-container").exists()).toBe(false);

    wrapper.setProps({ showCities: true });

    expect(wrapper.find(".cities-container").exists()).toBe(true);
  });

  it("Only show services block if 'showServices' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".services-container").exists()).toBe(false);

    wrapper.setProps({ showServices: true });

    expect(wrapper.find(".services-container").exists()).toBe(true);
  });

  it("Only show service level block if 'showServiceLevels' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".service-levels-container").exists()).toBe(false);

    wrapper.setProps({ showServiceLevels: true });

    expect(wrapper.find(".service-levels-container").exists()).toBe(true);
  });

  it("Only show media block if 'showMedia' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".media-container").exists()).toBe(false);

    wrapper.setProps({ showMedia: true });

    expect(wrapper.find(".media-container").exists()).toBe(true);
  });

  it("Only show segments block if 'showSegments' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".segments-container").exists()).toBe(false);

    wrapper.setProps({ showSegments: true });

    expect(wrapper.find(".segments-container").exists()).toBe(true);
  });

  it("Only show jobTitle block if 'showJobTitles' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".job-title-container").exists()).toBe(false);

    wrapper.setProps({ showJobTitles: true });

    expect(wrapper.find(".job-title-container").exists()).toBe(true);
  });

  it("Only show Language block if 'showLanguages' prop is true", () => {
    const wrapper = shallowFactory(DashboardSearchFilters);

    expect(wrapper.find(".language-container").exists()).toBe(false);

    wrapper.setProps({ showLanguages: true });

    expect(wrapper.find(".language-container").exists()).toBe(true);
  });
});
