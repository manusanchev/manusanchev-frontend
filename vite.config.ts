import vue from '@vitejs/plugin-vue'
import pathLib from "path";
const tsConfig = require("./tsconfig.json");
import { defineConfig } from 'vitest/config'

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
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
  },
  preview: {
    port: 3000
  },
  server: {
    host: true,
    port: 3000
  },
  plugins: [
    vue(),
  ],
  envPrefix: 'APP_', // change to name app
  resolve: {
    alias: {
      ...alias,
    },
  },
});