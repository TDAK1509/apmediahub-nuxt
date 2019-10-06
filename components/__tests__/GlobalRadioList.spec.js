import RadioList from "../global/RadioList.vue";

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

  it("emit update value on change radio", () => {
    const wrapper = shallowMount(RadioList);
    wrapper.vm.radio = "hahaha";
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it("receive list prop", () => {
    const wrapper = shallowMount(RadioList);
    wrapper.setProps(prop);
    expect(wrapper.props("list")).toBeTruthy();
  });

  it("has no radio if no list prop received", () => {
    const wrapper = mount(RadioList);
    const radio = wrapper.findAll(".v-radio");
    expect(radio.length).toBe(0);
  });

  it("has number of radios equal to list prop length", () => {
    const wrapper = mount(RadioList);
    wrapper.setProps(prop);
    const radio = wrapper.findAll(".v-radio");
    const propLength = wrapper.props("list").length;
    expect(radio.length).toBe(propLength);
  });
});
