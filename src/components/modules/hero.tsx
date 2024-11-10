import { SITE_CONFIG } from "@/lib/constants/site-config";
import { Section, BackgroundGrid, H1, TextCode, CopyBtn } from "@/components";
import { Button } from "../ui/button";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full h-[calc(100dvh-90px)] m-0 relative overflow-hidden">
      <div className="h-full w-full flex items-center justify-center flex-col gap-6 px-6">
        <H1 className="text-center text-4xl md:text-6xl lg:text-6xl font-[700] leading-tight text-zinc-800 dark:text-zinc-100 z-10 transition duration-300 ease-in-out uppercase">
          Learn{" "}
          <span className="bg-gradient-to-r from-slate-600 to-cyan-700 bg-clip-text text-transparent">
            Skills
          </span>{" "}
          that <br />{" "}
          <span className="bg-gradient-to-r from-slate-600 to-cyan-700 bg-clip-text text-transparent">
            really
          </span>{" "}
          matters in life
        </H1>

        <div className="flex items-center gap-4">
          <Button>Explore Courses</Button>
        </div>
      </div>
    </Section>
  );
}
