import type { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";
import type { Component } from "@nuxt/schema";

export interface InfoData extends ParsedContentInternalMeta {
  title: string;
  description: string;
  component?: string;
}
