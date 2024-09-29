"use client";

import { handleCredentialSignIn, handleGithubSignin } from "@/app/actions/authActions";
import ErrorMessage from "@/components/error-message";
import LoadingButton from "@/components/loading-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [globalError, setGlobalError] = useState<string>("");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const result = await handleCredentialSignIn(values);
    } catch (error) {
      console.error(error);
      console.log("An unexpected error happened");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </CardTitle>
          </CardHeader>
          <CardContent>
            {globalError && <ErrorMessage error={globalError} />}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter Password"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <LoadingButton pending={form.formState.isSubmitting} />
              </form>
            </Form>
            <span className="text-sm text-gray-500 text-center block my-2">
              or
            </span>
            <form className="w-full" action={handleGithubSignin}>
              <Button variant="outline" type="submit" className="w-full">
                <GitHubLogoIcon classNameh-4 w-4 mr-2/>
                Sign in with GitHub
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
