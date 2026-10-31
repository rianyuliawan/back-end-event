"use client";
import { Controller } from "react-hook-form";

import {
  Button,
  Card,
  FieldError,
  InputGroup,
  Label,
  Link,
  Spinner,
  TextField,
} from "@heroui/react";

import { Person, Envelope, Lock, Eye, EyeSlash } from "@gravity-ui/icons";

import Image from "next/image";
import useLogin from "./useLogin";
import { cn } from "@/utils/cn";

const Login = () => {
  // Mengambil state dan handler dari custom hook
  const {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  } = useLogin();

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
          alt="Login Illustration"
          width={1024}
          height={1024}
          loading="eager"
          className="h-auto w-2/3 max-w-full lg:w-full"
        />
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <Card className="mx-auto w-full min-w-0 max-w-md gap-0 p-5 sm:p-8 lg:mx-0">
        {/* HEADER */}

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-danger">Login</h2>

            <p className="text-sm">
              Don't Have an Account?{" "}
              <Link href="/auth/register" className="font-semibold text-danger">
                Register here
              </Link>
            </p>
          </div>

          {errors.root && (
            <div
              role="alert"
              className="mt-5 rounded-lg border border-danger/30 bg-danger/5 px-4 py-3"
            >
              <p className="text-sm font-medium text-danger">
                {errors.root.message}
              </p>
            </div>
          )}
        </div>

        {/* FORM */}
        <form
          className={cn(
            "flex flex-col",
            Object.keys(errors).length > 0 ? "gap-2" : "gap-4",
          )}
          onSubmit={handleSubmit(handleLogin)}
        >
          <Controller
            name="identifier"
            control={control}
            render={({ field }) => (
              <TextField
                isInvalid={errors.identifier !== undefined}
                name="identifier"
                type="text"
                className="flex w-full flex-col gap-1"
              >
                <Label>Email / Username</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Person className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    placeholder="Enter your email / username"
                    autoComplete="off"
                  />
                </InputGroup>
                <FieldError>{errors.identifier?.message}</FieldError>
              </TextField>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                name="password"
                className="flex w-full flex-col gap-1"
                isInvalid={errors.password !== undefined}
              >
                <Label>Password</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Lock className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="off"
                  />

                  <InputGroup.Suffix className="pe-0">
                    <Button
                      type="button"
                      isIconOnly
                      size="sm"
                      variant="ghost"
                      aria-label={isVisible ? "Hide password" : "Show password"}
                      onPress={toggleVisibility}
                    >
                      {isVisible ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeSlash className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
                <FieldError>{errors.password?.message}</FieldError>
              </TextField>
            )}
          />

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="mt-3 w-full"
          >
            {isPendingLogin ? <Spinner color="current" size="sm" /> : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
