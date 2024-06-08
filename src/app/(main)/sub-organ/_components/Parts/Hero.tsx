"use client";

import { title } from "process";

import { useEffect, useState } from "react";

import Image from "@/app/_components/global/Image";
import { H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Hero() {
  const [index, setIndex] = useState<number>(0);
  const [isAuto, setIsAuto] = useState(true);

  const photos = [
    "https://placehold.co/1192x462?text=Hero1",
    "https://placehold.co/1192x462?text=Hero2",
    "https://placehold.co/1192x462?text=Hero3",
  ];

  const Items = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper odio justo, vitae blandit lacus facilisis lobortis.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper odio justo, vitae blandit lacus facilisis lobortis.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper odio justo, vitae blandit lacus facilisis lobortis.",
    },
  ];

  useEffect(() => {
    if (index < 2 && isAuto)
      setTimeout(() => {
        setIndex(index + 1);
      }, 5000);
    if (index >= 2 && isAuto)
      setTimeout(() => {
        setIndex(0);
      }, 5000);
    else return;
  }, [index, isAuto]);

  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col gap-16 w-full">
        <div className="w-full h-[243px] sm:h-[462px] rounded-2xl overflow-hidden">
          <Image
            src={photos[index]}
            alt=""
            className="w-full h-full object-cover"
            unoptimized
            width={1192}
            height={462}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-[62px] items-center h-auto sm:h-[304px] lg:h-[226px] w-full justify-between">
          {Items.map((item, i) => (
            <figure
              key={i}
              className={
                "w-full sm:w-[197px] xl:w-[356px] flex flex-col gap-[38px] hover:cursor-pointer group"
              }
              onClick={() => {
                setIsAuto(false);
                setIndex(i);
              }}
            >
              <div
                className={`w-[62px] h-[62px] rounded-full transition-all duration-500 ${index === i ? "bg-primary-400" : "bg-neutral-500 group-hover:bg-neutral-400"}`}
              ></div>
              <div>
                <H4
                  className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === i ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
                >
                  {item.title}
                </H4>
                <P
                  className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === i ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
                >
                  {item.desc}
                </P>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
