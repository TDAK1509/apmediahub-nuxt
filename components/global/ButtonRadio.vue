<template>
    <div class="button-radio-container">
        <input
            type="radio"
            class="radio-input"
            :name="name"
            :id="id"
            :value="value"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        />
        <label class="radio-label px-3 py-2 black--text" :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: "ButtonRadio",

    props: {
        name: {
            type: String,
            default: "default_radio"
        },
        id: {
            type: String,
            default: "default_radio"
        },
        value: {
            type: String,
            default: "default_radio_value"
        },
        checked: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.button-radio-container {
    position: relative;
    display: flex;

    .radio-input {
        position: absolute;
        opacity: 0;

        &:checked + .radio-label {
            background: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
        }
    }

    .radio-label {
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
}
</style>