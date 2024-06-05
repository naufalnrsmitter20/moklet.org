import { useFormStatus } from "react-dom";

import { PrimaryButton } from "@/app/_components/global/Button";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" isDisabled={pending}>
      Simpan
    </PrimaryButton>
  );
}
