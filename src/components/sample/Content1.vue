<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card>
        <v-card-title>
          <v-toolbar dark color="info">
            <v-toolbar-title>サンプルコンテンツ1</v-toolbar-title>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-container fluid class="px-0">
            <h1>テスト</h1>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>

    <v-layout justify-center align-center column>
      <v-flex>
        <v-card>
          <v-card-title>サンプルコンテンツ1</v-card-title>
          <v-card-text>
            <v-container fluid class="px-0">
              <h1>テスト1</h1>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>サンプルコンテンツ2</v-card-title>
          <v-card-text>
            <v-container fluid class="px-0">
              <h1>テスト2</h1>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-row align="center" justify="center">
      <v-col cols="2">
        <v-btn @click="confirm('確認テスト')">確認</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn @click="warning('確認テスト')">警告</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn @click="complete('処理完了')">完了</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>