"use client";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { SignUpSchema } from "@/lib/validation";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      type="SIGN-UP"
      schema={SignUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default SignUp;
