import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";
import { PageBanner } from "@/components/page-banner";

const features = [
  {
    title: "DARK ENERGY",
    subtitle: "BRIGHTENS THE WORLD",
    imageSrc: "/images/Bitmap.png",
    imageAlt: "Dark energy",
    href: "#",
  },
  {
    title: "ROBOTICS",
    subtitle: "THEY ARE HERE AND THEY PLAY",
    imageSrc: "/images/Bitmap(1).png",
    imageAlt: "Robotics",
    href: "/robotics",
  },
  {
    title: "STRANGERS RISE",
    subtitle: "ASCENSION GOES TECHNICAL",
    imageSrc: "/images/shutterstock_211091626.png",
    imageAlt: "Strangers Rise",
    href: "#",
  },
];

export default function HomePage() {
  return (
    <>
      <PageBanner
        imageSrc="/images/hero-home.png"
        mobileImageSrc="/images/mobileBanner.png"
        alt="The future was five minutes ago"
      >
        <div className="grid w-full gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h1 className="text-left text-[34px] leading-8 font-extrabold md:text-[56px] md:leading-[45px]">
              THE FUTURE
              <br />
              <span className="text-xl font-normal md:text-4xl">
                WAS FIVE MINUTES AGO
              </span>
              .
            </h1>
            <p className="mt-3 text-sm italic md:text-lg">
              We were there and it is going to be epic
            </p>
          </div>
          <div className="bg-[#0b4970b3] p-3 text-center md:col-span-4 md:bg-transparent md:p-0">
            <h3 className="text-2xl font-light tracking-[2px]">FUTURE</h3>
            <span className="text-base">CONFERENCE</span>
            <div className="my-2.5">
              <button
                type="button"
                className="rounded-full bg-teal px-10 py-2.5 text-sm font-semibold text-white"
              >
                SIGN UP TODAY
              </button>
            </div>
            <p className="mx-auto max-w-[200px] text-xs leading-5 md:px-4">
              Tickets are selling fast get yours today and be there in the
              future
            </p>
          </div>
        </div>
      </PageBanner>

      <section className="py-10 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
