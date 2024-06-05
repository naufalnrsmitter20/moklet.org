import { H4, P } from "@/app/_components/global/Text";
import OpenedBook from "@/app/_components/icons/OpenedBook";

export default function VisiMisi() {
  return (
    <section
      id="visimisi"
      className="py-[62px] px-[6%] lg:px-[12.5%] xl:px-[124px] flex gap-16 bg-primary-400 justify-between"
    >
      <div className="flex gap-7">
        <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center">
          <OpenedBook />
        </div>
        <div className="flex flex-col gap-2 w-[484px]">
          <H4 className="text-white">Visi</H4>
          <P className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
          </P>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center">
          <OpenedBook />
        </div>
        <div className="flex flex-col gap-2 w-[484px]">
          <H4 className="text-white">Misi</H4>
          <P className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
          </P>
        </div>
      </div>
    </section>
  );
}
