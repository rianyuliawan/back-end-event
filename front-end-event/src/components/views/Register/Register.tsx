"use client";

import {
  Button,
  Card,
  InputGroup,
  Label,
  Link,
  TextField,
} from "@heroui/react";

import {
  Person,
  Envelope,
  Lock,
  Eye,
  EyeSlash,
} from "@gravity-ui/icons";

import Image from "next/image";
import useRegister from "./useRegister";

const Register = () => {
  // Mengambil state dan handler dari custom hook
  const { visiblePassword, handleVisiblePassword } = useRegister();

  return (
    <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">
      {/* LEFT SIDE - ILLUSTRATION */}
      <div className="flex w-full min-w-0 flex-col items-center justify-center gap-6 lg:w-1/3">
        <Image
          src="/images/general/logo.svg"
          alt="Event Management Logo"
          width={180}
          height={180}
          className="h-auto max-w-full"
        />

        <Image
          src="/images/illustrations/login.svg"
          alt="Register Illustration"
          width={1024}
          height={1024}
          loading="eager"
          className="h-auto w-2/3 max-w-full lg:w-full"
        />
      </div>

      {/* RIGHT SIDE - REGISTER FORM */}
      <Card className="mx-auto w-full min-w-0 max-w-md gap-0 p-5 sm:p-8 lg:mx-0">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-1">
          <h2 className="text-xl font-bold text-danger">
            Create Account
          </h2>

          <p className="text-sm">
            Have an Account?{" "}
            <Link
              href="/login"
              className="font-semibold text-danger"
            >
              Login here
            </Link>
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4">
          {/* FULLNAME */}
          <TextField
            name="fullName"
            type="text"
            className="flex w-full flex-col gap-1"
            isRequired
          >
            <Label>Fullname</Label>

            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Person className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="Enter your fullname"
                autoComplete="name"
              />
            </InputGroup>
          </TextField>

          {/* USERNAME */}
          <TextField
            name="username"
            type="text"
            className="flex w-full flex-col gap-1"
            isRequired
          >
            <Label>Username</Label>

            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Person className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="Enter your username"
                autoComplete="username"
              />
            </InputGroup>
          </TextField>

          {/* EMAIL */}
          <TextField
            name="email"
            type="email"
            className="flex w-full flex-col gap-1"
            isRequired
          >
            <Label>Email</Label>

            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Envelope className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="name@email.com"
                autoComplete="email"
              />
            </InputGroup>
          </TextField>

          {/* PASSWORD */}
          <TextField
            name="password"
            className="flex w-full flex-col gap-1"
            isRequired
          >
            <Label>Password</Label>

            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Lock className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                type={
                  visiblePassword.password
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                autoComplete="new-password"
              />

              <InputGroup.Suffix className="pe-0">
                <Button
                  type="button"
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  aria-label={
                    visiblePassword.password
                      ? "Hide password"
                      : "Show password"
                  }
                  onPress={() =>
                    handleVisiblePassword("password")
                  }
                >
                  {visiblePassword.password ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          {/* CONFIRM PASSWORD */}
          <TextField
            name="confirmPassword"
            className="flex w-full flex-col gap-1"
            isRequired
          >
            <Label>Confirm Password</Label>

            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Lock className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input
                type={
                  visiblePassword.passwordConfirmation
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                autoComplete="new-password"
              />

              <InputGroup.Suffix className="pe-0">
                <Button
                  type="button"
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  aria-label={
                    visiblePassword.passwordConfirmation
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onPress={() =>
                    handleVisiblePassword("passwordConfirmation")
                  }
                >
                  {visiblePassword.passwordConfirmation ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="mt-3 w-full"
          >
            Create Account
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;