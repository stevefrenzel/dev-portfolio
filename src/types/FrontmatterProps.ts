export interface ImageProps {
  alt: string;
  url: string;
}

export interface FrontmatterProps {
  thumbnail: string;
  title: string;
  author: string;
  description: string;
  image?: {
    url: {
      src: string;
      width: number;
      height: number;
      format: "avif" | "png" | "webp" | "jpeg" | "jpg" | "svg" | "tiff" | "gif";
    };
    alt: string;
  };
  pubDate: Date;
  tags: string[];
  hideThumbnail?: boolean;
  showIllustration?: boolean;
}
