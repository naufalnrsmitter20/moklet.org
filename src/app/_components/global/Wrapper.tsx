import { ReactNode } from "react";

interface SectionWrapperProps {
  children?: ReactNode;
  id: string;
}

export function SectionWrapper({
  children,
  id,
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      className="relative w-full py-[82px] px-[6%] lg:px-[12.5%] xl:px-[124px]"
      id={id}
    >
      {children}
    </section>
  );
}

export function SmallSectionWrapper({
  children,
  id,
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      className="w-full py-[32px] mt-[42px] xl:mt-0 px-[6%] lg:px-[12.5%] xl:px-[124px]"
      id={id}
    >
      {children}
    </section>
  );
}
