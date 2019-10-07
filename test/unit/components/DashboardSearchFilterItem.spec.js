import DashboardSearchFilterItem from "@/components/DashboardSearchFilterItem.vue";

describe("DashboardSearchFilterItem.vue", () => {
  it("emit 'remove' on X button click", () => {
    const wrapper = shallowFactory(DashboardSearchFilterItem);
    const btn = wrapper.find(".btn-close");
    btn.trigger("click");
    expect(wrapper.emitted("remove")).toBeTruthy();
  });
});
