"use client";
import { Accordion, AccordionItem, Chip, Image } from "@nextui-org/react";

const Questions: React.FC = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex justify-between items-center ">
      <Accordion className="container w-2/3 gap-5" variant="splitted">
        <AccordionItem
          key="1"
          className="bg-zinc-900 ring-1 ring-zinc-600"
          aria-label="Accordion 2"
          title={
            <div className="flex justify-between">
              <Image
                src="/images/js-gray.svg"
                className="rounded-full shadow-md drop-shadow-md bg-zinc-200 ring-1 ring-slate-300 "
                width={34}
                height={34}
                alt=""
              />
              <span>What is the Colusure?</span>
              <Chip
                variant="flat"
                className="bg-green-600 ring-1 ring-zinc-600 shadow-md"
              >
                Entry
              </Chip>
            </div>
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          className="bg-zinc-900 ring-1 ring-zinc-600"
          key="2"
          aria-label="Accordion 2"
          title={
            <div className="flex justify-between">
              <Image
                src="/images/js-gray.svg"
                className="rounded-full shadow-md drop-shadow-md bg-zinc-200 ring-1 ring-slate-300 "
                width={34}
                height={34}
                alt=""
              />
              <span>What is the Colusure?</span>
              <Chip
                variant="flat"
                className="bg-blue-600 ring-1 ring-zinc-600 shadow-md"
              >
                Junior
              </Chip>
            </div>
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          className="bg-zinc-900 ring-1 ring-zinc-600"
          aria-label="Accordion 2"
          title={
            <div className="flex justify-between">
              <Image
                src="/images/js-gray.svg"
                className="rounded-full shadow-md drop-shadow-md bg-zinc-200 ring-1 ring-slate-300 "
                width={34}
                height={34}
                alt=""
              />
              <span>What is the Colusure?</span>
              <Chip
                variant="flat"
                className="bg-red-700 ring-1 ring-zinc-600 shadow-md"
              >
                Mid
              </Chip>
            </div>
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="4"
          className="bg-zinc-900 ring-1 ring-zinc-600"
          aria-label="Accordion 2"
          title={
            <div className="flex justify-between">
              <Image
                src="/images/js-gray.svg"
                className="rounded-full shadow-md drop-shadow-md bg-zinc-200 ring-1 ring-slate-300 "
                width={34}
                height={34}
                alt=""
              />
              <span>What is the Colusure?</span>
              <Chip
                variant="flat"
                className="bg-orange-700 ring-1 ring-zinc-600 shadow-md"
              >
                Senior
              </Chip>
            </div>
          }
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="5"
          className="bg-zinc-900 ring-1 ring-zinc-600 shadow-slate-300"
          aria-label="Accordion 2"
          title={
            <div className="flex justify-between">
              <Image
                src="/images/js-gray.svg"
                className="rounded-full shadow-md drop-shadow-md bg-zinc-200 ring-1 ring-slate-300 "
                width={34}
                height={34}
                alt=""
              />
              <span>What is the Colusure?</span>
              <Chip
                variant="flat"
                className="bg-yellow-600 ring-1 ring-zinc-600 shadow-slate-700"
              >
                Expert
              </Chip>
            </div>
          }
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Questions;
