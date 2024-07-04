import { ReactElement } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import OrganizationSection from "../OrganizationSection";

export interface Suborgan {
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface SuborganSection {
  sectionName: string;
  sectionDesc: string;
  sectionLogo: ReactElement;
  sectionOrgans: Suborgan[];
}

const organizations: SuborganSection[] = [
  {
    sectionName: "Organisasi",
    sectionLogo: <FaGlobe />,
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
    sectionName: "Sub-organisasi",
    sectionLogo: <FaUserGroup />,
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
];

export default function Organizations() {
  return (
    <>
      {organizations.map((org) => (
        <OrganizationSection data={org} key={org.sectionName} />
      ))}
    </>
  );
}
