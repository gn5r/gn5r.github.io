<template>
  <v-card>
    <v-card-text>
      <v-container fluid class="pa-0">
        <v-row justify="center" align="center" no-gutters>
          <v-avatar size="128">
            <v-img
              class="avatar"
              src="@/assets/img/profile/gn5r.png"
              alt="おれがぎんれいだ"
              title="OGPキャッシュ消さないと、設定したのに反映されないんですけど"
            />
          </v-avatar>
        </v-row>

        <v-row justify="start" align="center" no-gutters>
          <v-col cols="12">
            <v-text-field label="名前" value="銀澪(ぎんれい)" readonly />
            <v-text-field label="bio" value="組込系Webプログラマ" readonly />
          </v-col>
          <v-col cols="12">
            <v-text-field label="一言" value="mdi-github-boxが消えていた件について" readonly />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.avatar {
  /* height: 50px;
  width: 50px; */
  border: dotted 2px blue;
}
</style>