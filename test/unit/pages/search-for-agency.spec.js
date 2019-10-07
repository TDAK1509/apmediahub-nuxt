import SearchForAgency from "@/pages/_lang/dashboard/search-for-agency.vue";
import axios from "axios";

describe("SearchForAgency.vue", () => {
  it("Add to search panel when change countries", () => {
    const wrapper = shallowFactory(SearchForAgency);
    const countries = ["Vietnam", "China"];
    wrapper.vm.search.countries = countries;

    const searchFilters = wrapper.findAll(".search-filter-item");

    expect(searchFilters.length).toBe(countries.length);
  });

  it("Add to search panel when change cities", () => {
    const wrapper = shallowFactory(SearchForAgency);
    const cities = ["Ho Chi Minh"];
    wrapper.vm.search.cities = cities;

    const searchFilters = wrapper.findAll(".search-filter-item");

    expect(searchFilters.length).toBe(cities.length);
  });

  it("Add to search panel when change service level", () => {
    const wrapper = shallowFactory(SearchForAgency);
    const serviceLevel = "expert";
    wrapper.vm.search.serviceLevel = serviceLevel;

    const searchFilters = wrapper.findAll(".search-filter-item");

    expect(searchFilters.length).toBe(serviceLevel.length);
  });

  it("Add to search panel when change services", () => {
    const wrapper = shallowFactory(SearchForAgency);
    const services = ["NodeJS", "Animation"];
    wrapper.vm.search.services = services;

    const searchFilters = wrapper.findAll(".search-filter-item");

    expect(searchFilters.length).toBe(services.length);
  });

  it("Make an API call to search when hit SEARCH button", () => {
    const wrapper = shallowFactory(SearchForAgency);
    const btn = wrapper.find(".v-btn");

    const mockResponse = { status: 200, data: { success: true } };
    jest.mock("axios", () => ({
      $get: jest.fn(() => Promise.resolve(mockResponse))
    }));

    btn.trigger("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
