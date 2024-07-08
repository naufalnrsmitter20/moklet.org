import { useFormStatus } from "react-dom";

import { Button } from "@/app/_components/global/Button";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant={"primary"} type="submit" isDisabled={pending}>
      Kirim
    </Button>
  );
}
