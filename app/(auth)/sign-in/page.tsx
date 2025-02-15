"use client";
import AuthForm from "@/components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth";
import { SignInSchema } from "@/lib/validation";
import React from "react";

const SignIn = () => {
  return (
    <AuthForm
      type="SIGN-IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignIn;
