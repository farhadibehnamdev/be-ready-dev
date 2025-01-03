"use client";
import { Button, Card } from "@nextui-org/react";
import FadeInImage from "./fade-in-image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardStack } from "./card-stack";
import { Highlight } from "../highlight";
type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const cards: Card[] = [
  {
    id: 1,
    name: "JS",
    designation: "question",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 2,
    name: "JS",
    designation: "question",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 3,
    name: "JS",
    designation: "question",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
];
export const HomeHeroSection = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background ">
      <main className="container mx-auto flex flex-1 flex-col gap-20 items-center justify-center overflow-hidden px-8 mb-28">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6 relative">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            radius="full"
            variant="bordered"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
          >
            New onboarding experience
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-zinc-300">
              Easiest way to <br /> power global teams.
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            Acme makes running global teams simple. HR, Payroll, International
            Employment, contractor management and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
              radius="full"
            >
              Get Started
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              See our plans
            </Button>
          </div>
        </section>
        <CardStack items={cards} />
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-120 select-none sm:scale-125">
          <FadeInImage
            fill
            priority
            alt="Gradient background"
            src="/images/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
};