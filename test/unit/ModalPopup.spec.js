import ModalPopup from "@/components/ModalPopup.vue";

describe("ModalPopup.vue", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowFactory(ModalPopup);
    });

    it("Has title", () => {
        wrapper = shallowFactory(ModalPopup, {
            propsData: {
                title: "Hahaha"
            }
        });

        expect(wrapper.text()).toContain("Hahaha");
    });

    it("Clicks 'close' button emit 'input' with false params", () => {
        wrapper = factory(ModalPopup);
        wrapper.find("[data-test=closeButton]").trigger("click");
        expect(wrapper.emitted("input")).toBeTruthy();
        expect(wrapper.emitted("input")[0]).toEqual([false]);
    });

    it("Clicks outside emit 'input'", () => {
        wrapper.find("[data-test=modalContainer]").trigger("click");
        expect(wrapper.emitted("input")).toBeTruthy();
        expect(wrapper.emitted("input")[0]).toEqual([false]);
    });

    it("Clicks inside modal does not emit 'input'", () => {
        wrapper.find("[data-test=modal]").trigger("click");
        expect(wrapper.emitted("input")).not.toBeTruthy();
    });
});
