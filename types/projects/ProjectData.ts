import type { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";
import type { Block } from "~/types/projects/blocks/Block";

export interface ProjectData extends ParsedContentInternalMeta {
  title: string;
  description: string;
  date: string;
  sortDate: string;
  blocks: Block[];
}
