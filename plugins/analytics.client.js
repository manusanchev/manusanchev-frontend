import { inject } from "@vercel/analytics";

export default defineNuxtPlugin({
  name: "analytics",
  parallel: true,
  async setup() {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    inject();
  },
});
