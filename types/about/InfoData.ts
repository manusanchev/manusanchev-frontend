import type { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";

export interface InfoData extends ParsedContentInternalMeta {
  title: string;
  description: string;
}
