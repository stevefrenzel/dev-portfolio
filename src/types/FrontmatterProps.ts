import type { ImageProps } from "./ImageProps";

export interface FrontmatterProps {
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: ImageProps;
  tags: string[];
  file: string;
  url: string;
}
