import React from "react";

import { H2, P } from "@/app/_components/global/Text";
import { UserWithLastlog } from "@/types/entityRelations";
import { findAllUsers } from "@/utils/database/user.query";

import AddUser from "./_components/AddUser";
import UserTable from "./_components/Table";

export default async function UsersPage() {
  const users: UserWithLastlog[] = await findAllUsers({
    NOT: { role: "Guest" },
  });
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div>
          <H2 className="font-semibold">User Managements</H2>
          <P>Change roles and permisson </P>
        </div>
        <AddUser />
      </div>
      <UserTable data={users} />
    </>
  );
}
