<template>
  <DefaultTheme.Layout />
</template>

<script setup lang="ts">
// Utitlities
import { onMounted, watch } from "vue";

// Composables
import { useData } from "vitepress";
import { useTheme } from "vuetify";

// Theme
import DefaultTheme from "vitepress/theme";

const { isDark } = useData();
const { global } = useTheme();

function syncTheme() {
  global.name.value = isDark.value ? "dark" : "light";
}

onMounted(() => {
  syncTheme();
});

watch(isDark, () => syncTheme());
</script>

<style lang="sass" scoped></style>
