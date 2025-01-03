"use client";
import { HomeHeroSection } from "../_components/home-hero-section/home-hero-section";
import { Divider, Spacer } from "@nextui-org/react";
import { FeaturesSection } from "../_components/feature/feature-section";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardQuestion } from "../_components/card-question";
import { Spotlight } from "../_components/spotlight/spotlight";
const questions = [
  {
    questionNumber: "01",
    title: "What is hoisting in JavaScript?",
    level: "Junior",
    topic: "Javascript",
  },
  {
    questionNumber: "02",
    title: "Explain the difference between let, const and var",
    level: "Mid",
    topic: "Golang",
  },
  {
    questionNumber: "03",
    title: "What is the difference between == and === operators?",
    level: "Senior",
    topic: "Python",
  },
];
export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <section className=" text-center drop-shadow-lg w-full bg-[linear-gradient(to_right,#15151512,#554f4f44)] ">
        <div className="flex justify-between items-center mx-auto container p-10">
          <span className="font-bold text-[32px]">Javascript</span>
          <span className="font-bold text-[32px]  ">Golang</span>
          <span className="font-bold text-[32px]  ">Python</span>
          <span className="font-bold text-[32px] ">Java</span>
          <span className="font-bold text-[32px]  ">C#</span>
          <span className="font-bold text-[32px] ">PHP</span>
          <span className="font-bold text-[32px]">Nodejs</span>
          <span className="font-bold text-[32px]">Angular</span>
          <span className="font-bold text-[32px] ">Dart</span>
          <span className="font-bold text-[32px]">Kotlin</span>
        </div>
      </section>
      <section className="h-full py-10 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]">
        <div className="flex justify-around items-center container ">
          <div className=" rounded-md flex p-5 antialiased bg-grid-white relative overflow-hidden">
            <Spotlight
              className="-top-50 left-50 md:left-40 md:-top-40 mx-auto flex justify-center items-center "
              fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <h1 className="text-5xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Be-Ready DEV <br /> interview questions for you.
              </h1>
              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Our questions are carefully chosen to assess key skills and
                competencies, ensuring you're prepared for even the most
                challenging interviews.
              </p>
            </div>
          </div>
          {/* <div className=" flex flex-col justify-center items-center gap-3 ">
            <h1 className="font-bold text-center text-[35px] text-zinc-400  ">
              We curate a selection of the best
              <br />
              interview questions for you.
            </h1>
            <p className="text-wrap text-center text-sm text-zinc-500">
              Our questions are carefully chosen to assess key skills and
              competencies,
              <br />
              ensuring you're prepared for even the most challenging interviews.
            </p>
          </div> */}
          <div className="flex justify-center flex-col gap-5">
            {questions.map((question) => (
              <CardQuestion
                key={question.questionNumber}
                questionNumber={question.questionNumber}
                title={question.title}
                level={question.level}
                topic={question.topic}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 shadow-2xl drop-shadow-lg  p-16">
        <div className="mb-10 flex justify-center items-center gap-3">
          <h1 className="text-5xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Every feature you need to win. <br />
            Try it for yourself
          </h1>
        </div>
        <FeaturesSection />
      </section>
      <section className="bg-transparent  p-16">
        <div className="mb-10 flex justify-center items-center gap-3">
          <h1 className="text-5xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            What the other says about us.
          </h1>
        </div>
        <FeaturesSection />
      </section>
    </>
  );
}
