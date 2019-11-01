import ModalConfirm from "@/components/ModalConfirm.vue";

describe("ModalConfirm.vue", () => {
    let wrapper;

    it("Renders title", () => {
        wrapper = shallowFactory(ModalConfirm, {
            propsData: {
                title: "cai lon gi vay",
                value: true
            }
        });

        expect(wrapper.text()).toContain("cai lon gi vay");
    });

    it("Click 'yes' emit 'yes'", () => {
        wrapper = factory(ModalConfirm, {
            propsData: {
                value: true
            }
        });
        wrapper.find("[data-test=yesButton]").trigger("click");
        expect(wrapper.emitted("yes")).toBeTruthy();
    });

    it("Click 'no' close modal", () => {
        const close = jest.fn();
        wrapper = factory(ModalConfirm, {
            propsData: {
                value: true
            },

            methods: {
                close
            }
        });

        wrapper.find("[data-test=noButton]").trigger("click");
        expect(close).toBeCalled();
    });
});
