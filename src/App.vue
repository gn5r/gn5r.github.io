<template>
  <v-app>
    <header-bar />
    <v-content>
      <router-view />
    </v-content>
    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
import FooterBar from "@/components/common/FooterBar";

export default {
  name: "App",

  components: {
    HeaderBar,
    FooterBar
  },

  data: () => ({
    //
  })
};
</script>
