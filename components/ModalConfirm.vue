<template>
    <transition name="bounceIn">
        <div class="modal-container" @click="close" v-if="value">
            <div class="modal" data-test="modal" @click.stop>
                <p>{{message}}</p>

                <div class="d-flex justify-center align-center">
                    <v-btn data-test="yesButton" small color="primary" @click="$emit('yes')">Yes</v-btn>
                    <v-btn data-test="noButton" class="ml-5" text tile @click="close">No</v-btn>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalConfirm",

    props: {
        message: String,
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
        padding: 20px;
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