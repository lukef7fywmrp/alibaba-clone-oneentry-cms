"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={className}>
      {children}
    </button>
  );
}

export default SubmitButton;
