<template>
    <div>
        <h4 class="subhead">{{ $t("project_payment.project_payment") }}</h4>

        <v-radio-group v-model="paymentMethod" column class="flex-grow-1 mt-2">
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
                ref="paymentAmount"
                v-show="paymentMethod"
                :color="inputBorderColor"
                :label="$t('project_payment.payment_amount')"
                v-model="paymentAmount"
                :rules="paymentAmountRules"
            ></v-text-field>
        </v-slide-y-transition>
    </div>
</template>

<script>
import inputRules from "~/mixins/input-rules";

export default {
    name: "TheProjectPayment",

    mixins: [inputRules],

    data() {
        return {
            paymentMethod: "",
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
                    text: this.$t("project_payment.fixed"),
                    value: "one-time"
                },
                { text: this.$t("project_payment.hour"), value: "hour" }
            ];
        },

        paymentAmountRules() {
            return !this.paymentMethod ? [] : [this.inputRules.required];
        },

        payment() {
            return {
                payment_method: this.paymentMethod,
                payment_amount: this.paymentAmount
            };
        }
    },

    watch: {
        payment(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("update:value", newValue);
            }
        },

        paymentMethod(newValue, oldValue) {
            this.focusPaymentAmount();
        }
    },

    methods: {
        focusPaymentAmount() {
            this.$nextTick(this.$refs.paymentAmount.focus);
        }
    }
};
</script>

<style>
</style>