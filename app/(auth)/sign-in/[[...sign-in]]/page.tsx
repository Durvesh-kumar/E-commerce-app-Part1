"use client"
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" h-screen flex items-center justify-center">
        <SignIn />
    </div>
  );
}
export const dynamic = "force-dynamic";