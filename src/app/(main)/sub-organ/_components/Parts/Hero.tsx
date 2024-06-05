"use client";

import Image from "@/app/_components/global/Image";
import { H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { useEffect, useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState<number>(0);
  const [isAuto, setIsAuto] = useState(true);

  const photos = [
    "https://placehold.co/1192x462?text=Hero1",
    "https://placehold.co/1192x462?text=Hero2",
    "https://placehold.co/1192x462?text=Hero3",
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
  }, [index]);

  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col gap-16 w-full">
        <div className="w-full h-[462px] rounded-2xl overflow-hidden">
          <Image
            src={photos[index]}
            alt=""
            className="w-full h-full object-cover"
            unoptimized
            width={1192}
            height={462}
          />
        </div>
        <div className="flex gap-[62px] items-center h-[226px] w-full justify-between">
          <figure
            className={`w-[356px] flex flex-col gap-[38px] hover:cursor-pointer group`}
            onClick={() => {
              setIsAuto(false);
              setIndex(0);
            }}
          >
            <div
              className={`w-[62px] h-[62px] rounded-full transition-all duration-500 ${index === 0 ? "bg-primary-400" : "bg-neutral-500 group-hover:bg-neutral-400"}`}
            ></div>
            <div>
              <H4
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 0 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem Ipsum
              </H4>
              <P
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 0 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
              </P>
            </div>
          </figure>
          <figure
            className="w-[356px] flex flex-col gap-[38px] hover:cursor-pointer group"
            onClick={() => {
              setIsAuto(false);
              setIndex(1);
            }}
          >
            <div
              className={`w-[62px] h-[62px] rounded-full transition-all duration-500 ${index === 1 ? "bg-primary-400" : "bg-neutral-500 group-hover:bg-neutral-400"}`}
            ></div>
            <div>
              <H4
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 1 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem Ipsum
              </H4>
              <P
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 1 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
              </P>
            </div>
          </figure>
          <figure
            className="w-[356px] flex flex-col gap-[38px] hover:cursor-pointer group"
            onClick={() => {
              setIsAuto(false);
              setIndex(2);
            }}
          >
            <div
              className={`w-[62px] h-[62px] rounded-full transition-all duration-500 ${index === 2 ? "bg-primary-400" : "bg-neutral-500 group-hover:bg-neutral-400"}`}
            ></div>
            <div>
              <H4
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 2 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem Ipsum
              </H4>
              <P
                className={`flex flex-col gap-3 text-wrap transition-all duration-300 ${index === 2 ? "text-black" : "text-neutral-500 group-hover:text-neutral-400"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
              </P>
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
