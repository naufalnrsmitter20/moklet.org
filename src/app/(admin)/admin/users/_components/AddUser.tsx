"use client";

import { useState } from "react";
import Modal from "./Modal";
export default function AddUser() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  return (
    <>
      {showModalCreate && <Modal setIsOpenModal={setShowModalCreate} />}
      <button
        onClick={() => setShowModalCreate(true)}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
      >
        Add
      </button>
    </>
  );
}
