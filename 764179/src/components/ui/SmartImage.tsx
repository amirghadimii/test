import Image from "next/image";
import { unsplash } from "@/lib/utils";

type SmartImageProps = {
  /** Either an Unsplash photo id (photo-xxxx) or a full image URL. */
  src: string;
  alt: string;
  width?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function SmartImage({
  src,
  alt,
  width = 1600,
  sizes = "100vw",
  priority = false,
  className = "",
}: SmartImageProps) {
  const isUnsplash = src.startsWith("photo-");

  if (isUnsplash) {
    return (
      <Image
        src={unsplash(src, width)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
