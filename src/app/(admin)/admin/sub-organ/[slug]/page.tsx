import { Suborgan_Type } from "@prisma/client";

import { findSubOrgan } from "@/utils/database/subOrgan.query";
// eslint-disable-next-line prettier/prettier
export default async function Edit({
  params,
}: {
  params: { suborgan: string };
}) {
  // eslint-disable-next-line prettier/prettier
  const data = await findSubOrgan({
    suborgan: params.suborgan as Suborgan_Type,
  });
}
