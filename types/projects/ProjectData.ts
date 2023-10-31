import type { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";
import type { Blocks } from "~/types/projects/blocks/Blocks";

export interface ProjectData extends ParsedContentInternalMeta {
  title: string;
  description: string;
  date: string;
  blocks: Blocks;
}
