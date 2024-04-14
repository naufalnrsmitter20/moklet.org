import { H2, P } from "@/app/_components/global/Text";
import { nextGetServerSession } from "@/lib/next-auth";

export default async function Admin() {
  const session = await nextGetServerSession();
  const { user } = session!;
  const name = user?.name.replace(/ .*/,'');
  
  return <>
    <H2 className="font-semibold ">Halo, Bro {name}👋</H2>
    <P>Here’s what going on today</P>
  </>;
}
