import { PrimaryButton } from "@/app/_components/global/Button";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" isDisabled={pending}>
      Simpan
    </PrimaryButton>
  );
}
