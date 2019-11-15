<template>
  <div class="custom-card pa-5" ref="container">
    <div class="avatar-container d-flex flex-column mr-5">
      <v-avatar :size="avatarSize">
        <img :src="avatar" alt="Avatar" />
      </v-avatar>

      <v-rating
        v-model="user.rating"
        background-color="orange lighten-3"
        color="orange"
        half-increments
        dense
        small
        readonly
      ></v-rating>
    </div>

    <div class="information-container d-flex flex-column text-left">
      <h5 class="headline">{{ user.full_name }}</h5>

      <div class="subhead-container d-flex align-center flex-wrap">
        <h5 class="subhead body-2 d-inline-block" v-if="user.job_title">{{ user.job_title }}</h5>
        <h5 class="subhead body-2 d-inline-block" v-if="user.company">{{ user.company }}</h5>

        <div class="social-container">
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
      </div>
    </div>

    <div class="contact-container text-left body-2">
      <div class="grid-item">
        <v-icon size="18">mdi-phone-classic</v-icon>
        <span class="ml-2">{{ userLandline }}</span>
      </div>

      <div class="grid-item">
        <v-icon size="18">mdi-map-marker</v-icon>
        <span class="ml-2">{{ userLocation }}</span>
      </div>
      <div class="grid-item">
        <v-icon size="18">mdi-cellphone-iphone</v-icon>
        <span class="ml-2">{{ userMobile }}</span>
      </div>

      <div class="grid-item">
        <v-icon size="18">mdi-email-outline</v-icon>
        <span class="ml-2">{{ user.email }}</span>
      </div>
    </div>

    <div class="chips-container d-flex flex-wrap mt-4 text-left">
      <v-chip v-for="(chip, index) in chipFields" :key="`chip${index}`">{{chip}}</v-chip>
    </div>

    <div class="checkbox-container mt-2 mt-md-0">
      <v-checkbox
        @change="onCheckboxChange"
        label="Select user"
        class="mt-0 pt-0"
        color="primary"
        hide-details
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
import defaultAvatar from "@/assets/images/avatar_default.jpg";

export default {
  name: "UserListItem",

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
    },

    avatar() {
      return this.user.avatar || defaultAvatar;
    },

    avatarSize() {
      return this.$vuetify.breakpoint.mdAndUp ? "100" : "80";
    },

    userMobile() {
      if (!this.user.mobile) return "";
      return this.user.mobile.country_code + " " + this.user.mobile.number;
    },

    userLandline() {
      if (!this.user.landline) return "";
      return (
        this.user.landline.country_code +
        " " +
        this.user.landline.number +
        this.userLandlineExt
      );
    },

    userLandlineExt() {
      if (!this.user.landline) return "";
      if (this.user.landline.ext) return " - " + this.user.landline.ext;
    },

    userLocation() {
      if (!this.user.country) return "";
      return this.user.country + ", " + this.user.city;
    }
  },

  methods: {
    onCheckboxChange(value) {
      const event = true === value ? "checked" : "unchecked";
      this.$emit(event, this.user._id);
      this.$refs.container.classList.toggle("active");
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-card {
  border: 1px solid #e0e0e0;
  background: #fff;
  display: grid;
  grid-template-areas:
    "avatar information checkbox"
    "avatar contact contact"
    "avatar chips chips";
  grid-template-columns: auto 1fr auto;

  @media only screen and (max-width: 900px) {
    grid-template-areas:
      "avatar information"
      "checkbox information"
      "contact contact"
      "chips chips";
    grid-template-columns: auto 1fr;
  }

  &.active {
    border-left: 5px solid #c80000;
  }
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

.avatar-container {
  grid-area: avatar;
}

.information-container {
  grid-area: information;
}

.contact-container {
  grid-area: contact;
  display: grid;
  grid-template-columns: auto 1fr;

  .grid-item {
    margin-top: 10px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
}

.chips-container {
  grid-area: chips;

  .v-chip {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}

.checkbox-container {
  grid-area: checkbox;
}
</style>