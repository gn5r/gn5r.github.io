<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title>gn5r's GitHub Pages</v-toolbar-title>
    <v-spacer />

    <v-tooltip v-if="debug" bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="$router.push('/')">
          <v-icon>fas fa-home</v-icon>
        </v-btn>
      </template>
      <span>ホームへ戻る</span>
    </v-tooltip>

    <v-tooltip v-if="debug" bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="$router.push('sample')">
          <v-icon>fas fa-pen-alt</v-icon>
        </v-btn>
      </template>
      <span>サンプルページへ遷移</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openHatena">
          <v-img src="@/assets/img/header/hatenablog.png" max-height="32" max-width="32" />
        </v-btn>
      </template>
      <span>はてなブログを開く</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openGitHub">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>GitHubを開く</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" icon @click="openTab">
          <v-img src="@/assets/img/header/qiita.png" max-height="24" max-width="24" />
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
  props: {
    debug: Boolean
  },
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
    },
    openHatena() {
      const uri = "https://gn5r.hatenablog.com/";
      window.open(uri, "Hatena Blog");
    }
  }
};
</script>