<template>
  <v-container fluid>
    <v-row justify="start" align="center">
      <h1>Vue.jsでテキトーに作ってみた</h1>
    </v-row>

    <v-row justify="center" align="center">
      <profile />
    </v-row>
  </v-container>
</template>

<script>
import Profile from "@/components/contents/Profile";
export default {
  components: {
    Profile
  }
};
</script>
<style>
</style>