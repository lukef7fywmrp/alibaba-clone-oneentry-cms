"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/navigation";

function SignupButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/signup")}
      whileTap={{ scale: 0.9 }}
      className={buttonVariants({
        className: "!font-semibold !rounded-full !w-28",
        size: "sm",
      })}
    >
      Sign up
    </motion.button>
  );
}

export default SignupButton;
