import { H3 } from "@/app/_components/global/Text";
import { FaX } from "react-icons/fa6";
import { PrimaryButton } from "@/app/_components/global/Button";
import { TextField } from "@/app/_components/global/Input";
import { LinkWithCountAndUser } from "@/types/entityRelations";
import { Dispatch, SetStateAction } from "react";

export default function Modal({
  setIsOpenModal,
  link,
}: {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  link?: LinkWithCountAndUser;
}) {
  return (
    <div className="bg-gray-300/50 fixed w-[calc(100%-20rem)] z-10 justify-center items-center top-0 right-0 h-[calc(100%-1rem)] m-auto">
      <div className="relative p-4 w-full h-full max-w-2xl max-h-full m-auto top-20">
        <div className="relative bg-white rounded-lg">
          <form action="">
            <div className="flex items-center justify-between p-4 md:p-5 border-b">
              <H3>Link Shortener</H3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
                onClick={() => setIsOpenModal(false)}
              >
                <FaX size={25} />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <TextField
                type="text"
                name="target_url"
                required
                value={link?.target_url}
                label="Target Link"
                placeholder="https://example.com/blablablablablabla"
              />
              <TextField
                type="text"
                name="slug"
                label="Short URL"
                value={link?.slug}
                placeholder="mylink"
              />
              <TextField
                type="password"
                label="Password"
                placeholder="**********"
              />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
              <PrimaryButton>Kirim</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
