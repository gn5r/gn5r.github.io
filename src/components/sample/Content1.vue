<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card>
        <v-card-title class="px-0 pt-0">
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
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>