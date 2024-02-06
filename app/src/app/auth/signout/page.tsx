"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      <Button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
