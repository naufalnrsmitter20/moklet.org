import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { P } from "@/app/_components/global/Text";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { protectedRoutes } from "@/utils/protectedRoutes";
import { usePathname } from "next/navigation";

type navbarParam = {
  nav: boolean;
  session: Session | null;
};
export function Sidebar({ nav, session }: navbarParam) {
  const pathname = usePathname();

  const allowedRoutes = protectedRoutes.filter(
    (item) =>
      item.roles == "All" ||
      item.roles.includes(session?.user?.role!) ||
      (!session?.user?.role?.includes("Admin") &&
        item.roles.includes("SubOrgan")),
  );

  return (
    <aside
      id="sidebar"
      className={`fixed ${
        nav ? "w-80" : "w-0 opacity-0"
      } left-0 bg-white top-0 z-20 h-full flex-shrink-0 transition-all duration-300 lg:w-80 lg:opacity-100 hidden lg:flex`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r px-4 border-gray-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
          <div className="flex-1 space-y-1 bg-white px-3">
            <Link href={"/"} className="block">
              <Image
                src={"/horizontal.svg"}
                alt="Logo moklet.org"
                width={120}
                height={50}
                className="pointer-events-none mb-10 h-[50px] w-[130px]"
              />
            </Link>
            <ul className="space-y-4 pb-2">
              <li>
                <Link
                  href={"/admin"}
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-primary-400 hover:bg-red-100 transition-all"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.1103 11.65H7.4603C6.8303 11.65 6.32031 12.16 6.32031 12.79V17.91H10.1103V11.65V11.65Z"
                      stroke="#E04E4E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7616 7.09998H11.2415C10.6115 7.09998 10.1016 7.60999 10.1016 8.23999V17.9H13.8916V8.23999C13.8916 7.60999 13.3916 7.09998 12.7616 7.09998Z"
                      stroke="#E04E4E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5484 13.35H13.8984V17.9H17.6884V14.49C17.6784 13.86 17.1684 13.35 16.5484 13.35Z"
                      stroke="#E04E4E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                      stroke="#E04E4E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <P className="ml-3 whitespace-nowrap text-primary-400 font-semibold">
                    Dashboard
                  </P>
                </Link>
              </li>
              <P className="font-semibold">Menu</P>
              {allowedRoutes.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={
                      (pathname.includes(item.path) ? "bg-red-100 " : "") +
                      "group flex items-center rounded-lg p-2 text-base font-normal text-primary-400 hover:bg-red-200 transition-all"
                    }
                  >
                    <div dangerouslySetInnerHTML={{__html: item.icon}} />
                    <P className="ml-3 whitespace-nowrap text-primary-400 font-semibold">
                      {item.title}
                    </P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
