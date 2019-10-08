export default {
  data() {
    return {
      servicesInterface: {
        animation: false,
        audio_video_production: false,
        photography: false,
        logo_design_branding: false,
        graphic_design: false,
        collateral_design: false,
        art_illustration: false,
        voice_talent: false,
        brand_identity_strategy: false,
        motion_graphics: false,
        web_design: false,
        other: false
      }
    };
  },

  computed: {
    serviceKeyList() {
      return Object.keys(this.servicesInterface);
    },

    serviceList() {
      return this.serviceKeyList.map(service => {
        const localeKey = `services.${service}`;

        return {
          text: this.$t(localeKey),
          value: service
        };
      });
    }
  }
};
