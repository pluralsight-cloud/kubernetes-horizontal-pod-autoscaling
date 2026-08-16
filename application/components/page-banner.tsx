import Image from "next/image";
import type { ReactNode } from "react";

type PageBannerProps = {
  imageSrc: string;
  mobileImageSrc?: string;
  alt: string;
  children: ReactNode;
};

export function PageBanner({
  imageSrc,
  mobileImageSrc,
  alt,
  children,
}: PageBannerProps) {
  return (
    <section className="relative">
      <div className="relative hidden min-h-[420px] w-full md:block md:aspect-[21/9]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative h-[400px] w-full md:hidden">
        <Image
          src={mobileImageSrc ?? imageSrc}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 text-white">
        <div className="mx-auto flex h-full w-full max-w-[1170px] items-start px-4 pt-12 md:items-center md:pt-0">
          {children}
        </div>
      </div>
    </section>
  );
}
