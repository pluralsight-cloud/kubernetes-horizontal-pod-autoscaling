import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Media",
};

const articles = [
  {
    title: "Sic Transit Gloria Mundi",
    imageSrc: "/images/girl.png",
    imageAlt: "Media story",
    imageFirst: false,
  },
  {
    title: "Sic Transit Gloria Mundi",
    imageSrc: "/images/sec2.jpg",
    imageAlt: "Media story",
    imageFirst: true,
  },
  {
    title: "Sic Transit Gloria Mundi",
    imageSrc: "/images/sec3.jpg",
    imageAlt: "Media story",
    imageFirst: false,
  },
];

export default function MediaPage() {
  return (
    <>
      <PageBanner imageSrc="/images/banner3.png" alt="Watch this video">
        <div>
          <h1 className="text-left text-[43px] leading-[53px] font-extrabold md:text-[56px] md:leading-[45px]">
            WATCH THIS VIDEO
          </h1>
          <span className="text-xl md:text-4xl">WE DO THINGS IN IT</span>
          <p className="mt-3 flex items-center text-sm italic md:text-lg">
            <span className="mr-3 inline-flex items-center rounded border-2 border-white px-4 py-1.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Click for inspiration at cosmic levels
          </p>
        </div>
      </PageBanner>

      {articles.map((article, index) => (
        <section key={`${article.imageSrc}-${index}`} className="py-10 md:py-16">
          <Container>
            <div className="grid items-start gap-8 md:grid-cols-12">
              <div
                className={`md:col-span-4 ${article.imageFirst ? "" : "md:order-2"}`}
              >
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  width={640}
                  height={480}
                  className="h-auto w-full"
                />
              </div>
              <div
                className={`md:col-span-8 ${article.imageFirst ? "" : "md:order-1"}`}
              >
                <h3 className="mb-3 text-[26px] font-extrabold text-[#373737]">
                  {article.title}
                </h3>
                <p className="text-sm leading-6 text-[#373737]">
                  At the deepest level of its core, technology embodies the
                  circle of life. And from an old age Larry Shepard unlearned
                  how to harness that circle and perpetuate it through more
                  technology. I need more copy here. At the deepest level of its
                  core, technology embodies the circle of life. And from an old
                  age Larry Shepard unlearned how to harness that circle and
                  perpetuate it through more technology. At the deepest level of
                  its core, technology embodies the circle of life.
                </p>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
