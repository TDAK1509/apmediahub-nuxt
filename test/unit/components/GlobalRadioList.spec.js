import RadioList from "@/components/global/RadioList.vue";

describe("RadioList.vue", () => {
  let prop;

  beforeEach(() => {
    prop = {
      list: [
        {
          text: "Less than a week",
          value: "less_than_a_week"
        },

        {
          text: "Hahhaha",
          value: "hihihi"
        }
      ]
    };
  });

  it("receive list prop", () => {
    const wrapper = shallowFactory(RadioList);
    wrapper.setProps(prop);
    expect(wrapper.props("list")).toBeTruthy();
  });

  it("has no radio if no list prop received", () => {
    const wrapper = factory(RadioList);
    const radio = wrapper.findAll(".v-radio");
    expect(radio).toHaveLength(0);
  });

  it("has number of radios equal to list prop length", () => {
    const wrapper = factory(RadioList);
    wrapper.setProps(prop);
    const radio = wrapper.findAll(".v-radio");
    const propLength = wrapper.props("list").length;
    expect(radio).toHaveLength(propLength);
  });

  it("emit update value on change radio", () => {
    const wrapper = factory(RadioList);
    wrapper.setProps(prop);
    const radio = wrapper.find(".v-label");
    radio.trigger("click");
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });
});
