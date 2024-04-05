import { findUser, updateUser } from "@/utils/database/user.query";
import { Roles } from "@prisma/client";
import Image from "@/app/_components/global/Image";
import { H4, P } from "@/app/_components/global/Text";

export default async function Detail({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await findUser({ id: id });
  const updateUserWithId = async (form: FormData) => {
    "use server";
    updateUser({ id: id }, { role: form.get("role") as Roles });
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
            {user?.user_pic && (
              <Image
                src={user.user_pic}
                alt={`${user.name} User Picture`}
                width={300}
                height={300}
              />
            )}
          </div>
          <div className="">
            {user && (
              <>
                <H4>{user.name}</H4>
                <P>{user.email}</P>
              </>
            )}
          </div>
        </div>
      </header>
      <article className="my-6 flex flex-wrap gap-12">
        {user && (
          <>
            <div className="w-1/3">
              <P>Role</P>
              <form action={updateUserWithId}>
                <div>
                  <select
                    name="role"
                    defaultValue={user.role}
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {Object.values(Roles).map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/3">
              <P>Id</P>
              <span className="text-lg font-medium">{user.id}</span>
            </div>
          </>
        )}
      </article>
    </>
  );
}

export const revalidate = 0;
