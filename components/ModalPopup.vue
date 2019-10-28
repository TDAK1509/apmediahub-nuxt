<template>
    <transition name="bounceIn">
        <div class="modal-container" data-test="modalContainer" @click="close" v-show="value">
            <div class="modal" data-test="modal" @click.stop>
                <div
                    class="title-container d-flex justify-space-between align-center primary white--text pl-3 pr-1 py-2"
                >
                    <h4 class="subtitle-1">{{title}}</h4>

                    <v-btn data-test="closeButton" icon dark small @click="close">
                        <v-icon small>mdi-close</v-icon>
                    </v-btn>
                </div>

                <div class="content py-3 px-3">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalPopup",

    props: {
        title: String,

        value: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        close() {
            this.$emit("input", false);
        }
    }
};
</script>

<style lang="scss" scoped>
.modal-container {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: opacity 0.3s ease;

    .modal {
        box-sizing: border-box;
        height: auto;
        width: 344px;
        background: #fff;
        border-radius: 4px;
        transition: all 0.3s ease;

        .title-container {
            width: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
}

.bounceIn-enter,
.bounceIn-leave-active {
    opacity: 0;
}

.bounceIn-enter .modal,
.bounceIn-leave-active .modal {
    transform: scale(0.5);
}
</style>