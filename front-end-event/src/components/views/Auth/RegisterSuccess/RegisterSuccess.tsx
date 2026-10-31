"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="Event Management Logo"
          width={180}
          height={180}
        />

        <Image
          src="/images/illustrations/email-send.svg"
          alt="Success"
          width={300}
          height={300}
          loading="eager"
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger">
          Account created successfully
        </h1>
        <p className="text-xl font-bold text-default-500">
          Check your email to avtivate your account
        </p>
        <Button
          className="mt-4 w-fit"
          variant="danger-soft"
          onPress={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
