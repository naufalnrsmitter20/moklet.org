// "use client";
// import { useState } from "react";
import { Roles, User } from "@prisma/client";
import { H4, P } from "@/app/_components/global/Text";
import Image from "@/app/_components/global/Image";
import { updateUser } from "@/utils/database/user.query";

export default function Content(user: { user: User }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const updateUserWithId = async (form: FormData) => {
    "use server";
    updateUser({ id: user.user.id }, { role: form.get("role") as Roles });
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
            {user.user?.user_pic && (
              <Image
                src={user.user.user_pic}
                alt={`${user.user.name} User Picture`}
                width={300}
                height={300}
              />
            )}
          </div>
          <div className="">
            {user.user && (
              <>
                <H4>{user.user.name}</H4>
                <P>{user.user.email}</P>
              </>
            )}
          </div>
        </div>
        {/* <button
          onClick={openModal}
          className="px-6 py-2 w-24 h-12 rounded-lg bg-green-400 hover:bg-green-500 text-white"
        >
          Edit
        </button> */}
      </header>
      <article className="my-6 flex flex-wrap gap-12">
        {user.user && (
          <>
            <div className="w-1/3">
              <P>Role</P>
              <form action={updateUserWithId}>
                <div>
                  <select
                    name="role"
                    value={user.user.role}
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
              <span className="text-lg font-medium">{user.user.id}</span>
            </div>
          </>
        )}
      </article>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} user={user.user} /> */}
    </>
  );
}

// const Modal = ({
//   isOpen,
//   onClose,
//   user,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   user: User;
// }) => {
//   const [formData, setFormData] = useState<{ role: Roles }>({
//     role: user?.role || Roles.Guest,
//   });

//   return (
//     <div
//       className={`${isOpen ? "block" : "hidden"} fixed z-50 inset-0 overflow-y-auto`}
//     >
//       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         <span
//           className="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>

//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">
//                   Form Sederhana
//                 </h3>
//                 <div>
//                   <form action={updateUserWithId}>
//                     <div>
//                       <select
//                         value={formData.role}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                       >
//                         {Object.values(Roles).map((role) => (
//                           <option key={role} value={role}>
//                             {role}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="mt-2">
//                       <button
//                         type="submit"
//                         className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
//                       >
//                         Kirim
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
