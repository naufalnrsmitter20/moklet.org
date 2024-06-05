import { useFormStatus } from "react-dom";

import { PrimaryButton } from "@/app/_components/global/Button";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton isDisabled={pending}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Create Kirim
    </PrimaryButton>
  );
}
