<template>
    <div>
        <h4 class="subhead">{{ $t("project_payment.project_payment") }}</h4>

        <v-radio-group v-model="radio" column class="flex-grow-1 mt-2">
            <v-radio
                v-for="(user, i) in projectPayment"
                :key="i"
                :label="user.text"
                :value="user.value"
                :color="inputBorderColor"
            ></v-radio>
        </v-radio-group>

        <v-slide-y-transition>
            <v-text-field
                class="mt-0 pt-0"
                v-show="radio"
                :label="$t('project_payment.payment_amount')"
                v-model="paymentAmount"
            ></v-text-field>
        </v-slide-y-transition>
    </div>
</template>

<script>
export default {
    name: "TheProjectPayment",

    data() {
        return {
            radio: "",
            paymentAmount: ""
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        projectPayment() {
            return [
                {
                    text: this.$t("project_payment.one_time"),
                    value: "one-time"
                },
                { text: this.$t("project_payment.hour"), value: "hour" }
            ];
        },

        payment() {
            return {
                payment_method: this.radio,
                payment_amount: this.paymentAmount
            };
        }
    },

    watch: {
        payment(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("update:value", newValue);
            }
        }
    }
};
</script>

<style>
</style>