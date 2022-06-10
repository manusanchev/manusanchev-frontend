import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin'
import pathLib from "path";
const tsConfig = require("./tsconfig.json");

const alias = Object.entries(tsConfig.compilerOptions.paths)
    .map((path) => {
      return {
        [path[0].replace("/*", "")]: pathLib.resolve(
            __dirname,
            path[1][0].replace("/*", "")
        ),
      };
    })
    .reduce((current, next) => {
      return { ...current, ...next };
    }, {});

export default defineConfig({
  plugins: [
    viteSSR({
      build: {
        keepIndexHtml: true,
      },
    }),
    vue(),
  ],
  envPrefix: 'APP_', // change to name app
  resolve: {
    alias: {
      ...alias,
    },
  },
});