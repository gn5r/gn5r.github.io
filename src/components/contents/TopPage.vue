<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <h1>Vue.jsでテキトーに作ってみた</h1>
      </v-flex>

      <v-flex>
        <profile />
      </v-flex>
    </v-layout>
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