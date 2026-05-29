"use client";

import { useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import GamifiedLoginCard from "@/components/gamified-login-card";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (data: any) => {
    setError(null);
    try {
      await api.post("/auth/register", data);
      
      // We add a tiny delay so the user can see the confetti before redirecting
      setTimeout(() => {
        router.push("/login");
      }, 1500);
      
    } catch (err: any) {
      const errMsg = err.response?.data?.message || "Something went wrong during signup";
      setError(errMsg);
      throw err;
    }
  };

  return <GamifiedLoginCard mode="signup" onSubmit={handleSignup} error={error} />;
}
