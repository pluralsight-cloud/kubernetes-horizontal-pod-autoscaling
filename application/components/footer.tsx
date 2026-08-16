import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { footerPrimaryLinks, footerSecondaryLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer text-[#5E5E5E] lg:min-h-[350px]">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:py-16 lg:pr-[34%]">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Globo-Logo-white-footer.svg"
              alt="Globomantics"
              width={180}
              height={40}
              className="hidden h-auto w-[180px] lg:block"
            />
            <Image
              src="/images/G.png"
              alt="Globomantics"
              width={48}
              height={48}
              className="h-auto w-12 lg:hidden"
            />
          </Link>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:max-w-md">
            <ul>
              {footerPrimaryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-1 text-sm leading-8 text-[#5E5E5E] hover:text-[#373737]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerSecondaryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-1 text-sm leading-8 text-[#5E5E5E] hover:text-[#373737]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-black px-5 py-6 text-white lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[32%] lg:px-6 lg:pt-6 lg:pb-24">
        <div className="flex justify-center">
          <Image
            src="/images/pluralsight-white.png"
            alt="Pluralsight"
            width={220}
            height={40}
            className="h-auto w-[70%]"
          />
        </div>
        <span className="my-8 block h-px w-full bg-linear-to-r from-[#f05a28] to-[#e80a89]" />
        <p className="text-base leading-9">
          This site is created for demonstrative purposes only and does not
          offer any real products or services.
        </p>
      </div>
    </footer>
  );
}
