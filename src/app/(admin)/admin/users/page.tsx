import React from "react";
import { findAllUsers } from "@/utils/database/user.query";
import UserTable from "./_components/Table";
import { UserWithLastlog } from "@/types/entityRelations";
import AddUser from "./_components/AddUser";

export default async function UsersPage() {
  const users: UserWithLastlog[] = await findAllUsers({
    NOT: { role: "Guest" },
  });
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold ">User Management</h1>
        <AddUser />
      </div>
      <UserTable data={users} />
    </div>
  );
}
