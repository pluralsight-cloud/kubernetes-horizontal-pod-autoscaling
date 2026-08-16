import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export function FeatureCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  href,
}: FeatureCardProps) {
  return (
    <article className="text-center md:text-left">
      <h3 className="text-2xl font-extrabold text-[#5E5E5E]">{title}</h3>
      <p className="mb-2.5 text-base text-[#9C9C9C]">{subtitle}</p>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={520}
          className="h-auto w-full"
        />
        <div className="absolute right-0 bottom-7 left-0 text-center">
          <Link
            href={href}
            className="inline-block rounded-full bg-teal px-8 py-2.5 text-xs font-semibold text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}
