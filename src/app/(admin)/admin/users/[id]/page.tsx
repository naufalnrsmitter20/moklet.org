import React, { useEffect, useState } from "react";
import { findUser } from "@/utils/database/user.query";
import Content from "../../components/Modal";

export default async function Detail({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await findUser({ id: id });

  return(
  <Content user={user!}></Content>
  )
}

export const revalidate = 0;
