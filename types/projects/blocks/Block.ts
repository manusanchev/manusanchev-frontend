import type { ImageBlockParams } from "~/types/projects/blocks/ImageBlockParams";
import type { VideoBlockParams } from "~/types/projects/blocks/VideoBlockParams";
import type { ProviderBlockParams } from "~/types/projects/blocks/ProviderBlockParams";

export enum BlockType {
  Image = "image",
  Video = "video",
  Provider = "provider",
}

export interface Block {
  type: BlockType;
  params: ImageBlockParams | VideoBlockParams | ProviderBlockParams[];
}
