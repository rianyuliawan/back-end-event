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
import useRegister from "./useRegister";
import { cn } from "@/utils/cn";

const Register = () => {
  // Mengambil state dan handler dari custom hook
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();

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
        <div className="mb-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-danger">Create Account</h2>

            <p className="text-sm">
              Have an Account?{" "}
              <Link href="/auth/login" className="font-semibold text-danger">
                Login here
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
          onSubmit={handleSubmit(handleRegister)}
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                className="flex w-full flex-col gap-1"
                isInvalid={errors.fullName !== undefined}
              >
                <Label>Fullname</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Person className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    placeholder="Enter your fullname"
                    autoComplete="off"
                  />
                </InputGroup>
                <FieldError>{errors.fullName?.message}</FieldError>
              </TextField>
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                isInvalid={errors.username !== undefined}
                name="username"
                type="text"
                className="flex w-full flex-col gap-1"
              >
                <Label>Username</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Person className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    placeholder="Enter your username"
                    autoComplete="off"
                  />
                </InputGroup>
                <FieldError>{errors.username?.message}</FieldError>
              </TextField>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                name="email"
                type="email"
                className="flex w-full flex-col gap-1"
                isInvalid={errors.email !== undefined}
              >
                <Label>Email</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Envelope className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    placeholder="name@email.com"
                    autoComplete="off"
                  />
                </InputGroup>
                <FieldError>{errors.email?.message}</FieldError>
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
                    type={visiblePassword.password ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="off"
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
                      onPress={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                name="confirmPassword"
                className="flex w-full flex-col gap-1"
                isInvalid={errors.confirmPassword !== undefined}
              >
                <Label>Confirm Password</Label>

                <InputGroup variant="secondary">
                  <InputGroup.Prefix>
                    <Lock className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    {...field}
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="off"
                  />

                  <InputGroup.Suffix className="pe-0">
                    <Button
                      type="button"
                      isIconOnly
                      size="sm"
                      variant="ghost"
                      aria-label={
                        visiblePassword.confirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      onPress={() => handleVisiblePassword("confirmPassword")}
                    >
                      {visiblePassword.confirmPassword ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeSlash className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
                <FieldError>{errors.confirmPassword?.message}</FieldError>
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
            {isPendingRegister ? (
              <Spinner color="current" size="sm" />
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
