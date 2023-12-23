import { defineConfig } from "vitepress";
import path from "node:path";
import pkg from "../package.json";

const resolve = (dir = "") => path.resolve(__dirname, dir);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja",
  title: "gn5r.github.io",
  description: "Page to introduce who is gn5r",
  srcDir: "./src",
  outDir: `${process.cwd()}/dist`,
  lastUpdated: true,
  head: [
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "ja_JP" }],
    ["meta", { name: "og:site_name", content: "gn5r.github.io" }],
    [
      "meta",
      { name: "og:description", content: "Page to introduce who is gn5r" },
    ],
    ["meta", { name: "og:url", content: "https://gn5r.github.io/" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: "https://github.com/gn5r/gn5r.github.io/edit/main/src/:path",
      text: "GitHubで編集する",
    },
    lastUpdated: {
      text: "最終更新日",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    nav: [
      {
        text: pkg.version,
        link: "https://github.com/gn5r/gn5r.github.io/releases",
      },
    ],
    sidebar: [{}],
    socialLinks: [
      { icon: "github", link: "https://github.com/gn5r/gn5r.github.io/" },
      {
        icon: "discord",
        link: "https://discordapp.com/users/587689211109572619",
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve("./"),
        "@theme": resolve("./theme/"),
      },
    },
    ssr: {
      noExternal: ["vuetify"],
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
});
