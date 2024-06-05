import Weight from "@/app/_components/icons/Weight";
import OrganizationSection from "../OrganizationSection";
import Language from "@/app/_components/icons/Language";
import Book from "@/app/_components/icons/Book";
import { ReactElement } from "react";

export interface organs {
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface organSections {
  sectionName: string;
  sectionDesc: string;
  sectionLogo: ReactElement;
  sectionOrgans: organs[];
}

const organizations: organSections[] = [
  {
    sectionName: "Olahraga",
    sectionLogo: <Weight />,
    sectionDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
    sectionOrgans: [
      {
        name: "TSVC",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "TSFC",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "TSBC",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "PASKATEMA",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
    ],
  },
  {
    sectionName: "Seni & Bahasa",
    sectionLogo: <Language />,
    sectionDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
    sectionOrgans: [
      {
        name: "MAC",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "COMET",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "MEMO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "BDI",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
    ],
  },
  {
    sectionName: "Ilmu",
    sectionLogo: <Book />,
    sectionDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
    sectionOrgans: [
      {
        name: "Palwaga",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
      {
        name: "Comet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        image: "https://placehold.co/62x62?text=Logo",
        href: "#",
      },
    ],
  },
];

export default function Organizations() {
  return (
    <>
      {organizations.map((org) => (
        <OrganizationSection data={org} />
      ))}
    </>
  );
}
