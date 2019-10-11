<template>
    <div class="custom-card d-flex pa-5">
        <div class="avatar-container d-flex flex-column">
            <v-avatar size="100">
                <img :src="user.avatar" alt="Avatar" />
            </v-avatar>

            <v-rating
                v-model="user.rating"
                background-color="orange lighten-3"
                color="orange"
                half-increments
                dense
                small
            ></v-rating>
        </div>

        <div class="information d-flex flex-column ml-5 flex-grow-1 text-left">
            <h5 class="headline">{{ user.full_name }}</h5>

            <div class="subhead-container">
                <h5 class="subhead body-2 d-inline-block" v-if="user.job_title">{{ user.job_title }}</h5>
                <h5 class="subhead body-2 d-inline-block" v-if="user.company">{{ user.company }}</h5>

                <v-btn
                    text
                    icon
                    color="primary"
                    :disabled="!user.website"
                    :href="user.website"
                    target="_blank"
                    small
                >
                    <v-icon>mdi-web</v-icon>
                </v-btn>

                <v-btn
                    text
                    icon
                    color="primary"
                    :disabled="!user.facebook"
                    :href="user.facebook"
                    target="_blank"
                    small
                >
                    <v-icon>mdi-facebook-box</v-icon>
                </v-btn>

                <v-btn
                    text
                    icon
                    color="primary"
                    :disabled="!user.linkedin"
                    :href="user.linkedin"
                    target="_blank"
                    small
                >
                    <v-icon>mdi-linkedin-box</v-icon>
                </v-btn>

                <v-btn
                    text
                    icon
                    color="primary"
                    :disabled="!user.twitter"
                    :href="user.twitter"
                    target="_blank"
                    small
                >
                    <v-icon>mdi-twitter-box</v-icon>
                </v-btn>

                <v-btn
                    text
                    icon
                    color="primary"
                    :disabled="!user.instagram"
                    :href="user.instagram"
                    target="_blank"
                    small
                >
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
            </div>

            <div class="contact-container text-left body-2">
                <div class="grid-item">
                    <v-icon size="18">mdi-phone-classic</v-icon>
                    <span class="ml-2">+8428123456</span>
                </div>

                <div class="grid-item">
                    <v-icon size="18">mdi-map-marker</v-icon>
                    <span class="ml-2">Vietnam, Ho Chi Minh City</span>
                </div>
                <div class="grid-item">
                    <v-icon size="18">mdi-cellphone-iphone</v-icon>
                    <span class="ml-2">+84932523257</span>
                </div>

                <div class="grid-item">
                    <v-icon size="18">mdi-email-outline</v-icon>
                    <span class="ml-2">anh.nguyen@apmediahub.com</span>
                </div>
            </div>

            <div class="chips-container d-flex flex-wrap mt-4 text-left">
                <v-chip v-for="(chip, index) in chipFields" :key="`chip${index}`">{{chip}}</v-chip>
            </div>
        </div>

        <div>
            <v-checkbox
                @change="onCheckboxChange"
                label="Select user"
                class="mt-0 pt-0"
                color="primary"
            ></v-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchResultItem",

    props: {
        user: {
            type: Object,
            required: true
        },

        chipFieldName: String
    },

    computed: {
        chipFields() {
            if (!this.chipFieldName) return [];
            return this.user[this.chipFieldName];
        }
    },

    methods: {
        onCheckboxChange(value) {
            const event = true === value ? "checked" : "unchecked";
            this.$emit(event, this.user._id);
        }
    }
};
</script>

<style lang="scss" scoped>
.custom-card {
    border: 1px solid #e0e0e0;
    background: #fff;
}

.subhead-container {
    .subhead {
        color: #7f7f7f;
        font-weight: 400;
        padding-right: 5px;

        &::after {
            content: "|";
            margin-left: 9px;
        }
    }
}

.contact-container {
    display: grid;
    grid-template-columns: 150px auto;

    .grid-item {
        margin-top: 10px;
    }
}

.chips-container {
    .v-chip {
        margin-right: 10px;
        margin-bottom: 5px;
    }
}
</style>