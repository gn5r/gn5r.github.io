<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title>gn5r's GitHub Pages</v-toolbar-title>
    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openGitHub">
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </template>
      <span>GitHubを開く</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openTab">
          <v-img src="@/assets/img/qiita.png" max-height="24" max-width="24" />
        </v-btn>
      </template>
      <span>Qiitaを開く</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openTwitter">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitterを開く</span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    openTab() {
      const uri = "https://qiita.com/gn5r";
      window.open(uri, "Qiita");
    },
    openTwitter() {
      const uri = "https://twitter.com/Gin_Ray";
      window.open(uri, "Twitter");
    },
    openGitHub() {
      const uri = "https://github.com/gn5r";
      window.open(uri, "GitHub");
    }
  }
};
</script>