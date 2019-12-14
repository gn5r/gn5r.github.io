<template>
  <v-card max-width="512">
    <v-card-text>
      <v-container fluid>
        <v-layout justify-start align-baseline>
          <v-flex xs6>
            <v-avatar size="164" tile>
              <v-img src="@/assets/img/gn5r.png" />
            </v-avatar>
          </v-flex>

          <v-flex>
            <v-layout justify-start align-baseline column>
              <v-flex>
                <v-text-field label="名前" value="銀澪(ぎんれい)" readonly />
              </v-flex>

              <v-flex>
                <v-text-field label="一言" value="組込系Webプログラマ" readonly />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.avatar {
  /* height: 50px;
  width: 50px; */
  border: dotted 1px gray;
}
</style>