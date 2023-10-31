import type { ImageBlockParams } from "~/types/projects/blocks/ImageBlockParams";
import type {VideoBlockParams} from "~/types/projects/blocks/VideoBlockParams";

export interface Blocks {
  image?: ImageBlockParams;
  video?: VideoBlockParams;
}
