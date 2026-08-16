import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <>
      <PageBanner imageSrc="/images/banner.png" alt="Humble beginnings">
        <div>
          <h1 className="text-left text-[40px] leading-[42px] font-extrabold md:text-[56px] md:leading-[45px]">
            HUMBLE BEGINNINGS
          </h1>
          <span className="text-xl md:text-[34px]">A STORY OF LIFE</span>
          <p className="mt-2.5 max-w-xl text-sm italic md:text-lg">
            How we became the farmers of the future, tilling the technology of
            tomorrow today.
          </p>
        </div>
      </PageBanner>

      <section className="py-10 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8 md:pr-16">
              <h3 className="mb-3 text-[26px] font-extrabold text-[#373737]">
                Sic Transit Gloria Mundi
              </h3>
              <p className="text-sm leading-6 text-[#373737]">
                At the deepest level of its core, technology embodies the circle
                of life. And from an old age Larry Shepard unlearned how to
                harness that circle and perpetuate it through more technology.
                He was graduating preschool, shaking his instructor’s hand while
                holding up his brand new diploma when he saw his mother drop her
                phone. The device caught a twinkle in Larry’s eyes as it fell,
                somehow still holding Larry perfectly in frame to immortialize
                the moment. That was the moment, the exact moment, when Larry
                knew what he would fix with his grant money. The world would
                never again feel the stinging pain experienced in one’s belly
                when a smart phone hits the ground. Never again would a parent
                have to worry about their two year old practicing their dropping
                skills with their pocket technology. Localized anti gravity was
                born and neither phone nor Larry ever touched the ground again.
              </p>
              <p className="mt-5 text-sm leading-6 text-[#373737]">
                It has been nearly 40 years since Larry left us, but the impact
                of his genius is still felt today. They say that two brains are
                better than one, which is why Larry left us with copies of
                himself. Three perfect copies of his beautiful grey matter
                captured in the neural network technology that he helped
                perfect. Two brains are better than one, but nothing beats three
                Larrys.
              </p>
            </div>
            <aside className="md:col-span-4">
              <Image
                src="/images/shutterstock_252243790.png"
                alt="First paper data center"
                width={640}
                height={480}
                className="h-auto w-full"
              />
              <div className="pt-6">
                <h3 className="text-[26px] font-extrabold text-[#373737]">
                  FIRST PAPER DATA CENTER
                </h3>
                <p className="text-sm leading-6 text-[#373737]">
                  The boxes were stacked high and dry with no order whatsoever.
                  The facility ran for 300 nano seconds before it disintegrated.
                  This is the only known surviving photograph.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-10 md:pb-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8 md:pr-16">
              <h3 className="mb-3 text-[26px] font-extrabold text-[#373737]">
                The Journey Continued
              </h3>
              <p className="text-sm leading-6 text-[#373737]">
                Larry may have been the innovative entreprenuerial spark that
                lit the fire of progress and unified the seven islands on this
                ball of water hurdling through space, but that fire still rages.
                From the gamma mutation labs on mercury to the cryolabs of Pluto
                and Eres, Globomantics barrels forward into the unkown, into the
                impossible, the endless wonder of thoughts unthought... into the
                future. As a leader of the sentient beings on this vibration of
                string theory we drive onward, boldly trying the untried and
                solving the unresolvable unsolvable.
              </p>
              <div className="mt-10">
                <h3 className="mb-3 text-[26px] font-extrabold text-[#373737]">
                  Earth-anity and Beyond
                </h3>
                <p className="text-sm leading-6 text-[#373737]">
                  It will be within our lifetime that lifetime ceases to exist.
                  Confusion will be untangled and conflicts defeated through
                  context. All lifeforms shall be unified and commited to a
                  vision of othe future. With the advent of the Doolittle
                  Algorithm, not even our dreams are the limit. A new level of
                  harmony, undreamable to our predecessors, carries us down the
                  stream of conciousnes and into the recesses of the deepest
                  shadows of the largest questions. What is it to be? For that
                  is in fact, the question.
                </p>
              </div>
            </div>
            <aside className="md:col-span-4">
              <Image
                src="/images/shutterstock_564197512.png"
                alt="Larry Shepard, CEO and magician"
                width={640}
                height={480}
                className="h-auto w-full"
              />
              <div className="pt-6">
                <h3 className="text-[26px] font-extrabold text-[#373737]">
                  LARRY SHAPARD, CEO & MAGICIAN
                </h3>
                <p className="text-sm leading-6 text-[#373737]">
                  The man, the myth, the legend.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
