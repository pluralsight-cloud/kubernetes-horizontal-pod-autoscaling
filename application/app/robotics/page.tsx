import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Robotics",
};

const applications = [
  {
    title: "medicine",
    imageSrc: "/images/shutterstock_734412034.png",
    imageAlt: "Medicine",
  },
  {
    title: "AGRICULTURE",
    imageSrc: "/images/shutterstock_725256820.png",
    imageAlt: "Agriculture",
  },
  {
    title: "MANUFACTURING",
    imageSrc: "/images/shutterstock_645747736.png",
    imageAlt: "Manufacturing",
  },
  {
    title: "ASSISTANTS",
    imageSrc: "/images/shutterstock_662279290.png",
    imageAlt: "Assistants",
  },
];

export default function RoboticsPage() {
  return (
    <>
      <PageBanner imageSrc="/images/Hero.png" alt="Robotics">
        <div>
          <h1 className="text-left text-[34px] leading-[34px] font-extrabold md:text-[56px] md:leading-[45px]">
            ROBOTICS
          </h1>
          <span className="text-xl md:text-4xl">ALSO A STORY OF LIFE</span>
          <p className="mt-8 text-sm italic md:text-lg">
            Life evolves, robotics are no different.
          </p>
        </div>
      </PageBanner>

      <section className="py-10 md:py-20">
        <Container>
          <div className="text-center">
            <h3 className="px-2 text-xl leading-8 font-semibold text-navy italic md:px-8 md:text-[28px] md:leading-[38px]">
              Building on existing research and working closely with the defense
              department and other defense industry partners, we are a proud to
              announce a new breakthrough that represents a massive leap forward
              in artificial intelligence and advanced robotics.
            </h3>
            <p className="mx-auto mt-6 max-w-4xl text-left text-sm leading-[25px] text-[#373737]">
              This elegant combination technologies will revolutionize the human
              condition, changing everything from the way we protect our
              countries and police our people to how you clean your home.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-left text-sm leading-[25px] text-[#373737]">
              No longer do the countries of the world have to settle disputes
              with needless expenditure of human life. Now wars can be fought
              and won by value of your Globomantics Mark 1 upgrade selections.
              More than any other time in history, wars will be won by the
              willingness to spend rather than the strength of will of the
              individual.
            </p>
            <h3 className="mt-8 px-2 text-xl leading-8 font-semibold text-navy italic md:px-8 md:text-[28px] md:leading-[38px]">
              “We look forward to fulfilling your human replacement needs.”
            </h3>
            <p className="mx-auto mt-6 max-w-4xl text-left text-sm leading-[25px] text-[#373737]">
              But the applications don’t end there. Tired of being on the hook
              for being yourself 24/7 365? Enter U bot v1. It’s U but better!
              Using a proprietary DNA and behavior analysis technology, you can
              now customize our U class humanoid robotic platform to be an exact
              physical and behavioral replica of yourself! No more washing
              dishes, video chatting with your i-laws, or watching your
              children, replace yourself with U!
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-left text-sm leading-[25px] text-[#373737]">
              No matter the applications, all Globomantics Mark 1 and U line
              robots are hard coded to protect human life at all cost, even if
              the threat is humans themselves. You should never feel safer than
              when integrating our robtics platforms into all aspects of your
              life and community.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-left text-sm leading-[25px] text-[#373737]">
              We look forward to fulfilling your human replacement needs.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-10 md:pb-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {applications.map((item) => (
              <article key={item.title} className="text-center md:text-left">
                <h2 className="my-6 text-3xl font-bold uppercase md:mt-12 md:mb-12">
                  {item.title}
                </h2>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={900}
                  height={560}
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
