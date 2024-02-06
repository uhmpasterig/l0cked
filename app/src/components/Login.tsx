"use client";
import { cn } from "@/lib/utils/classname.utils";
import { Button, ButtonProps } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const LoginButton = ({ variant, children, className, size, ...props }: ButtonProps) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        variant={variant}
        className={className}
        onClick={() => signIn("discord")}
        {...props}
        size={size}
      >
        Login
      </Button>
    );
  } else {
    return (
      <Button variant={variant} className={className} {...props} size={size} asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    );
  }
};

export { LoginButton };
